import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Values from 'values.js'
import SingleColor from './SingleColor'
const ColorGenrator = () => {

    const [color, setColor] = useState( '' )
    const [list, setList] = useState( new Values( 'purple' ).all( 10 ) )
    const [btnColor, setBtnColor] = useState( 'cyan' )



    const handleColor = ( e ) => {
        e.preventDefault()
        if ( !color ) {
            toast.error( 'Please enter a color value' )
        }
        setBtnColor( color )
        try {
            const myColors = new Values( color ).all( 10 )
            setList( myColors )
        } catch ( error ) {
            toast.error( 'Invalid Color Value' )
        }
    }


    return (
        <>

            <form className='w-[90%] lg:w-1/2 p-5 mx-auto shadow-2xl my-10 shadow-gray-600 rounded-md'>
                <h1 className="text-center text-4xl">
                    Color Generator
                </h1>
                <label htmlFor="">Color</label>
                <input value={color} onChange={( e ) => setColor( e.target.value )} placeholder='e.g. red' type="text" className='w-full border border-gray-300   p-3 rounded-md my-3' />


                <button onClick={handleColor} style={{
                    backgroundColor: btnColor ? btnColor : 'cyan'
                }} className={`w-full active:scale-95  p-2 rounded-md text-white`}>
                    Generate
                </button>
            </form>


            <div className="container p-5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    list?.map( ( item, index ) => {
                        return <SingleColor {...item} hex={item.hex} key={index} />
                    } )
                }
            </div>



        </>
    )
}

export default ColorGenrator