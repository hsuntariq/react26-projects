import React, { useState } from 'react'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { users } from './sliderData'

const Slider = () => {

    const [number, setNumber] = useState( 0 )


    const handleNext = () => {
        if ( number >= users.length - 1 ) {
            setNumber( 0 )
        } else {
            setNumber( number + 1 )
        }
    }



    return (
        <>
            <div className="w-1/2 shadow-2xl select-none relative shadow-cyan-300 my-10 border border-cyan-200 p-5 mx-auto">
                <MdArrowRight onClick={handleNext} className='text-cyan-400 cursor-pointer text-4xl absolute top-1/2 -translate-y-1/2 right-0' />
                <MdArrowLeft className='text-cyan-400 cursor-pointer text-4xl absolute top-1/2 -translate-y-1/2 left-0' />
                <img src={users[number].image} className='w-20 object-cover h-20 mx-auto block rounded-full border border-cyan-300' alt="" />

                <h2 className="text-xl text-center text-cyan-400">
                    {users[number].name}
                </h2>

                <p className="text-cyan-400 text-center">
                    {users[number].desc}
                </p>


            </div>
        </>
    )

}

export default Slider