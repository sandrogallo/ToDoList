
const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

// Configura la directory per i file statici
app.use(express.static('public'));

var ToDo = require('./todo');
var list = [];
list.push( new ToDo("Spesa", "pane, acqua", 3, false, Date.now()) );
list.push( new ToDo("Spesa2", "pane2, acqua2", 3, false, Date.now()) );

var homepage = fs.readFileSync("homepage.html", { encoding: 'utf8', flag: 'r' });
console.log(homepage);
console.log( JSON.stringify(list));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  // res.write( JSON.stringify(list));
  let h = homepage.replace( "json-data-string-placeholder", JSON.stringify(list) );
  res.write( h );
  res.end();
  console.log(h);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
