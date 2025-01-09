
function bluetooth(){
const base = document.querySelector(".B.switch");
const control = document.querySelector(".B.toggle");
const name = document.querySelector(".B.name");
const icon = document.querySelector(".bluetooth");

    control.classList.toggle("control");
    base.classList.toggle("base");
    name.classList.toggle("nameEdit");
    icon.classList.toggle("do");
}

function hotspot(){
const base = document.querySelector(".H.switch");
const control = document.querySelector(".H.toggle");
const name = document.querySelector(".H.name");
const icon = document.querySelector(".hotspot");

    control.classList.toggle("control");
    base.classList.toggle("base");
    name.classList.toggle("nameEdit");
    icon.classList.toggle("do");
}

function wifi(){
 const base = document.querySelector(".W.switch");
const control = document.querySelector(".W.toggle");
const name = document.querySelector(".W.name");
const icon = document.querySelector(".wifi");

    control.classList.toggle("control");
    base.classList.toggle("base");
    name.classList.toggle("nameEdit");
    icon.classList.toggle("do");
}

function data(){
const base = document.querySelector(".D.switch");
const control = document.querySelector(".D.toggle");
const name = document.querySelector(".D.name");
const icon = document.querySelector(".data");

    control.classList.toggle("control");
    base.classList.toggle("base");
    name.classList.toggle("nameEdit");
    icon.classList.toggle("do");
}
// function mode(){
//     const base = document.querySelector(".mode.switch");
//     const control = document.querySelector(".M.toggle");
//     const phone = document.querySelector(".page")
    
//         control.classList.toggle("control");
//         base.classList.toggle("base");
//         phone.classList.toggle("dark");
//         base.classList.toggle("dark");
//         control.classList.toggle("dark");
    
// }