const URL_BASE = "https://fakestoreapi.com/products"


const getData = async () => {
    let response = await fetch(URL_BASE)
    let data = await response.json()
    console.log(data)
    return data 
}


export{getData}