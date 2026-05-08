import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState( 0 )




    const handleClick = ( e ) => {
        let text = e.target.innerHTML

        if ( text == 'Decrease' ) {
            setCount( count - 1 )
        } else if ( text == 'Reset' ) {
            setCount( 0 )
        } else {
            setCount( count + 1 )
        }


    }

    return (
        <>
            <div className="container mx-auto text-center">
                <h1 className={`text-[200px] ${count == 0 ? 'text-yellow-400' : count < 0 ? 'text-red-500' : 'text-green-500'} `}>
                    {count}
                </h1>
                <button onClick={handleClick} className="bg-red-500 px-4 mx-2 py-2 rounded-md active:scale-95 text-white cursor-pointer">Decrease</button>
                <button onClick={handleClick} className="bg-yellow-500 px-4 mx-2 py-2 rounded-md active:scale-95 text-white cursor-pointer">Reset</button>
                <button onClick={handleClick} className="bg-green-500 px-4 mx-2 py-2 rounded-md active:scale-95 text-white cursor-pointer">Increase</button>
            </div>
        </>
    )
}

export default Counter