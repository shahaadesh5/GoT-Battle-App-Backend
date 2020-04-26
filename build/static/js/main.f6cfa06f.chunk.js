(this["webpackJsonpgot-battle-app-frontend"]=this["webpackJsonpgot-battle-app-frontend"]||[]).push([[0],{62:function(e,a,t){e.exports=t(90)},67:function(e,a,t){},68:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(10),c=t.n(o),r=(t(67),t(53)),s=t(47),i=t(48),m=t(54),p=t(52),h=(t(68),t(33)),d=t.n(h),g=t(130),u=t(131),f=t(127),E=t(129),b=t(133),k=t(134),v=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).searchBattleLocation=function(e,a){console.log(a),d.a.get("https://got-battle-app-backend.herokuapp.com/got-api/search?location="+a).then((function(e){console.log(e.data),n.setState({searchData:e.data})}))},n.render=function(){var e=n.state.battles;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null," Game of Thrones - Battle App"),l.a.createElement("p",null,"Search for Battle details from location:"),l.a.createElement(u.a,{onChange:n.searchBattleLocation,freeSolo:!0,disableClearable:!0,options:e.map((function(e){return e.location})),renderInput:function(e){return l.a.createElement(g.a,Object.assign({},e,{label:"Search battle",variant:"outlined",InputProps:Object(r.a)({},e.InputProps,{type:"search"})}))}}),n.state.searchData.map((function(e){return l.a.createElement("div",{key:e._id,className:"battle-wrapper"},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,"Fought in ",e.year),l.a.createElement("p",null,"Location: ",e.location,", ",e.region),l.a.createElement("div",{className:"grid_container"},l.a.createElement(E.a,{container:!0,spacing:2},l.a.createElement(E.a,{item:!0,xs:12,sm:5},l.a.createElement(f.a,null,l.a.createElement("div",{className:"king-card attacker"},l.a.createElement("div",{className:"king-cover",style:n.state.houses[e.attacker_1]?{backgroundImage:"url("+n.state.houses[e.attacker_1]+")"}:{backgroundImage:"url(https://images.hdqwalls.com/download/throne-game-of-thrones-qhd-2880x1800.jpg)"}},l.a.createElement("div",{className:"circle"},l.a.createElement("img",{src:n.state.kings[e.attacker_king],alt:e.attacker_king}))),l.a.createElement("h3",null,l.a.createElement(b.a,{label:e.attacker_king,variant:"outlined",size:"medium"})),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("span",{className:"highlight"},"Commanded by:")," ",e.attacker_commander),l.a.createElement("p",null,l.a.createElement("span",{className:"highlight"},"Troops:")," ",e.attacker_1)))),l.a.createElement(E.a,{item:!0,xs:12,sm:2},l.a.createElement("div",{className:"relative-card"},l.a.createElement(k.a,null,"V/S"))),l.a.createElement(E.a,{item:!0,xs:12,sm:5},l.a.createElement(f.a,null,l.a.createElement("div",{className:"king-card defender"},l.a.createElement("div",{className:"king-cover",style:n.state.houses[e.defender_1]?{backgroundImage:"url("+n.state.houses[e.defender_1]+")"}:{backgroundImage:"url(https://images.hdqwalls.com/download/throne-game-of-thrones-qhd-2880x1800.jpg)"}},l.a.createElement("div",{className:"circle"},l.a.createElement("img",{src:n.state.kings[e.defender_king],alt:e.defender_king}))),l.a.createElement("h3",null,l.a.createElement(b.a,{label:e.defender_king,variant:"outlined",size:"medium"})),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("span",{className:"highlight"},"Commanded by:")," ",e.defender_commander),l.a.createElement("p",null,l.a.createElement("span",{className:"highlight"},"Troops:")," ",e.defender_1)))))))})))},n.state={battles:[],searchData:[],kings:{"Joffrey/Tommen Baratheon":"https://vignette.wikia.nocookie.net/gameofthrones/images/2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest/top-crop/width/720/height/900?cb=20190418203833","Robb Stark":"https://i.pinimg.com/originals/64/40/d8/6440d80459691666a102437881c68b55.jpg","Balon/Euron Greyjoy":"https://i.pinimg.com/564x/2d/1b/d5/2d1bd54e1d20097f8257698783ea3601.jpg","Stannis Baratheon":"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7a/Stannis_S05E09.png/revision/latest/scale-to-width-down/314?cb=20190412205744","Mance Rayder":"https://vignette.wikia.nocookie.net/gameofthrones/images/1/17/GOT_Season_5_10.jpg/revision/latest?cb=20160826005613"},houses:{Lannister:"https://wallpaperaccess.com/full/369010.jpg",Stark:"https://wallpaperaccess.com/full/369020.jpg",Greyjoy:"https://wallpaperaccess.com/full/369016.jpg",Baratheon:"https://wallpaperaccess.com/full/369013.jpg",Frey:"https://wallpapercave.com/wp/PuR7OWh.jpg",Bolton:"https://i.ytimg.com/vi/LoDqZeqt-RU/maxresdefault.jpg",Tyrell:"https://wallpaperaccess.com/full/567080.jpg",Blackwood:"https://pm1.narvii.com/6479/c24d07283c818526b1360b75d2a93e30b0bf8d45_hq.jpg",Mallister:"https://i.pinimg.com/originals/d4/7a/18/d47a18be57a8c531180748588728af8c.jpg","Night's Watch":"http://www.charmsaddict.com/wp-content/uploads/2015/06/game-of-thrones-the-nights-watch-wallpaper.jpg",Tully:"https://wallpaperaccess.com/full/567094.jpg"}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://got-battle-app-backend.herokuapp.com/got-api/battles").then((function(a){console.log("Data recieved!"),e.setState({battles:a.data}),console.log(e.state.battles)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.f6cfa06f.chunk.js.map