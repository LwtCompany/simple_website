const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;
app.use(express.static('./views/pages'))
app.set('view engine', 'ejs');

let MENUS = ["HOME", "ABOUT", "ACTION", "COVIDO","NEWS", "DOCTORES", "CONTACT" ];
let TITLES = ["Kitob bilim kaliti", "Oq qora baribir it", "Randomniy salom"];
const CARDS = [
  {
    img: "images/pro2.png",
    title: "Wash Your Hands",
    text: " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  },
  {
    img: "images/pro3.png",
    title: "Stay at Home",
    text: " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  },
  {
    img: "images/pro1.png",
    title: "Wear Mask",
    text: " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  },
  {
    img: "images/doctor1.png",
    title: "Go to doctors",
    text: " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  }
];

const CASES = [
  // {
  //   case: "CASES 01",
  //   text:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
  //   img: "images/banner.png"
  // },
  {
    case: "CASES 02",
    text:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/cases3.png"
  },
  {
    case: "CASES 03",
    text:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/cases2.png"
  },
  {
  case: "CASES 04",
  text:" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
  img: "images/cases1.png"
  }
]

const DOCTORS = [
  {
    name: "DR.GOLAP DEN",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/doctor1.png",
  },
  {
    name: "DR.SARITA",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/doctor2.png",
  },
  // {
  //   name: "DR.SHOHRUBEK",
  //   text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
  //   img: "images/doctor1.png",
  // },
  // {
  //   name: "DR.GOPAL SINX",
  //   text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
  //   img: "images/doctor2.png",
  // }
]

const CASES_ACTION = [
  {
    case: "CASES 01",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/cases1.png"
  },
  {
    case: "CASES 02",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
    img: "images/cases2.png",
  },
  // {
  //   case: "CASES 03",
  //   text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look",
  //   img: "images/cases3.png"
  // }
]

CONTACT_US = [
  
];



app.get('/', function(req, res) {
    res.render('pages/index', {MENUS, active: 0, TITLES, CARDS, CASES, DOCTORS,});
});     

  app.get("/about", function(req, res) {
    res.render("pages/about", {MENUS,active: 1});
});

  app.get('/action', (req, res) => {
    res.render('pages/action', {MENUS,active: 2, CASES_ACTION,});
  });

  app.get('/news', (req, res) => {
    res.render('pages/news', {MENUS,active: 4});
  });

  app.get('/doctores', (req, res) => {
    res.render('pages/doctores', {MENUS,active: 5});
  });
  
  app.get('/contact', (req, res) => {
    res.render('pages/contact', {MENUS,active: 6});
  });



app.listen(port, () => {
    console.log("Server running successfully")
})
