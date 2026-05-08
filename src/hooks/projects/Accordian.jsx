import React from 'react'
import SingleAccordian from './SingleAccordian'
import { faq } from './accordiandata'

const Accordian = () => {
    return (
        <>

            <div className="w-1/2 mx-auto p-5 shadow-2xl my-10">
                {
                    faq.map( ( item, index ) => {
                        return <SingleAccordian {...item} key={item.id} />
                    } )
                }

            </div>

        </>
    )
}

export default Accordian