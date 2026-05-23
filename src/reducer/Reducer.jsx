import React, { useEffect, useReducer, useState } from 'react'
import { FaTractor } from 'react-icons/fa'
import { reducer } from './myReducer'

const Reducer = () => {
    const [name, setName] = useState( '' )






    const initialState = {
        error: false,
        success: false,
        message: '',
        data: []
    }



    const [state, dispatch] = useReducer( reducer, initialState )

    const { error, success, message, data } = state



    const handleClick = ( e ) => {
        e.preventDefault()
        if ( !name ) {
            dispatch( { type: 'EMPTY' } )
        } else {
            dispatch( { type: 'ADD_DATA', payload: { name, id: Date.now() } } )
        }

        setName( '' )



    }


    useEffect( () => {
        let timer = setTimeout( () => {
            dispatch( { type: 'RESET' } )
        }, 2000 );


        return () => {
            clearTimeout( timer )
        }



    }, [state] )


    return (
        <>
            <form className='w-1/2 mx-auto p-5 shadow-2xl shadpw-rose-400 p-4'>
                <label htmlFor="">Name</label>
                <input value={name} onChange={( e ) => setName( e.target.value )} type="text" placeholder='Name...' className='w-full my-2 border border-gray-300 p-2 outline-0 focus:border-gray-500 rounded-lg' />
                {
                    error && <p className='text-red-500 text-sm mb-2 bg-red-200 w-max rounded p-2 font-semibold'>
                        {message}
                    </p>
                }
                {
                    success && <p className='text-green-500 text-sm mb-2 bg-green-200 w-max rounded p-2 font-semibold'>
                        {message}
                    </p>
                }
                <button onClick={handleClick} className="w-full active:scale-98 transition-all bg-rose-400 rounded-md p-2 text-white">
                    Add Data
                </button>
            </form>



            <div className="container mx-auto grid gap-4 grid-cols-4">
                {
                    data.map( ( item, index ) => {
                        return <div key={index} className='p-4 flex justify-between items-center shadow-2xl shadow-green-500 my-2'>
                            {item.name}
                            <FaTractor onClick={() => dispatch( { type: "DELETE_DATA", payload: item.id } )} className='text-red-500 cursor-pointer' />
                        </div>
                    } )
                }
            </div>


        </>
    )
}

export default Reducer