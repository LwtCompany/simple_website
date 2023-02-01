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
]

app.get('/', function(req, res) {
    res.render('pages/index', {MENUS, active: 0, TITLES, CARDS});
});     

  app.get("/about", function(req, res) {
    res.render("pages/about", {MENUS,active: 1});
});

  app.get('/action', (req, res) => {
    res.render('pages/action', {MENUS,active: 2});
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
