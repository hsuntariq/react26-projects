import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useGlobal } from '../../../context/AppContext'

const SingleBday = ( { id, name, age, image } ) => {
    const { removeSingleBday } = useGlobal()
    return (
        <>

            <div className="flex my-3 shadow-2xl p-4 rounded-md justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src={image} className='w-15 h-15 rounded-full object-cover' alt="" />
                    <div className="">
                        <h2 className='font-semibold text-xl'>
                            {name}
                        </h2>
                        <p className="text-gray-500 font-semibold">{age} years old</p>
                    </div>
                </div>

                {/* delte btn */}

                <button onClick={() => removeSingleBday( id )} className="bg-red-500 rounded-full cursor-pointer hover:bg-red-600 active:scale-95 transition-all p-4 text-white">
                    <FaTrash />
                </button>

            </div>

        </>
    )
}

export default SingleBday