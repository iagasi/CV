const projects = document.querySelector(".projests__items");
const projects2023 = document.querySelector(".projests__items2023");
  const GAMES = document.querySelector(".games");

document.addEventListener("load",()=>{


})
const myProjects = [
  {
    img: "./gem.png",
    url: "https://iagasi.github.io/Portfolio/gem/",
    code: "https://github.com/iagasi/Portfolio/tree/main/Gem-Slider",
    name: " Game Gem Slider",
    description: "",
  },
  {
    img: "./bird.png",
    url: "https://rolling-scopes-school.github.io/iagasi-JSFE2022Q3/sound-bird/",
    // code: "https://github.com/iagasi/doodlejump",
    name: "Sound Bird",
    description: "",
  },
  {
    img: "./store.png",
    code: "https://github.com/iagasi/Portfolio/tree/main/StoreFilterPanel",
    name: " React App <Store> ",
    url: "https://filter-d4a2b.web.app/",
    description: " Filtering and Search products and add to basket ",
  },

  {
    img: "./travell.png",
    code: "https://github.com/iagasi/Portfolio/tree/main/Travel-Dom-Api",
    name: " Travel ",
    url: "https://jadoos.web.app/",
    description: " Dom Api.<br/> Modals and Sliders",
  },
  {
    img: "./zoo1.png",
    url: "https://iagasi.github.io/Portfolio/zoo/",
    code: "https://github.com/iagasi/Portfolio/tree/main/online-zoo",
    name: "Zoo  ",
    description: "Zoo Main Page <br/> Modals and Sliders",
  },
  {
    img: "./zoo2.png",
    url: "https://iagasi.github.io/Portfolio/zoo/donate.html",
    code: "https://github.com/iagasi/Portfolio/tree/main/online-zoo",
    name: " Zoo  ",
    description: " Zoo Donation  <br/> Simple interaction ",
  },
];

proj2023 = [


  {
    img: "./insta.png",
    code: "https://github.com/iagasi/Instagram",
    url: "http://13.49.222.211/auth",
    name: "  Instagramm Clone -          on AWS EC2/ NGINX ",
    description: `  JWT-Tokens Websockets Graphql Next JS  Web Rtc Tailwind Mongo Db React form hook TS
    <h3> Create-Delete Posts (Realtime Cooment-like Posts) Add users to friends Search users</h3>
    
    `,
  },

  {
    img: "./mes.png",
    code: "https://github.com/iagasi/Instagram",
    url: "http://13.49.222.211/auth",
    name: "  Messenger - <small>the part of Instagramm app</small>",
    description: ` Websockets Graphql Subscriptions Next JS  Web Rtc Tailwind Mongo Db  
    <h3>Features: VideoCalls(webRtc)  and Realtime Messages ,</h3>
    
    `,
  },

];

const game=[
  
  {
    img: "./doodle.png",
    code: "https://github.com/iagasi/doodlejump",
    url: "https://iagasi.github.io/doodlejump/",
    name: " Simple Game DoodleJump",
    description: "Jump and Shoot enemies",
  },
]
function project(url, name, description, code, img, run) {
  const element = document.createElement("div");
  element.classList.add("project");
  element.innerHTML = `
 
 <img  src=${img} alt="project image">
 <a href=${url} target="_blank">

   <h3>${name}</h3>
   <p>${description}<p>

</a>
${
  code
    ? ` <a href=${code} target="_blank">      <p  class=" project__code">  Github Code</p></a>`
    : ""
}  
 
 `;
  return element;
}
function Project(url, name, description, code, img, run) {
  const element = document.createElement("div");
  element.classList.add("project");
  element.classList.add("new-project");

  element.innerHTML = `
  
 <img  src=${img} alt="project image">
 <a href=${url}  target="_blank">

   <h3>${name}</h3>
   <p>${description}<p>

</a>
${
  code
    ? ` <a href=${code} target="_blank">      <p  class=" project__code">  Github Code</p></a>`
    : ""
}  
 
 `;
  return element;
}
const html = myProjects.map(({ url, name, description, code, img }) => {
  projects.appendChild(project(url, name, description, code, img));
});


proj2023.map(({ url, name, description, code, img },i) => {
 

  projects2023.appendChild(Project(url, name, description, code, img));

  
});
game.map(({ url, name, description, code, img },i) => {
 

  GAMES.appendChild(Project(url, name, description, code, img));

  
});


console.log(html);
