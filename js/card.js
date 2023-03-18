const createCard = (id, title,description,image,price, buttonHandler) => {
    let divCard = document.createElement("div")
    divCard.classList.add(..."card col-12 col-md-3 col-lg-2 p-0".split(" "))
    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top", "mt-3", "px-3")
    imgCard.src = image

    // card body
    let divCardBody = document.createElement("div")
    divCardBody.classList.add(..."card-body d-flex flex-column justify-content-between p-3".split(" "))
    let cardName = document.createElement("h5")
    cardName.classList.add("card-title", "text-center", "fw-bold")
    let divSubBody = document.createElement("div")
    divSubBody.classList.add(..."d-flex justify-content-evenly align-items-center flex-column".split(" "))
    let pDescription = document.createElement("p")
    pDescription.classList.add("card-text", "text-center")
    let pPrice = document.createElement("p")
    pPrice.classList.add("card-text", "fw-bold")
   
    let btn = document.createElement("a")
    btn.classList.add(..."btn btn-info border border-primary rounded-5 text-black rounded-bottom-3 rounded-top-0".split(" "))

    // Create content
    cardName.innerText = title.slice(0, 15);
    pDescription.innerText = description.slice(0, 100);
    pPrice.innerText = `Price: $${price}`

    btn.innerText = `Add to cart`
    btn.addEventListener("click", (e)=> {
        console.log('added')
        buttonHandler({
            title: title.slice(0, 30),
            price: price,
            image: image
        })    
    })

    // Insert content
    divSubBody.append(pDescription, pPrice)
    divCardBody.append(cardName,divSubBody)
    divCard.append(imgCard, divCardBody, btn)
    return divCard
}

const productCard = (title, price, imgUrl) => {

    let liCard = document.createElement("li")
    liCard.classList.add(..."d-flex justify-content-between align-items-center col-12 rounded-3 px-3 py-1 m-1".split(" "))
    let pTitle = document.createElement("p")
    pTitle.classList.add("card-text")
    let pPrice = document.createElement("p")
    pPrice.classList.add("card-text", "fw-bold")
    let img = document.createElement("img")
    img.classList.add("card-img-top");
    img.src = imgUrl;

    pTitle.innerText = title
    pPrice.innerText = `Price: $${price}`;

    liCard.append(pTitle, pPrice, img)
    
    return liCard
}

export {createCard,productCard}
