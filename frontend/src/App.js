import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      battles: [],
      searchData: [],
      kings: {
        "Joffrey/Tommen Baratheon": "https://vignette.wikia.nocookie.net/gameofthrones/images/2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest/top-crop/width/720/height/900?cb=20190418203833",
        "Robb Stark": "https://i.pinimg.com/originals/64/40/d8/6440d80459691666a102437881c68b55.jpg",
        "Balon/Euron Greyjoy": "https://i.pinimg.com/564x/2d/1b/d5/2d1bd54e1d20097f8257698783ea3601.jpg",
        "Stannis Baratheon": "https://vignette.wikia.nocookie.net/gameofthrones/images/7/7a/Stannis_S05E09.png/revision/latest/scale-to-width-down/314?cb=20190412205744",
        "Mance Rayder": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/17/GOT_Season_5_10.jpg/revision/latest?cb=20160826005613"
      
      },
      houses:{
        "Lannister": "https://wallpaperaccess.com/full/369010.jpg",
        "Stark": "https://wallpaperaccess.com/full/369020.jpg",
        "Greyjoy": "https://wallpaperaccess.com/full/369016.jpg",
        "Baratheon": "https://wallpaperaccess.com/full/369013.jpg",
        "Frey": "https://wallpapercave.com/wp/PuR7OWh.jpg",
        "Bolton": "https://i.ytimg.com/vi/LoDqZeqt-RU/maxresdefault.jpg",
        "Tyrell": "https://wallpaperaccess.com/full/567080.jpg",
        "Blackwood": "https://pm1.narvii.com/6479/c24d07283c818526b1360b75d2a93e30b0bf8d45_hq.jpg",
        "Mallister": "https://i.pinimg.com/originals/d4/7a/18/d47a18be57a8c531180748588728af8c.jpg",
        "Night's Watch": "http://www.charmsaddict.com/wp-content/uploads/2015/06/game-of-thrones-the-nights-watch-wallpaper.jpg",
        "Tully": "https://wallpaperaccess.com/full/567094.jpg"
      }
    }
  }
  componentDidMount(){
    axios.get('https://got-battle-app-backend.herokuapp.com/got-api/battles')
    .then(response=>{
        console.log("Data recieved!");
        this.setState({
          battles: response.data
        })
        console.log(this.state.battles);
    })
  }
  searchBattleLocation=(event,value)=>{
    console.log(value);
    axios.get('https://got-battle-app-backend.herokuapp.com/got-api/search?location='+value)
    .then(response=>{
      console.log(response.data);
      this.setState({
        searchData: response.data
      })
    })
  }

  render = ()=>{
    let items = this.state.battles;
    return (
      <div className="App">
        <h1 > Game of Thrones - Battle App</h1>
        <p>Search for Battle details from location:</p>
        <Autocomplete
        onChange={this.searchBattleLocation}
        freeSolo
        disableClearable
        options={items.map((option) => option.location)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search battle"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      {this.state.searchData.map(battleDetail=>(
        <div key={battleDetail._id} className="battle-wrapper">
          <h2>{battleDetail.name}</h2>
      <p>Fought in {battleDetail.year}</p>
      <p>Location: {battleDetail.location}, {battleDetail.region}</p>
      <div className="grid_container">
      <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
          <Paper >
            <div className="king-card attacker">
              <div className="king-cover" style={this.state.houses[battleDetail.attacker_1]?{backgroundImage:'url('+this.state.houses[battleDetail.attacker_1]+')'}:{backgroundImage:'url(https://images.hdqwalls.com/download/throne-game-of-thrones-qhd-2880x1800.jpg)'}}>
                <div className="circle">
                  <img src={this.state.kings[battleDetail.attacker_king]} alt={battleDetail.attacker_king} />
                </div>
              </div>
            <h3><Chip label={battleDetail.attacker_king} variant="outlined" size="medium" /></h3>
            <hr></hr>
            <p><span className="highlight">Commanded by:</span> {battleDetail.attacker_commander}</p>
            <p><span className="highlight">Troops:</span> {battleDetail.attacker_1}</p>
            <Tooltip title="Army Size">
              <Button><i className="fas fa-user-shield army-color" ></i> {battleDetail.attacker_size?battleDetail.attacker_size:'N/A'}</Button>
            </Tooltip>
            </div>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div className="relative-card">
          <Avatar>V/S</Avatar>
          </div>
        </Grid>
      <Grid item xs={12} sm={5}>
          <Paper >
            <div className="king-card defender">
              <div className="king-cover" style={this.state.houses[battleDetail.defender_1]?{backgroundImage:'url('+this.state.houses[battleDetail.defender_1]+')'}:{backgroundImage:'url(https://images.hdqwalls.com/download/throne-game-of-thrones-qhd-2880x1800.jpg)'}}>
                <div className="circle">
                  <img src={this.state.kings[battleDetail.defender_king]} alt={battleDetail.defender_king} />
                </div>
              </div>
            <h3><Chip label={battleDetail.defender_king} variant="outlined" size="medium" /></h3>
            <hr></hr>
            <p><span className="highlight">Commanded by:</span> {battleDetail.defender_commander}</p>
            <p><span className="highlight">Troops:</span> {battleDetail.defender_1}</p>
            <Tooltip title="Army Size">
              <Button><i className="fas fa-user-shield army-color" ></i> {battleDetail.defender_size}</Button>
            </Tooltip>
            </div>
            </Paper>
        </Grid>
        </Grid>
        </div>
          </div>
      ))}
      </div>
    );

  }
}

export default App;
