import React, { useState } from 'react'

const ObjectState = () => {

    const [user, setUser] = useState( {
        name: 'Ali', age: 21, email: 'ali@mail.com'
    } )


    const handleClick = () => {
        setUser( { ...user, name: 'ahmed', email: 'ahmed@mail.com' } )
    }


    return (
        <>
            <h2 className='text-center text-4xl'>{user.name}</h2>
            <h2 className='text-center text-4xl'>{user.age}</h2>
            <h2 className='text-center text-4xl'>{user.email}</h2>

            <button onClick={handleClick} className="px-5 mx-auto block py-2 bg-black text-white rounded-md">
                Change
            </button>


        </>
    )
}

export default ObjectState