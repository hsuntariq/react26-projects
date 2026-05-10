import React from 'react'
import { FaTrash } from 'react-icons/fa'

const SingleItem = ( { id, val, remove } ) => {
    return (
        <div className='p-4 flex justify-between shadow-2xl shadow-gray-600'>
            {val}
            <FaTrash onClick={() => remove( id )} className='text-red-500 cursor-pointer' />
        </div>
    )
}

export default SingleItem