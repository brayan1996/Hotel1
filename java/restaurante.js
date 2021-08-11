const slider = document.querySelector('.slider')
const elementSlider = document.querySelectorAll('.element-slider')
const sliderLast = elementSlider[elementSlider.length-1]
slider.prepend(sliderLast)
const right = document.getElementById('btn__right')
const left = document.getElementById('btn__left')

const  Next = ()=>{
    elementSlider.forEach(element => element.classList.add('right'))
    setTimeout(function(){
        const firstSlider = document.querySelectorAll('.element-slider')[0]
        slider.append(firstSlider)
        elementSlider.forEach(element => element.classList.remove('right'))
    },500) 
}
right.addEventListener('click',Next)
const Before = ()=>{
    elementSlider.forEach(element => element.classList.add('left'))
    setTimeout(function(){
        const sliderLast = document.querySelectorAll('.element-slider')[elementSlider.length-1]
        slider.prepend(sliderLast)
        elementSlider.forEach(element => element.classList.remove('left'))
    },500)
}
left.addEventListener('click',Before)

// class Slider{
//     constructor(a,b){
//         this.contenedorSlider = document.querySelector(a)
//         this.elementoSlider = document.querySelectorAll(b)
//         const lastElement = this.elementoSlider[this.elementoSlider.length-1]
//         this.contenedorSlider.prepend(lastElement)
//         console.log(this.contenedorSlider)
//     }
//     next(){
//         this.elementoSlider.forEach(element => element.classList.add('right'))
//         setTimeout(function(){
//                 const firstSlider = document.querySelectorAll(this.next)[0]
//                 console.log(firstSlider)
//                 this.contenedorSlider.append(firstSlider)
//                 this.elementoSlider.forEach(element => element.classList.remove('right'))
//             },500) 
//     }
//     before(){
//         this.elementoSlider.forEach(element => element.classList.add('left'))
//         setTimeout(function(){
//                 const ultimoElemento = document.querySelectorAll(this.next)[5]
//                 this.contenedorSlider.prepend(ultimoElemento)
//                 this.elementoSlider.forEach(element => element.classList.remove('right'))
//             },500) 
//     }
//         get elementos(){
//             return this.elementoSlider
//         }
//         get contenedor(){
//             return  this.contenedorSlider
//         }
// }
// var probar = new Slider(".slider",".element-slider")
// const right = document.getElementById('btn__right')
// const left = document.getElementById('btn__left')
// const contenedor = probar.contenedor
// const elements = probar.elementos
// const Next = ()=>{
//     elements.forEach(element => element.classList.add('right'))
//         setTimeout(function(){
//                 const firstSlider =document.querySelectorAll('.element-slider')[0]
//                 contenedor.append(firstSlider)
//                elements.forEach(element => element.classList.remove('right'))
//             },500) 
// }
// right.addEventListener('click',function(){
//     probar.next
// })
// const text = document.querySelector('.invisible').textContent
// const parrafo = document.createElement('P')
// parrafo.textContent=text
// parrafo.classList='parrafo'
// const container = document.querySelector('.container-slider')
// container.before(parrafo)
