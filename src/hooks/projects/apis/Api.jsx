import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser'

const Api = () => {

    const url = 'https://api.github.com/users'

    const [users, setUsers] = useState( [] )



    const getData = async () => {
        let res = await fetch( url )
        let data = await res.json()
        setUsers( data )
    }


    useEffect( () => {
        getData()
    }, [] )





    return (
        <>
            <div className="container gap-3 mx-auto p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {
                    users?.map( ( item, index ) => {
                        return <SingleUser {...item} key={index} />
                    } )
                }
            </div>
        </>
    )
}

export default Api