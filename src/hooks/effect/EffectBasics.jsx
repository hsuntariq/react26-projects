import React, { useEffect, useState } from 'react'

const EffectBasics = () => {

    const [count, setCount] = useState( 0 )
    const [count2, setCount2] = useState( 0 )


    useEffect( () => {
        document.title = `(${count},${count2}) new messages`
    }, [count] )



    return (
        <>

            <div className="container select-none mx-auto text-center">
                <h1 className="text-[200px]">
                    {count}
                </h1>
                <button onClick={() => setCount( count + 1 )} className="p-3 rounded-md cursor-pointer hover:bg-cyan-600 active:scale-95 bg-cyan-500 text-white">
                    Increment
                </button>
            </div>
            <div className="container select-none mx-auto text-center">
                <h1 className="text-[200px]">
                    {count2}
                </h1>
                <button onClick={() => setCount2( count2 + 1 )} className="p-3 rounded-md cursor-pointer hover:bg-cyan-600 active:scale-95 bg-cyan-500 text-white">
                    Increment
                </button>
            </div>


        </>
    )
}

export default EffectBasics