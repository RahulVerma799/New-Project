import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const shopContext=createContext();

export const ShopContextProvider=(props)=>{
    
    const currency='$'
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(true);
    const [cartItems,setCartItems]=useState({});

    const addtoCart=async(itemId,size)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else
            {
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const value={

        products,delivery_fee,currency,search,setSearch,showSearch,setShowSearch
        ,cartItems,setCartItems,addtoCart
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}

        </shopContext.Provider>
    )
}