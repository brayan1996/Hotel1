const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft= "-200%";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft= "-100%";
    },500);
}
btnRight.addEventListener('click',Next)

function Before(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft= "0";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft= "-100%";
    },500);
}
btnLeft.addEventListener('click',function(){
    Before();
})




const slider2 = document.querySelector("#sauna__slider");
let sliderSection2 = document.querySelectorAll(".sauna__imag");
let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];
const btnLeft2 = document.querySelector("#btn-left__sauna");
const btnRight2 = document.querySelector("#btn-right__sauna");
slider2.insertAdjacentElement('afterbegin',sliderSectionLast2);

function NextDos(){
    let sliderSectionFirst2 = document.querySelectorAll(".sauna__imag")[0];
    slider2.style.marginLeft= "-200%";
    slider2.style.transition= "all 0.5s";
    setTimeout(function(){
        slider2.style.transition= "none";
        slider2.insertAdjacentElement('beforeend',sliderSectionFirst2);
        slider2.style.marginLeft= "-100%";
    },500);
}
btnRight2.addEventListener('click',function(){
    NextDos();
})

function BeforeDos(){
    let sliderSection2 = document.querySelectorAll(".sauna__imag");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];
    slider2.style.marginLeft= "0";
    slider2.style.transition= "all 0.5s";
    setTimeout(function(){
        slider2.style.transition= "none";
        slider2.insertAdjacentElement('afterbegin',sliderSectionLast2);
        slider2.style.marginLeft= "-100%";
    },500);
}
btnLeft2.addEventListener('click',function(){
    BeforeDos();
})

const seccion = document.querySelectorAll(".observado")
const animado = (id) =>{
    const caja = document.getElementById(`${id}`)
    
    if(id=="caja2")caja.classList.replace("desanimado","animado--derecha")
    else if(id =="caja3") caja.classList.replace("desanimado","animado--abajo")
    else caja.classList.replace("desanimado",`animado`)
}
const desanimado = (id) =>{
    const caja = document.getElementById(`${id}`)
    if(id=="caja2")caja.classList.replace("animado--derecha","desanimado")
    else if(id =="caja3") caja.classList.replace("animado--abajo","desanimado")
    else caja.classList.replace("animado","desanimado")
}
const cb = (secciones) =>{
   secciones.forEach(element =>{
       if(element.isIntersecting){
            animado(element.target.id)
       } else desanimado(element.target.id)
   })
}
let options ={
    threshold: 0.25
}
const observer =  new IntersectionObserver(cb,options)
seccion.forEach(element => observer.observe(element))