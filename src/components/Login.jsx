import React from "react";
import login1 from "../assets/login1.jpg"

const Login = () => {
// export default function Login() {

    return (
        <div className="flex flex-col md:flex-row h-screen items-center">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2"></div> */}
            
            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img
                    // src={login1}
                    src="https://source.unsplash.com/random"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Login content */}
             
            {/* start */}
            
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
                    <div className="relative sm:max-w-sm w-full">
                        {/* <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="card bg-green-600 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div> */}
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Login
                            </label>
                                <form method="#" action="#" className="mt-10">

                                   
                                          
                                    <div className="mt-7">
                                        <input 
                                            className="p-2 mt-1 block w-full border-none rounded-xl bg-white-100 h-11 shadow-lg hover:bg-blue-100 focus:border-indigo-500 focus:ring-indigo-500"
                                            type="text" 
                                            name="first-name" 
                                            id="first-name" 
                                            autoComplete="given-name" 
                                            placeholder="username or email"
                                        />
                                    {/* <input type="email" placeholder=" username or email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" /> */}
                                    </div>

                                    <div className="mt-7">                
                                        <input 
                                            className="p-2 mt-1 block w-full border-none rounded-xl bg-white-100 h-11 shadow-lg hover:bg-blue-100  focus:bg-blue-100 focus:ring-0" 
                                            type="password" 
                                            placeholder=" password"
                                            aria-label="password" 
                                        />                           
                                    </div>

                                    <div className="mt-7 flex">
                                        <label for="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                            <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                            <span className="ml-2 text-xs text-gray-500">
                                                Remember me
                                            </span>
                                        </label>
                        
                                        <div className="w-full text-right">     
                                                <a className="underline text-xs text-gray-600 hover:text-gray-500" href="#">
                                                    Forgot Password?
                                                </a>                                  
                                        </div>
                                    </div>
                        
                                    <div className="mt-7">
                                        <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Login
                                        </button>
                                    </div>
                        
                                    <div className="flex mt-7 items-center text-center">
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                        <label className="block font-medium text-sm text-gray-600 w-full">
                                            Or 
                                        </label>
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    </div>
                        
                                    <div className="flex mt-7 justify-center w-full">
                                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            
                                            Facebook
                                        </button>
                        
                                        <button className="bg-green-600 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            
                                            Google
                                        </button>
                                    </div>
                        
                                    <div className="mt-7">
                                        <div className="flex justify-center items-center">
                                            <label className="mr-2 text-xs text-gray-600" >Did not have account?</label>
                                            <a href="#" className="text-xs text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                                Sign Up
                                            </a>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* end */}
                
            {/* </div> */}

            
        </div>)
}

export default Login;
