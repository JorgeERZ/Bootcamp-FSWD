// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("history").value += "............";

}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("history").value += value ;
}
 

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById("history").value +="=";
    document.getElementById("history").value +=q;

}

function comma(value) {
    var z = document.getElementById("history").value;
    var z = value + "<br>"
}

function erase() {
    document.getElementById("history").value = "";
}