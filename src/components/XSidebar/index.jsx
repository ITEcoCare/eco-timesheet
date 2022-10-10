import React, { useState } from "react";
import Logo from '../../assets/logo.png';

import { BiHomeAlt } from 'react-icons/bi';
import { BsClipboardData } from 'react-icons/bs';
import { TbHistory, TbLogout } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg'; 
import { MdSpaceDashboard } from 'react-icons/md';
import { ImLeaf } from 'react-icons/im';


 


import { Listbox, Transition, Dialog } from "@headlessui/react";
// import {
//     AnnotationIcon,
//     BuildingLibraryIcon
// } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
// import { Logout } from "../../store/actions/authAction";
// import { useDispatch } from "react-redux";

const people = [
    { id: 1, name: 'Durward Rekynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

export default function Sidebar() {
    const menu = [
        { name: 'Home', icon: <MdSpaceDashboard size={20}/> },
        { name: 'History', icon: <TbHistory size={20}/> },
        { name: 'Report', icon: <BsClipboardData size={20}/> },
        { name: 'Profile', icon: <CgProfile size={20}/> },
        { name: 'Logout', icon: <TbLogout size={20}/> },
        
        
    ]
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        // <div className="h-screen border-r border-grey-200 w-90 px-9">
        <div className="flex">

            {/* <div>
                <ul> */}
            <aside className="w-72 border-r h-screen sticky top-0 overflow-y-scroll md:block hidden bg-white dark:bg-gray-800 px-6 py-4" aria-label="Sidebar">
                <div class=" overflow-y-auto rounded bg-white-100 dark:bg-gray-800">
                    <ul class="space-y-2 ml-3">
                        <div className="flex items-center h-14 px-3">
                            <div>
                                <ImLeaf size={30} className="" color="green"/>
                                {/* <img src={  } alt="sakir" className="w-7 h-9" /> */}
                            </div>
                            <div className="text-lg font-bold ml-2">Timesheet</div>
                        </div>
                    </ul>
                    <ul class="space-y-2">
                        <li className="relative flex flex-row items-center h-11 focus:outline-none border-l-4 border-transparent pr-6">
                            <div className="text-md font-bold ml-2">Menu</div>
                        </li>
                        <li
                            to="notification"
                            className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                            >
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                                </svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Dashboard
                            </span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                        </li>
                        <li
                            to="notification"
                            className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                            >
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </span>
                            <span className="ml-2 text-sm tracking-wide truncate">
                                Notifications
                            </span>
                            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                                1.2k
                            </span>
                        </li>

                        {
                        menu.map((val, index) => {
                            return (
                                <li key={index}
                                    to="notification"
                                    className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-green-500 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                                    >
                                    <span className="inline-flex justify-center items-center ml-4">
                                        {val.icon}
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">
                                    {val.name}
                                    </span>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </aside>
            
            
            {/* <div>
               start
               <div class="max-w-2xl mx-auto">
                </div>
               end
            </div> */}
            
        </div>
    );

}