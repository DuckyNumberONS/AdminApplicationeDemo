import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [active, setActive] = useState(false);
    // const url = window.location.toString();
    // const baseUrl = 'http://localhost:3000/';
    // const path = url.substring(baseUrl.length);
    // console.log(path);

    useEffect(() => {}, []);

    return (
        <div className="bg-gray-800 overflow-y-auto h-screen">
            <div className="flex lg:space-x-3 justify-center lg:justify-start lg:px-3 border-b border-gray-900 items-center h-[72px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-12 h-12 lg:w-10 lg:h-10 text-indigo-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    ></path>
                </svg>
                <h2 className="text-white text-2xl font-semibold hidden lg:inline">Admin</h2>
            </div>
            <ul className="lg:mt-2 lg:space-y-2">
                <a
                    className={`lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate   ${
                        active ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    } lg:rounded-md `}
                    onClick={() => router.push('/')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 lg:w-5 lg:h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                    </svg>
                    <span className="hidden lg:inline">Dashboard</span>
                </a>
                <a
                    className={`lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate   ${
                        active ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    } lg:rounded-md `}
                    onClick={() => router.push('/list-movies')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 lg:w-5 lg:h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                    </svg>
                    <span className="hidden lg:inline">List Movies</span>
                </a>
                <a
                    className={`lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate   ${
                        active ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    } lg:rounded-md `}
                    onClick={() => router.push('/list-actor-movies')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 lg:w-5 lg:h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                    </svg>
                    <span className="hidden lg:inline">List Actor Movies</span>
                </a>
                <a
                    className={`lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate   ${
                        active ? 'text-white bg-gray-700' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    } lg:rounded-md `}
                    onClick={() => router.push('/list-category')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 lg:w-5 lg:h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                    </svg>
                    <span className="hidden lg:inline">List Category</span>
                </a>
                <div>
                    <span className="my-3 lg:my-5 border-b border-gray-900 block"></span>
                </div>
                <a
                    className="lg:mx-2 py-4 lg:py-2 lg:px-3 flex justify-center lg:justify-start space-x-4 items-center truncate  text-gray-400 lg:rounded-md hover:text-white hover:bg-gray-700"
                    href="#/"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-8 h-8 lg:w-5 lg:h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="hidden lg:inline">Settings</span>
                </a>
            </ul>
        </div>
    );
};
export default Navbar;
