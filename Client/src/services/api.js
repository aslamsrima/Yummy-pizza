// get producst list 
export function getProducts(){
   return  fetch('http://localhost:3001/api/getproducts')
    .then(response => response.json())
    .then(data =>{ return data});
}


// create a new order
export function createOrder(requestOptions){
    return  fetch('http://localhost:3001/api/place_order',requestOptions)
    .then(response => response.json())
    .then(data =>{ return data});
}


