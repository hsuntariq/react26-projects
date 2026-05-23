import React, { useState } from 'react'
import SingleBday from './SingleBday'
import { bdays } from './bdays'
import { FaTrash } from 'react-icons/fa'
import { IoRefresh } from 'react-icons/io5'
import { useGlobal } from '../../../context/AppContext'

const Birthday = () => {

    const { data, setData } = useGlobal()







    return (
        <>

            <div className="w-1/2 mx-auto p-5 shadow-2xl my-5 shadow-gray-400 rounded-md">
                <h1 className="text-center text-5xl">{data.length} Birthdays today</h1>
                {
                    data.map( ( item, index ) => {
                        return <SingleBday key={index} {...item} />
                    } )
                }

                <button onClick={() => data.length > 0 ? setData( [] ) : setData( bdays )} className={` rounded-md w-full flex justify-center  cursor-pointer ${data.length == 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'} active:scale-95 transition-all p-4 text-white`}>


                    {
                        data.length == 0 ? <IoRefresh /> : <FaTrash />
                    }

                </button>


            </div>

        </>
    )
}

export default Birthday