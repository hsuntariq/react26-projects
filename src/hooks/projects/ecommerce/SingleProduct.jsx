import React, { useState } from 'react'
import SingleReview from './SingleReview'
import { IoMdArrowDropdown } from 'react-icons/io'

const SingleProduct = ( { images, title, price, rating, reviews } ) => {

    const [show, setShow] = useState( false )

    return (
        <>
            <div className="p-4 max-h-[360px] overflow-y-scroll rounded-md shadow-xl shadow-gray-600 ">
                <img src={images[0]} className='w-full sticky top-0 bg-white' alt="" />
                <h3 className="text mt-2 text-cyan-500">
                    {title}
                </h3>
                <p className="font-semibold text-yellow-700">
                    ${price}
                </p>

                {/* make dummy array */}
                <div className="flex justify-between items-center">

                    {
                        [...Array( Math.round( rating ) )].map( ( _, index ) => {
                            return '⭐'
                        } )
                    }

                    <IoMdArrowDropdown onClick={() => setShow( !show )} className='text-xl cursor-pointer' />

                </div>


                <div className={` ${show ? 'block' : 'hidden'} `}>


                    {
                        reviews?.map( ( item, index ) => {
                            return <SingleReview {...item} key={index} />
                        } )
                    }
                </div>



            </div>
        </>
    )
}

export default SingleProduct