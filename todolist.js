
var ToDo = require('./todo');
const fs = require("fs");


class ToDoList {

    constructor() {
        let a1 = new ToDo("Rusco", "getta la spazzatura", 3, false, Date.now()) 
        this.list = [];
        this.list.push( a1 );
    }

    toString() {
        let s = "";
        for (a in this.list) {
            s += a.toString();
            s += "\n";
        }
        return s;
    }
}

module.exports = ToDoList;