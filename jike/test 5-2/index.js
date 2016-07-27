function add1() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = (parseFloat(x) + parseFloat(y));
    document.getElementById("result").innerHTML = z;
    document.getElementById("result").value = z;
}


function subtract1() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = (parseFloat(x) - parseFloat(y));
    document.getElementById("result").innerHTML = z;
    document.getElementById("result").value = z;
}

function multiply1() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = (parseFloat((x * y).toFixed(8)));
    document.getElementById("result").innerHTML = z;
    document.getElementById("result").value = z;
}

function divide1() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z = (parseFloat(x) / parseFloat(y));
    document.getElementById("result").innerHTML = z;
    document.getElementById("result").value = z;
    if (y == 0) {
        alert('除数不能为0');
    }
}