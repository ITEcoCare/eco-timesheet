import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useSelector } from 'react-redux';
import './App.css';

import { Header, Footer, Login, UserProfile, Sidebar, Navbar, ThemeSettings } from './components';
import { Settings, Timesheet, Employee, Dashboard, Calendar } from './pages';

import { useStateContext } from './contexts/ContextProvider';
import ColorPicker from './pages/ColorPicker';

const App = () => {

  // const activeMenu = true;
  const { activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor } = useStateContext();

  return (
    // <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <div className=" ">
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="rounded-full text-3xl p-3 hover:drop-shadow-xl text-white hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-64 pb-10 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-gray-200 min-h-screen md:ml-64 max-w-5xl'
                : 'bg-gray-200 dark:bg-main-dark-bg w-full min-h-screen flex-2'
            }
          >
            <div className=" dark:bg-main-dark-bg ">
              <Navbar className=""/>
            </div>
            <div>
              {themeSettings && <ThemeSettings/>}
              <Routes className=" ">
                {/* Main Dashboard */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Apps */}
                <Route path="/timesheet" element={<Timesheet />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/colorpicker" element={<ColorPicker />} />

                {/* Settings & Roles */}
                <Route path="/settings" element={<Settings />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
