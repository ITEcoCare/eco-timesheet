import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from "../contexts/ContextProvider";

import { CgClose } from 'react-icons/cg';
import { ImLeaf } from 'react-icons/im';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Listbox, Transition, Dialog } from "@headlessui/react";

import { menuHead } from "../data/dummy";
import Logo from '../assets/logo.png';
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const Sidebar = () => {

    const { activeMenu, setActiveMenu } = useStateContext();

    // const normalLink = "flex relative items-center gap-5 pl-4 pt-3 pb-2.5 text-sm  items-center focus:outline-none text-gray-700 border-l-4 border-transparent pr-6 hover:bg-green-600 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-black m-2";
    // const activeLink = "flex relative flex-row items-center gap-5 pl-4 pt-3 pb-2.5 text-sm font-extrabold focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 bg-blue-500 text-white hover:bg-green-500 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 m-2";
    const normalLink = "flex relative items-center rounded-md text-sm gap-5 pl-4 pt-3 pb-2.5 mt-2 hover:drop-shadow-md hover:bg-green-600 text-gray-700 hover:text-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-100 duration-200 m-2";
    const activeLink = "flex relative items-center rounded-md text-sm gap-5 pl-4 pt-3 pb-2.5 mt-2 font-extrabold focus:outline-none text-gray-600 drop-shadow-md bg-blue-600 text-white transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-100 duration-200 m-2";

    // const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
            {activeMenu ? (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={() => { setActiveMenu(false) }} className="flex items-center gap-3 mt-4 ml-3 text-xl font-bold tracking-tight dark:text-white text-slate-900">
                        <ImLeaf size={30} className="" color="green" />
                        <span className="text-gray-400 ">EcoTimesheet</span>
                    </Link>
                    {/* <TooltipComponent content="Close" position="BottomCenter" className="m-2">
                        <button type="button" onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-md p-2 mt-4 text-green-600 hover:bg-gray-200 hover:text-white" >
                            <CgClose />
                        </button>
                    </TooltipComponent> */}
                </div>
                <div className="mt-10 mb-24">
                    {menuHead.map((val) => (
                        <div key={val.title}>
                            {/* <div className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-green-500 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200" > */}
                            <div className="text-gray-400 m-3 font-bold uppercase">
                                <span className="ml-2 text-sm tracking-wide truncate btn-primary rounded-full ">
                                    {val.title}
                                </span>
                            </div>
                            {val.links.map((link) => (
                                <NavLink to={`/${link.name}`} onClick={() => { }} key={link.name} className={
                                    ({ isActive }) => isActive ? activeLink : normalLink
                                }>
                                    {link.icon}
                                    <span className="capitalize">
                                        {link.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>)
                : (
                    <div className="flex justify-between items-center">
                        <span>actM off</span>
                        <Link to="/" onClick={() => { }}>
                        </Link>
                        <h1>TIDAK activeMenu</h1>
                    </div>
                )
            }

        </div>
    );

}

export default Sidebar;

