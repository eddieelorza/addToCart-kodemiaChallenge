const createCard = (id, title,description,image,price, buttonHandler) => {
    let divCard = document.createElement("div")
    divCard.classList.add(..."card col-12 col-md-4 col-lg-3 m-2".split(" "))
    let divBg = document.createElement("div")
    divBg.classList.add("bg-cover")
    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top")
    imgCard.src = image
    // card body
    let divCardBody = document.createElement("div")
    divCardBody.classList.add(..."card-body d-flex flex-column justify-content-between".split(" "))
    let cardName = document.createElement("h5")
    cardName.classList.add("card-title", "text-center")
    let divSubBody = document.createElement("div")
    divSubBody.classList.add(..."d-flex justify-content-evenly align-items-center".split(" "))
    let pDescription = document.createElement("p")
    pDescription.classList.add("card-text")
    let pDate = document.createElement("p")
    pDate.classList.add("card-text")
   
    
    let btn = document.createElement("a")
    btn.classList.add(..."btn btn-white border border-primary rounded-5 text-primary".split(" "))


    
    // btn.setAttribute("href", link)
    // Create content
    cardName.innerText = `${title}` 
    pDescription.innerText = description
    pDate.innerText = price

    btn.innerText = `Add to cart`
    btn.addEventListener("click", (e)=> {
        console.log('added')
        buttonHandler({

            title: title,
            price: price
        })
        
    })

   
    // Insert content
    divSubBody.append(pDescription, pDate)
    divCardBody.append(cardName,divSubBody,btn)
    divCard.append(divBg,imgCard, divCardBody)
    return divCard
}



const productCard = (price, title) => {

    let liCard = document.createElement("li")
    liCard.classList.add(..."d-flex flex-column flex-lg-row justify-content-lg-between align-items-center border border-secondary rounded-4 p-3 m-2".split(" "))
    let pPrice = document.createElement("p")
    pPrice.classList.add("card-text")
    let pTitle = document.createElement("p")
    pTitle.classList.add("card-text")
    pPrice.innerText = title
    pTitle.innerText = price

    liCard.append(pTitle,pPrice)
    
    return liCard
}

export {createCard,productCard}
