document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('js/api.json')
        const data = await res.json()
        // console.log(data)
        verPro(data)
        clickboton(data)


    }catch (error){
        console.log(error)
    }

}
const contpro = document.querySelector('#cont-pro')
const verPro = (data) => {
    const template = document.querySelector('#temp-pro').content
    const fragment = document.createDocumentFragment()

    data.forEach(producto => {
        // console.log(producto)
        
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('p').textContent = producto.title
        template.querySelector('span.oferta').textContent = producto.precio
        template.querySelector('a').dataset.id = producto.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    });
    contpro.appendChild(fragment)
}
let carrito = {}

const clickboton = (data) =>{
    const boton = document.querySelectorAll('.card-pro a')
    // console.log(boton)
    boton.forEach(btn => {
        btn.addEventListener('click', () => {
           
            const producto = data.find(item => item.id === parseInt(btn.dataset.id) )
            producto.cantidad = 1
            if (carrito.hasOwnProperty(producto.id)){
               producto.cantidad = carrito[producto.id].cantidad + 1
            }
            carrito[producto.id] = {...producto}
            
            carproducto()
        })
    } )
}
const items = document.querySelector('#items')

const carproducto = () => {

    //pendiente innerHTML
    items.innerHTML = ''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()
    console.log(template)
    Object.values(carrito).forEach(producto => {
        let imgpro =  `<img src="${producto.thumbnailUrl}"></img>`
        
        // console.log('producto', producto)
        // template.querySelector('th').textContent = producto.id
    
        // template.querySelector('td img').setAttribute('src', producto.thumbnailUrl)
        template.querySelectorAll('td')[0].innerHTML += imgpro
        template.querySelectorAll('td')[1].textContent = producto.title
        template.querySelectorAll('td')[2].textContent = producto.cantidad
        
        template.querySelectorAll('td ')[3].textContent = producto.precio * producto.cantidad
        
        

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    
// const items = document.querySelector('#items')



// const carproducto = () =>{
//     items.innerHTML = '' 
//     const template = document.querySelectorAll('#template-carrito').content
//     const fragment = document.createDocumentFragment()
//     Object.values(carrito).forEach(producto => {
//          console.log(producto)
//          template.querySelector('th').textContent = producto.id
//          template.querySelector('td.img').setAttribute('src', producto.thumbnailUrl)
//          template.querySelectorAll('td')[1].textContent = producto.title
//          template.querySelectorAll('td')[2].textContent = producto.cantidad
//          template.querySelector('td span').textContent = producto.precio
//          const clone = template.cloneNode(true)
//          fragment.appendChild(clone)

//     } )
//     items.appendChild(fragment)
//     }


}

