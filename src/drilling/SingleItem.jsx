import React, { useContext } from 'react'
import { MyContext } from './Drlling'

const SingleItem = ( { image, name, id } ) => {


    const { deleteData } = useContext( MyContext )




    return (
        <>
            <h2>{id}</h2>
            <img src={image} className='w-20 h-20 ' alt="" />
            <h2>{name}</h2>
            <button onClick={() => deleteData( id )} className="bg-red-400 mb-3 px-4 py-2 rounded md text-white">
                Delete
            </button>
        </>
    )
}

export default SingleItem