const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

app.use(express.static('./views/pages'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    res.render('pages/index', {id : 12});
});

  app.get('/about', function(req, res) {
    res.render('pages/about', {id : 12});
  });

app.listen(port, () => {
    console.log("Server running successfully")
})