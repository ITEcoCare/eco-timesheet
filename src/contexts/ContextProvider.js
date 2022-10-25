import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const urlAPI = "";

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode')); 
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  
  const [isHovering, setIsHovering] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value= {
      { 
        handleClick, 
        isClicked, 
        setIsClicked, 
        activeMenu, 
        setActiveMenu, 
        currentColor, setCurrentColor,
        currentMode, setCurrentMode,
        themeSettings, setThemeSettings,
        setMode, setColor,
        handleMouseEnter, handleMouseLeave,
        isHovering, setIsHovering
      }
    }>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
