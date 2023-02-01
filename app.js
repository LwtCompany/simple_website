const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;
app.use(express.static('./views/pages'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    res.render('pages/index', {id : 12});
});     
let about = "/  about"
  app.get(`${about}`, function(req, res) {
    res.render(`pages${about}`, {id : 12});
  });

  app.get('/action', (req, res) => {
    res.render('pages/action');
  });

  app.get('/news', (req, res) => {
    res.render('pages/news');
  });

  app.get('/doctores', (req, res) => {
    res.render('pages/doctores');
  });
  
  app.get('/contact', (req, res) => {
    res.render('pages/contact');
  });

  app.get('/index', (req, res) => {
    res.render('pages/index')
  })

console.log(`pages${about}`)

app.listen(port, () => {
    console.log("Server running successfully")
})
