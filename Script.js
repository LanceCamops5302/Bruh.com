
let h = document.getElementById("hour")
let m = document.getElementById("min")
let s = document.getElementById("sec")


let date = new Date();
let hours = date.getHours();
let minut = date.getMinutes();
let secon = date.getSeconds();


function time(){
   /*if(hours == 1||2||3||4||5||6||7||8||9||0){
        hours = `0${hours}`
    }; 

    if (minut == 1||2||3||4||5||6||7||8||9||0){
        minut = `0${minut}`
    };

    if(secon == 1||2||3||4||5||6||7||8||9||0){
        secon = `0${secon}`
    }; 
*/
    h.innerHTML = `${hours}:`;
    m.innerHTML = `${minut}:`;
    s.innerHTML = secon;
};


setInterval(time(), 1000);