import React, { useContext } from 'react'
import SingleChat from './SingleChat'
import { users } from './data'
import { AppContext, useGlobal } from './context/AppContext'

const Screen = () => {




    return (
        <>
            <div className="w-1/3 p-5 shadow mx-auto mt-10 rounded-md">

                {
                    users.map( ( item, index ) => {
                        return <SingleChat {...item} />
                    } )
                }


            </div>
        </>
    )
}

export default Screen