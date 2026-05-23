import React, { useState } from 'react'

const WhyReducer = () => {

    const [name, setName] = useState( '' )
    const [error, setError] = useState( false )
    const [success, setSuccess] = useState( false )
    const [message, setMessage] = useState( '' )
    const [data, setData] = useState( [] )




    const handleClick = ( e ) => {
        e.preventDefault()
        if ( !name ) {
            setError( true )
            setSuccess( false )
            setMessage( 'Please enter a value' )
        } else {
            setError( false )
            setSuccess( true )
            setMessage( 'Value Added' )
            setData( [...data, name] )
        }




    }


    return (
        <>
            <form className='w-1/2 mx-auto p-5 shadow-2xl shadpw-rose-400 p-4'>
                <label htmlFor="">Name</label>
                <input value={name} onChange={( e ) => setName( e.target.value )} type="text" placeholder='Name...' className='w-full my-2 border border-gray-300 p-2 outline-0 focus:border-gray-500 rounded-lg' />
                {
                    error && <p className='text-sm font-semibold mb-2 w-max rounded-md p-1 text-red-500 bg-red-200'>
                        {message}
                    </p>
                }
                {
                    success && <p className='text-sm font-semibold mb-2 w-max rounded-md p-1 text-green-500 bg-green-200'>
                        {message}
                    </p>
                }
                <button onClick={handleClick} className="w-full active:scale-98 transition-all bg-rose-400 rounded-md p-2 text-white">
                    Add Data
                </button>
            </form>
        </>
    )
}

export default WhyReducer