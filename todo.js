
class ToDo {

    constructor ( title, des, priority, done, date ) {
        this.title = title;
        this.des = des;
        this.priority = priority;
        this.done = done;
        this.date = date;
    }

    toString() {
        return title + "\n" + des + "\n" + priority + " - " + done + " - " + this.date;
    }

}

module.exports = ToDo;
