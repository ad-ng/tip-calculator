var myInput = document.getElementById('myinput');
var custom = document.getElementById('custom');
var output = document.getElementById('output');
var per = document.getElementById('per');
var five = document.getElementById('five');
var ten = document.getElementById('ten');
var fifteen = document.getElementById('fifteen');
var twentyfive = document.getElementById('twentyfive');
var fifty = document.getElementById('fifty');
var people = document.getElementById('people');
var clea = document.getElementById('reseter');
var product;
var total;


five.onclick = function(){
    product = myInput.value * 5 /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}
ten.onclick = function(){
    product = myInput.value * 10 /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}
fifteen.onclick = function(){
    product = myInput.value * 15 /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}

twentyfive.onclick = function(){
    product = myInput.value * 25 /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}
fifty.onclick = function(){
    product = myInput.value * 50 /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}
custom.onkeyup = function(){
    product = myInput.value * custom.value /100;
    document.getElementById("output").innerHTML = product;
    total = people.value * product;
    document.getElementById("per").innerHTML = total;
}
clea.onclick = function(){
    myInput.value = 0;
    people.value = 0;
    product = 0;
    total = 0;
    document.getElementById("output").innerHTML = product;
    document.getElementById("per").innerHTML = total;
}