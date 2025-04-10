
const express = require('express');
const app = express();
const port = 3000;

var ToDo = require('./todo');
var ToDoList = require('./todolist');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write( "Ciao" );
  res.end();
  console.log("Ciao");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
