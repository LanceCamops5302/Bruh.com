
let h = document.getElementById("hour")
let m = document.getElementById("mintue")
let s = document.getElementById("second")

let hours = getHours();
let minutes = getMinutes();
let seconds = getSeconds();

function time(){
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
}

time();