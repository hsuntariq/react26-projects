import React from 'react'

const SingleChat = ( { name, message, messageCount, time, image } ) => {
    return (
        <>
            <div className="flex shadow-2xl p-3 justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src={image} className='h-15 w-15 rounded-full' alt="" />
                    <div className="">
                        <h4 className='font-bold text-gray-700'>{name}</h4>
                        <p className='text-gray-500 text-sm font-semibold'>{message}</p>
                    </div>
                </div>

                <div className="">
                    <p className='text-sm font-semibold'>{time}</p>
                    <p className='w-5 h-5 flex justify-center items-center text-sm ms-auto bg-green font-bold rounded-full bg-green-500 text-white shadow mb-3 '>{messageCount}</p>
                </div>
            </div>
        </>
    )
}

export default SingleChat