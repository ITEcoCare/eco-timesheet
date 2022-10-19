import React from 'react';
import { BsCheck } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Button from './Button';

const ThemeSettings = () => {

  const { setColor, setMode, currentColor, currentMode, setThemeSettings } = useStateContext()

  return (
    <div className=" bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:text-gray-200 dark:[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-extrabold text-xl">
            Theme Settings
          </p>
            <button type="button" style={{borderRadius: '50%'}} onClick={() => setThemeSettings(false)} className="text-xl rounded-md p-2 text-green-600 hover:bg-gray-200 hover:text-white" >
              <CgClose />
            </button>
          
          {/* <BsCheck /> */}
        </div>
        <div className="flex-col p-4 ml-4">
          <p className="text-gray-400 text-sm font-bold uppercase">
            Color Options
          </p>
          <div className="mt-2">
            <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onChange={()=> {setMode}} checked={currentMode === 'Light'} />
            <label htmlFor="light" className="ml-2 text-sm cursor-pointer">Light</label>
          </div>
          <div className="mt-2">
            <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={()=> {setMode}} checked={currentMode === 'Dark'} />
            <label htmlFor="dark" className="ml-2 text-sm cursor-pointer">Dark</label>
          </div>
        </div>
        <div className="flex-col p-4 ml-4">
          <p className="text-gray-400 text-sm font-bold uppercase">
            More Colors
          </p>
          <div className="flex gap-3">
            {themeColors.map((item,index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div className="relative flex gap-3 items-center mt-2 cursor-pointer" onClick={()=> setColor(item.color)}>
                  <button type='button' 
                    className="h-7 w-7 rounded-full flex cursor-pointer" 
                    style={{ backgroundColor: item.color}}
                    onClick={() => {
                      console.log("COLOR>>> ",item.color);
                      setMode(item.color);
                    }}
                    >
                    <BsCheck className={`text-3xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`}></BsCheck>
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings