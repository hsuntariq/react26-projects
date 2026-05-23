import { createContext, useContext, useState } from "react";
import { bdays } from "../hooks/projects/bdayreminder/bdays";

export const AppContext = createContext()



export const AppProvider = ( { children } ) => {


    const [data, setData] = useState( bdays )

    const removeSingleBday = ( clickID ) => {
        let newData = data.filter( ( item, index ) => {
            return item.id !== clickID
        } )

        setData( newData )
    }



    return <AppContext.Provider value={{
        data, setData, removeSingleBday
    }}>
        {children}
    </AppContext.Provider>
}



export const useGlobal = () => {
    return useContext( AppContext )
}