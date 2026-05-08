import moment from 'moment'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const SingleReview = ( { comment, date, reviewerName } ) => {
    return (
        <>


            <div className="flex items-center gap-3 my-2 p-3 shadow">
                <FaUser />
                <div className="flex w-full justify-between ">
                    <div className="">
                        <h3 className="text-sm font-bold">{reviewerName}</h3>
                        <p className="text-gray-500 text-sm">
                            {comment}
                        </p>
                    </div>
                    <p className="font-semibold text-sm text-gray-400">
                        {moment( date ).format( 'MM Do YY' )}
                    </p>
                </div>
            </div>

        </>
    )
}

export default SingleReview