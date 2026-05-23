import React from 'react'
import SingleItem from './SingleItem'

const List = ( { item } ) => {
    return (
        <>
            <SingleItem {...item} />
        </>
    )
}

export default List