import React, { useState, useRef, useEffect } from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useCards } from "../context/DisplayCardContext";

const Header = () => {
    const { getFilter, isFilter, getOrdered, isOrdered } = useCards();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleGroupChange = (value) => {
        getFilter(value);
    }

    const handleOrderChange = (value) => {
        getOrdered(value);
    }

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className='flex justify-between p-4 px-5 shadow-sm bg-white'>
            <div className='relative' ref={dropdownRef}>
                <button
                    className='flex items-center gap-3 w-[100%] text-md px-2 py-[0.15rem] rounded-md shadow-md border-2 text-[#626262] bg-white'
                    onClick={handleClick}
                >
                    <span className='rotate-90'><GiSettingsKnobs /></span>
                    <span>Display</span>
                    <span className={`text-sm transition duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} ><IoIosArrowDown /></span>
                </button>
                {
                    open ?
                        <>
                            <div
                                className='absolute top-11 flex flex-col gap-3 shadow-md w-[220px] md:w-[310px] h-[110px] md:h-[110px] md:p-4 p-3 rounded-md bg-white'
                            >
                                <div className='flex justify-between items-center overflow-hidden'>
                                    <p className='text-[#8D8D8D]'>Grouping</p>
                                    <select
                                        className='border border-1 px-4 py-1 rounded-md outline-none bg-white'
                                        onChange={(e) => handleGroupChange(e.target.value)}
                                        value={isFilter}
                                    >
                                        <option>Status</option>
                                        <option>User</option>
                                        <option>Priority</option>
                                    </select>
                                </div>
                                <div className='flex justify-between items-center overflow-hidden'>
                                    <p className='text-[#8D8D8D]'>Ordering</p>
                                    <select
                                        className='border border-1 px-4 py-1 rounded-md outline-none bg-white'
                                        onChange={(e) => handleOrderChange(e.target.value)}
                                        value={isOrdered}
                                    >
                                        <option>Priority</option>
                                        <option>Title</option>
                                    </select>
                                </div>
                            </div>
                        </> : ""
                }
            </div>
        </div>
    )
}

export default Header;
