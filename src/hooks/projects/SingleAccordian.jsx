import React, { useState } from 'react'
import { IoCaretDownOutline } from 'react-icons/io5'

const SingleAccordian = ( { question, answer, id } ) => {

    const [show, setShow] = useState( false )


    return (
        <>
            <div className="rounded-md my-10 select-none justify-between items-center p-4 shadow-xl shadow-red-500">
                <div className="flex justify-between">
                    <h5 className='font-semibold text-md'>
                        {question}
                    </h5>
                    <IoCaretDownOutline onClick={() => setShow( !show )} className={`cursor-pointer transition-all duration-200 ${show ? 'rotate-180' : ''} `} />
                </div>
                <p className={`text-gray-500 transition-all overflow-hidden duration-200 ${show ? `${id == 3 ? 'h-7' : 'h-12.5'}` : 'h-0'}`}>
                    {answer}
                </p>
            </div>
        </>
    )
}

export default SingleAccordian