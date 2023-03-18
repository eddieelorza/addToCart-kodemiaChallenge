import {getData} from "./api/api.js"
import {createCard, productCard} from "./card.js";

const productsWrapper = document.getElementById('wrapper-products')
const cardProducts = document.getElementById('card-list')
const cartCounter = document.querySelector('#cart-counter');

const totalCart = document.getElementById('total-price')
let productArray = []

const addToCart = (data) => {
    cardProducts.innerHTML= ""
    productArray.push(data)
    let result = productArray.reduce( (accum, current) => accum + current.price, 0)
    cartCounter.textContent = ` ${productArray.length}`;
    totalCart.textContent = `Total: $${result.toFixed(2)}`
    productArray.forEach(product => {
        console.log(product);
        let {title, price, image} = product
        cardProducts.append(productCard(title, price, image))
    });
 
}

const renderProducts = async(section) =>{
    let productList = await getData()
    for(let key in productList){
     let {id, title, description, image, price}  = productList[key]
     section.appendChild(createCard(id, title,description,image,price, addToCart))
    }
}

renderProducts(productsWrapper)
