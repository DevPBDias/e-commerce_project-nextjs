'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { productsData, usersData } from "../data/prodcuts";

interface IProductContextType {
    products: any,
    users: any,
}

interface ProductsProviderProps {
    children: ReactNode,
}

const ProductContext = createContext({} as IProductContextType);

export default function ProductsProvider({ children }: ProductsProviderProps) {
    const [products, setProducts] = useState<any>([]);
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const saveData = async () => {
            const { data } = await usersData()
            const products = await productsData()
            setUsers(data)
            setProducts(products.data)
        }
        saveData()
    }, [])


    const contextValue = {
        products,
        users,
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext)
}