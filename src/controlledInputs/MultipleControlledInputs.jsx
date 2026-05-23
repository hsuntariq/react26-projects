import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import InputCard from './InputCards'

const MultipleControlledInputs = () => {

    const [formFields, setFormFields] = useState( {
        name: '', email: '', age: '', city: '', message: ''
    } )


    const [userData, setUserData] = useState( [] )

    // destructure the fields

    const { name, email, age, city, message } = formFields


    const [updateID, setUpdateID] = useState( null )


    const handleChange = ( e ) => {
        setFormFields( {
            ...formFields,
            [e.target.name]: e.target.value
        } )
    }


    const handleData = () => {
        if ( !name || !age || !email || !city || !message ) {
            toast.error( 'Please enter the missing fields' )
        } else {
            setUserData( [...userData, {
                name, email, age, city, message, id: Date.now()
            }] )
        }

        setFormFields( { name: '', email: '', age: '', city: '', message: '' } )
    }






    const deleteData = ( clickID ) => {
        let newData = userData?.filter( ( item, index ) => {
            return item.id !== clickID
        } )
        setUserData( newData )
    }




    useEffect( () => {

        setFormFields( {
            name: updateID?.name,
            age: updateID?.age,
            email: updateID?.email,
            city: updateID?.city,
            message: updateID?.message
        } )


    }, [updateID] )



    const handleUpdata = () => {

        let updatedData = userData.map( ( item, index ) => {
            if ( item.id == updateID.id ) {
                return {
                    ...item,
                    name, email, age, message, city
                }
            }

            return item
        } )


        setUserData( updatedData )

        setFormFields( {
            name: '', email: '', age: '', city: '', message: ''
        } )

        setUpdateID( null )

    }










    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">5 Input Form</h2>
                    <p className="text-sm text-gray-500 mb-5">Pure static design</p>

                    <div className="space-y-4">
                        {/* Input 1 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                onChange={handleChange}
                                name='name'
                                value={name}
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Input 2 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                onChange={handleChange}
                                name='email'
                                value={email}
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Input 3 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Age
                            </label>
                            <input
                                onChange={handleChange}
                                name='age'
                                value={age}
                                type="number"
                                placeholder="25"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Input 4 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                            </label>
                            <input
                                onChange={handleChange}
                                name='city'
                                value={city}
                                type="text"
                                placeholder="New York"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Input 5 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={handleChange}
                                name='message'
                                rows={3}
                                placeholder="Your message here..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            />
                        </div>

                        <button onClick={updateID ? handleUpdata : handleData} className={`w-full p-2 rounded-md ${updateID ? 'bg-blue-500' : 'bg-black'} text-white`}>

                            {updateID ? 'Update Data' : 'Add Data'}
                        </button>
                    </div>
                </div>




            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    userData?.map( ( item, index ) => {
                        return <InputCard deleteUser={deleteData} setUpdateID={setUpdateID} {...item} key={index} />
                    } )
                }
            </div>



        </>
    )
}

export default MultipleControlledInputs