import React, { useState } from 'react'

const State = () => {


    const [title, setTitle] = useState( 'Salam' )




    const changeTitle = () => {
        if ( title == 'Salam' ) {
            setTitle( 'wa laikum salam' )
        } else {
            setTitle( 'Salam' )
        }
    }


    return (
        <>

            <h1 className="text-center text-5xl text-green-500 font-bold">
                {title}
            </h1>

            <button onClick={changeTitle} className="bg-green-500 p-3 mx-auto block mt-10 rounded-md text-white font-semibold">
                Change title
            </button>



        </>
    )
}

export default State