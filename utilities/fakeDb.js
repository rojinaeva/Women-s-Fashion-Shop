const addToDb=(id)=>{
    let shoppingCart=getShoppingCart();
    const quantity=shoppingCart[id];
    if(quantity){
         const newQuantity=quantity+1;
         shoppingCart[id]=newQuantity;
    }
    else{
         shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}
const getShoppingCart=()=>{
    let shoppingCart={};
    const storedData=localStorage.getItem('shopping-cart');
    if(storedData){
      shoppingCart=JSON.parse(storedData);
    }
    return shoppingCart;
}

const removeFromDb=(id)=>{
    
        const shoppingCart=getShoppingCart();
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }


const deleteShoppingCart=()=>{
    localStorage.removeItem('shopping-cart');
}
export {
    addToDb,
    getShoppingCart,
    removeFromDb,
    deleteShoppingCart
}