import React, { useEffect, useState } from 'react'

import { BsChatLeftQuote } from 'react-icons/bs'
import { HiMenu } from 'react-icons/hi'
import { IoMdNotifications, IoChatbubblesOutline, IoMdArrowDropdown } from 'react-icons/io'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatarA from '../data/avatarA.jpg'
import { Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button 
      type="button" 
      onClick={()=>customFunc()} 
      style={{ color }} 
      className='relative text-xl rounded-full p-3 mt-3  text-green-600 hover:bg-gray-300 hover:text-white' 
    >
      <span 
        style={{ background: dotColor }} 
        className="animate-ping absolute inline-flex rounded-full h-1 w-1 right-2 top-2 hover:text-white"
      />
      
      
        {icon}
    </button>
  </TooltipComponent>
);


const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, currentColor } = useStateContext();

  return (
   
      <div className='mt-0 fixed w-full z-10 top-0 flex justify-between p-2 rounded-b-xl' style={{backgroundColor: currentColor }}>
          
          <NavButton className='fixed' title="Menu" icon={<HiMenu size={20}/>}
            customFunc={ () => setActiveMenu( (prevActiveMenu) => !prevActiveMenu) }
            color={"#FFFFFF"}  
            />
          <div className='flex items-center '>
            {/* {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />} */}
            <NavButton title="Chat" dotColor={"crimson"} color={"#FFFFFF"} customFunc={ () => handleClick('chat') } icon={<BsChatLeftQuote size={20}/>}/>
            <NavButton title="Notification" dotColor={"crimson"} color={"#FFFFFF"} customFunc={ () => handleClick('notification')} icon={<IoMdNotifications size={20}/>}/>
            <TooltipComponent
              content="Profile"
              position="BottomCenter"
              >
              <div className="flex items-center gap-2 cursor-pointer p-3 mt-3 rounded-lg hover:bg-gray-300" color={"#FFFFFF"} onClick={ () => handleClick('userProfile')}>
                <img src={avatarA} className="w-8 h-8 rounded-lg"/>
                <p>
                  <span className="text-14 text-white">Hi, </span>{' '}
                  <span className="text-14 text-white font-bold">Sahabit</span>
                </p>
                <IoMdArrowDropdown title="Profile" size={20}/>
              </div>

            </TooltipComponent>
            
          </div>
        
      </div>
  )
}

export default Navbar

