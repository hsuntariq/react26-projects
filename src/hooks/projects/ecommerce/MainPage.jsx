import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

const MainPage = () => {

    const api = 'https://dummyjson.com/products?limit=50'
    const [products, setProducts] = useState( [] )


    const getProducts = async () => {
        let response = await fetch( api )
        let data = await response.json()
        setProducts( data.products )
        console.log( data.products )
    }

    useEffect( () => {
        getProducts()
    }, [] )






    return (
        <>
            <div className="container select-none mx-auto gap-4 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    products?.map( ( item, index ) => {
                        return <SingleProduct {...item} key={index} />
                    } )
                }
            </div>
        </>
    )
}

export default MainPage