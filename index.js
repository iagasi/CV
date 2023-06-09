const projects = document.querySelector(".projests__items");
const projects2023 = document.querySelector(".projests__items2023");

const myProjects = [

  {
    img: "./gem.png",
    url:"https://iagasi.github.io/Portfolio/gem/",
    code: "https://github.com/iagasi/Portfolio/tree/main/Gem-Slider",
    name: " Game Gem Slider",
    description: "",
  },
  {
    img: "./bird.png",
    url:"https://rolling-scopes-school.github.io/iagasi-JSFE2022Q3/sound-bird/",
    // code: "https://github.com/iagasi/doodlejump",
    name: "Sound Bird",
    description: "",
  },
  {
    img: "./store.png",
    code: "https://github.com/iagasi/Portfolio/tree/main/StoreFilterPanel",
    name: " React App <Store> ",
    url:"https://filter-d4a2b.web.app/",
    description: "",},


  {
    img: "./travell.png",
    code: "https://github.com/iagasi/Portfolio/tree/main/Travel-Dom-Api",
    name: " Travel ",
    url:"https://jadoos.web.app/",
    description: " Dom Api",
  },
  {
    img: "./zoo1.png",
    url:"https://iagasi.github.io/Portfolio/zoo/",
    code: "https://github.com/iagasi/Portfolio/tree/main/online-zoo",
    name: "Zoo  ",
    description: "Zoo Main Page",
  },
  {
    img: "./zoo2.png",
    url:"https://iagasi.github.io/Portfolio/zoo/donate.html",
    code: "https://github.com/iagasi/Portfolio/tree/main/online-zoo",
    name: " Zoo  ",
    description: " Zoo Donation",
  },

  
];

proj2023=[
    {
        img: "./doodle.png",
        code: "https://github.com/iagasi/doodlejump",
        url:"https://iagasi.github.io/doodlejump/",
        name: " Game DoodleJump",
        description: "",
      },

      {
        img: "",
        code: "https://github.com/iagasi/Instagram",
        url:"https://github.com/iagasi/Instagram",
        name: "  Instagramm Clone ",
        description: " Under development Websockets Graphql Next  Web Rtc",
      },
]
function prodect(url, name, description, code,img,run) {
  const element = document.createElement("div");
  element.classList.add("project");
  element.innerHTML = `
 
 <img  src=${img} alt="project image">
 <a href=${url}>

   <h3>${name}</h3>
   <p>${description}<p>

</a>
${code?` <a href=${code}>      <p  class=" project__code">  Github Code</p></a>`:""}  
 
 `;
  return element;
}

const html = myProjects.map(({ url, name, description, code,img }) => {
  projects.appendChild(prodect(url, name, description, code,img));
});
proj2023.map(({ url, name, description, code,img }) => {
    projects2023.appendChild(prodect(url, name, description, code,img));
  });
console.log(html);
