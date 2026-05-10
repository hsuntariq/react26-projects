import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { lorems } from './lorems'

const LoremGenerator = () => {

    const [number, setNumber] = useState( '' )
    const [data, setData] = useState( [] )
    const handleClick = ( e ) => {
        e.preventDefault()

        if ( !number ) {
            toast.error( 'Please enter a value' )
        } else {

            if ( number > lorems.length - 1 || number < 0 ) {
                toast.error( `Length should be less than ${lorems.length} or greter than 0` )
                setData( [] )
            } else {
                let slicedNumber = lorems.slice( 0, number )
                setData( slicedNumber )
            }
        }

    }


    return (
        <>
            <form className='w-1/2 p-5 mx-auto shadow-2xl my-10 shadow-gray-600 rounded-md'>
                <h1 className="text-center text-4xl">
                    Lorem Generator
                </h1>
                <label htmlFor="">Number</label>
                <input value={number} onChange={( e ) => setNumber( e.target.value )} placeholder='e.g. 4' type="number" className='w-full border border-gray-300   p-3 rounded-md my-3' />


                <button onClick={handleClick} className="w-full active:scale-95 bg-cyan-500 p-2 rounded-md text-white">
                    Add Data
                </button>
            </form>


            <div className="container text-gray-600 mx-auto my-10">
                {
                    data.map( ( item, index ) => {
                        return <p key={index} className='my-3'>{item}</p>
                    } )
                }
            </div>

        </>
    )
}

export default LoremGenerator