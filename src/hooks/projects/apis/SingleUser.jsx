import React from 'react'
import { FaGithub } from 'react-icons/fa'

const SingleUser = ( { avatar_url, login, url } ) => {
    return (
        <>
            <div className="p-4 rounded-md my-4 shadow-xl shadow-gray-900">
                <img src={avatar_url} className='w-full' alt="" />
                <h3 className="text-xl capitalize mt-3 font-semibold text-gray-700">
                    {login}
                </h3>
                <a href={url} target='_blank'>
                    <FaGithub />
                </a>
            </div>
        </>
    )
}

export default SingleUser