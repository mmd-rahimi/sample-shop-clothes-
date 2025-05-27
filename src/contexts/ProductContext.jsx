import { createContext, useEffect, useState } from "react";


//create context
export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    //product states
    const [products, setProducts] = useState([]);
    //fetch product
    useEffect(() => {
        const fetchProducts = async () => {
            const respons = await fetch('https://fakestoreapi.com/products')
            const data = await respons.json()
            setProducts(data);
            console.log(data);
            
        };
        fetchProducts();
    }, [])
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;