import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const shopContext=createContext();

export const ShopContextProvider=(props)=>{
    
    const currency='$'
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(true);

    const value={

        products,delivery_fee,currency,search,setSearch,showSearch,setShowSearch
    }

    return(
        <shopContext.Provider value={value}>
            {props.children}

        </shopContext.Provider>
    )
}