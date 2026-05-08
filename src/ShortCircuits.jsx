import React, { useState } from 'react'

const ShortCircuits = () => {
    const [text, setText] = useState( '' )

    let first = text && 'Salam'
    let second = text || 'Wa laikum Salam'





    return (
        <>

            <h1 className='text-center text-5xl'>
                {
                    text ? 'This is true' : 'This is False'
                }
            </h1>
        </>
    )
}

export default ShortCircuits