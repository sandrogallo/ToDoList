
const express = require('express');
const app = express();
const port = 3000;

var ToDo = require('./todo');
var list = [];
list.push( new ToDo("Spesa", "pane, acqua", 3, false, Date.now()) );

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write( JSON.stringify(list));
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
