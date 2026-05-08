import React from 'react'

const EventListeners = () => {


    const myFunction = ( name ) => {
        console.log( `Salam ${name}` )
    }


    return (
        <>
            <button onClick={() => myFunction( 'ali' )} className="bg-green-600 mx-auto block my-10 text-white p-3 rounded-md">
                Click me
            </button>
        </>
    )
}

export default EventListeners