import React, { useRef } from 'react'

const RefBasics = () => {

    const heading = useRef()


    let rotate = 0

    const handleClick = () => {
        rotate += 360
        heading.current.style.color = 'red'
        heading.current.innerHTML = 'New Content'
        heading.current.style.transform = `rotate(${rotate}deg)`
    }

    const handleReset = () => {
        rotate = 0
        heading.current.style.transform = `rotate(${rotate})`
    }


    return (
        <>
            <div className="container select-none text-center my-10 mx-auto">

                <h1 ref={heading} className="text-center select-none transition-all duration-1000 text-4xl mx-auto w-max my-5 px-3 py-2 rounded-md">
                    UseRef
                </h1>
                <button onClick={handleClick} className="w-max mx-3 active:scale-95 px-3 py-2 text-white rounded-md bg-cyan-500">
                    Click Me
                </button>
                <button onClick={handleReset} className="w-max mx-3 active:scale-95 px-3 py-2 text-white rounded-md bg-green-500">
                    Reset
                </button>
            </div>


        </>
    )
}

export default RefBasics