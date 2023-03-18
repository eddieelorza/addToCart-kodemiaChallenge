import {getData} from "./api/api.js"
import {createCard, productCard} from "./card.js";

const productsWrapper = document.getElementById('wrapper-products')
const cardProducts = document.getElementById('card-list')

const totalCart = document.getElementById('total-price')
let productArray = []

const addToCart = (data) => {
    cardProducts.innerHTML= ""
    productArray.push(data)
    console.log( productArray)
    let result = productArray.reduce( (accum, current) => accum + current.price, 0)
    totalCart.textContent = `Total: ${result.toFixed(2)}`
    productArray.forEach(product => {
        let {title, price} = product
        cardProducts.append(productCard(title, price))
    })
 
}

const renderProducts = async(section) =>{
    let productList = await getData()
    for(let key in productList){
     let {id, title, description, image, price}  = productList[key]
     section.appendChild(createCard(id, title,description,image,price, addToCart))
    }
}

renderProducts(productsWrapper)
