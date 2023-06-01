let button1 = 1;
let button2 = 2;


var showHTML = document.getElementById("screen");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var addbtn = document.getElementById("add-btn");
var minusbtn = document.getElementById("minus-btn");


function num1() {
    console.log(button1);
}
function num2() {
    console.log(button2);
}
var n = 0;
    switch (n) {
        case addbtn:
            var total = button1 + button2;
            console.log(total)
                break;
        case minusbtn:
            var total = button1 - button2;
            console.log(total)
                break;
        default:
            break;
    }
