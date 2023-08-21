import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakeDb';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart=getShoppingCart();
        let savedCart=[];
        // step 1:get id 
        for(const id in storedCart){
            // step 2:get the product by using id 
            const addedProduct=products.find(product=>product.productId===id);
            // step 3:get quantity of the product 
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                // step 4:add the addedProduct to the savedCart 
                savedCart.push(addedProduct);
            }
        }
        // step 5:set the cart 
        setCart(savedCart);
    },[products])

    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.productId);
       
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product=><Product
                key={product.productId}
                product={product}
                handleAddToCart={handleAddToCart}></Product>)
               }
              
            </div>
            <div>
              <Cart cart={cart}></Cart>
              
            </div>
        </div>
    );
};

export default Shop;