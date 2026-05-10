import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaCheckDouble, FaCopy } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'

const SingleColor = ( { rgb, hex, type } ) => {

    const [copy, setCopy] = useState( false )


    const handleCopy = () => {
        navigator.clipboard.writeText( `#${hex}` )
        setCopy( true )
        toast.success( 'Copied to clipboard' )

        setTimeout( () => {
            setCopy( false )
        }, 1500 );


    }


    return (
        <>
            <div style={{
                backgroundColor: `rgb(${rgb})`
            }} className={`p-20 text-center relative ${type == 'shade' ? 'text-white' : 'text-black'}  text-2xl rounded-md shadow-2xl shadow-gray-600`}>
                {
                    copy ? (
                        <FaCheckDouble className='absolute top-3 left-3 cursor-pointer' onClick={handleCopy} />
                    ) : (
                        <MdContentCopy className='absolute top-3 left-3 cursor-pointer' onClick={handleCopy} />
                    )

                }
                #{hex}
            </div>
        </>
    )
}

export default SingleColor