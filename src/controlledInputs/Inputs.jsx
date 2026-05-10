import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import SingleItem from './SingleItem'
import { FaTrash } from 'react-icons/fa'

const Inputs = () => {

    const [val, setVal] = useState( '' )
    const [error, setError] = useState( false )
    const [data, setData] = useState( [] )




    const removeItem = ( clickId ) => {
        let newItems = data.filter( ( item, index ) => {
            return item.id !== clickId
        } )


        setData( newItems )



    }



    const handleData = ( a ) => {

        a.preventDefault()
        if ( !val ) {
            setError( true )
            toast.error( 'Please enter a value' )
        } else {
            setData( [...data, {
                val,
                id: Date.now()
            }] )
            setError( false )
            toast.success( 'Value added successfully!' )
        }
        setVal( '' )
        setTimeout( () => {
            setError( false )
        }, 3000 )
    }
    return (
        <>

            <form className='w-1/2 p-5 mx-auto shadow-2xl my-10 shadow-gray-600 rounded-md'>
                <label htmlFor="">Name</label>
                <input value={val} onChange={( b ) => setVal( b.target.value )} placeholder='Enter Name...' type="text" className='w-full border border-gray-300   p-3 rounded-md my-3' />

                {
                    error && <p className='text-red-500 mb-2 w-max px-2 rounded-md text-sm font-semibold bg-red-200'>
                        Please enter a value
                    </p>
                }


                <button onClick={handleData} className="w-full active:scale-95 bg-cyan-500 p-2 rounded-md text-white">
                    Add Data
                </button>
            </form>


            <div className="container grid grid-cols-4 gap-4 mx-auto">
                {
                    data.map( ( item, index ) => {
                        return <div className='p-4 flex justify-between shadow-2xl shadow-gray-600'>
                            {item.val}
                            <FaTrash onClick={() => removeItem( item.id )} className='text-red-500 cursor-pointer' />
                        </div>
                    } )
                }
            </div>



        </>
    )
}

export default Inputs