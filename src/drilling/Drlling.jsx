import React, { createContext, useState } from 'react'
import { bdays } from './bdays'
import List from './List'

export const MyContext = createContext()


const Drlling = () => {

    const [data, setData] = useState( bdays )


    const deleteData = ( clickID ) => {
        let newData = data.filter( ( item, index ) => {
            return item.id !== clickID
        } )

        setData( newData )
    }


    return (
        <MyContext.Provider value={{
            deleteData,
            data
        }}>

            {
                data.map( ( item, index ) => {
                    return <List item={item} key={index} />
                } )
            }

        </MyContext.Provider>
    )
}

export default Drlling