import React from "react";
import { HiPencil, HiTrash, HiUser, HiMail, HiCalendar, HiLocationMarker } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

export default function InputCard ( { name, age, email, message, city, id, deleteUser, setUpdateID } ) {
    return (
        <div className="  p-6">
            <div className="max-w-7xl mx-auto">
                {/* Card 1 - Empty/Placeholder Card */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                    <div className="p-5">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                            <div className="flex gap-2">
                                <HiPencil onClick={() => setUpdateID( {
                                    id, name, age, email, message, city
                                } )} className="w-5 h-5 text-blue-500 hover:text-blue-700 cursor-pointer transition-colors" />
                                <HiTrash onClick={() => deleteUser( id )} className="w-5 h-5 text-red-500 hover:text-red-700 cursor-pointer transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-600">
                                <HiMail className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm">{email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <HiCalendar className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm">Age: {age}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <HiLocationMarker className="w-4 h-4 text-indigo-500" />
                                <span className="text-sm">{city}</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-600">
                                <HiChatBubbleLeftRight className="w-4 h-4 text-indigo-500 mt-0.5" />
                                <span className="text-sm">
                                    {message}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}