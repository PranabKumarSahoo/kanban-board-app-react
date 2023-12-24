import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { GiNetworkBars } from 'react-icons/gi';
import { TbCircleDotted } from "react-icons/tb";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { ImPacman } from "react-icons/im";
import { useCards } from '../context/DisplayCardContext';
import { useTheme } from '../context/ThemeContext';
import UserProfile from './UserProfile';

const Card = ({ id, title, tag, userId, status }) => {

    const { isFilter } = useCards();

    const { isDarkMode } = useTheme();

    const getStatusIcon = (status) => {
        switch (status) {
            case "Backlog":
                return <TbCircleDotted className='text-[#808080]' />
            case "Todo":
                return <FaRegCircle className='text-[#808080]' />
            case "In progress":
                return <ImPacman className='text-[#F5C842]' />
            case "Done":
                return <FaCheckCircle className='text-[#384BB5]' />
            case "Cancelled":
                return <FaCircleXmark className='text-[#808080]' />
            default:
                return null;
        }
    }

    return (
        <div className={`flex flex-col justify-center gap-2 py-3 px-5 w-[100%] rounded-md shadow-lg border-[0.5px] ${isDarkMode ? 'bg-[#161B22] border-[#414141]' : 'bg-white border-[#dedede]'}`}>
            <div className='flex justify-between'>
                <p className={`${isDarkMode ? 'text-[#8d8d8d]' : 'text-black'}`}>{id}</p>
                <div className='flex items-center'>
                    {
                        isFilter !== "User" ?
                            <UserProfile
                                userId={userId}
                            /> : ''
                    }
                </div>
            </div>
            <div>
                <p className='flex gap-2 text-[15px] text-[#373737] font-semibold leading-tight'>
                    {
                        isFilter !== "Status" ?
                            <span className='felx relative top-[3px]'>
                                {getStatusIcon(status)}
                            </span> : ''
                    }
                    <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{title}</span>
                </p>
            </div>
            <div className='flex items-center gap-2 text-[#8D8D8D] text-sm'>
                <div className='flex items-center py-[3px] px-[3px] border-[#a1a1a1] border-[0.5px] rounded-sm'>
                    <GiNetworkBars />
                </div>
                <div className='flex items-center py-[0.5px] px-[3px] border-[#a1a1a1] border-[0.5px] rounded-sm'>
                    <GoDotFill className='text-lg' />
                    <p className='text-[13.6px]'>{tag[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
