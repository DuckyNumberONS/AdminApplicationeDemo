import React, { useState } from 'react';
import SearchHeader from './search';

interface Props {
    mouse: boolean;
    mouseClick: (newData: boolean) => void;
}
const Header: React.FC<Props> = ({ mouse, mouseClick }) => {
    // const [showPopup, setShowPopup] = useState(false);
    // const [showSetting, setShowSetting] = useState(false);

    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    //     setShowSetting(false);
    // };
    // const toggleSetting = () => {
    //     setShowSetting(!showSetting);
    //     setShowPopup(false);
    // };

    return (
        <header className="flex items-center space-x-4 shadow bg-white  w-full px-5 absolute h-[71px] z-10">
            <SearchHeader mouse={mouse} mouseClick={mouseClick} />
            <a href="!#" className="relative text-gray-500 hover:text-gray-800">
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                </svg>
            </a>
            <div className="relative inline-block text-left">
                <div>
                    <button
                        className="inline-flex justify-center w-full items-center text-gray-500 hover:text-gray-800 focus:outline-none"
                        id="headlessui-menu-button-1"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                    >
                        {/* <img className="rounded-full w-8 h-8" src="" alt="" /> */}
                        <span className="font-medium ml-3 mr-1">Super User</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;
