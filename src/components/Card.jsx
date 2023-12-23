import React, { useState, useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';
import { GiNetworkBars } from 'react-icons/gi';
import { TbCircleDotted } from "react-icons/tb";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { ImPacman } from "react-icons/im";
import { useCards } from '../context/DisplayCardContext';


const Card = ({ id, title, tag, userId, status, priority }) => {

    const { isFilter } = useCards();

    // const { id, title, tag, priority, userId } = card;

    // const user = users.find((user) => user.id === userId);

    // const getUserInitials = (name) => {
    //     const nameArray = name.split(' ');
    //     const initials = nameArray.map((word) => word.charAt(0).toUpperCase());
    //     return initials.join('');
    // };

    // const userNameInitials = user ? getUserInitials(user.name) : 'O';

    // const getRandomColor = () => {
    //     const letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // };

    // const randomColor = getRandomColor();

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
        <div className='flex flex-col justify-center gap-2 py-3 px-5 w-[285px]  bg-white rounded-md shadow-lg border-2 border-[#e6e7eb]'>
            <div className='flex justify-between'>
                <p className='text-[#8D8D8D]'>{id}</p>
                {/* <div className='flex items-center'>
                    <p
                        className='text-[9px] font-semibold text-white inline-flex items-center justify-center h-5 w-5 rounded-[50%]'
                        style={{ backgroundColor: randomColor }}
                    >
                        {userNameInitials}
                    </p>
                </div> */}
            </div>
            <div>
                <p className='flex gap-2 text-[15px] text-[#373737] font-semibold leading-tight'>
                    {
                        isFilter !== "Status" ?
                            <span className='felx relative top-[3px]'>
                                {getStatusIcon(status)}
                            </span> : ''
                    }
                    <span>{title}</span>
                </p>
            </div>
            <div className='flex items-center gap-2 text-[#8D8D8D] text-sm'>
                <div className='flex items-center py-[3px] px-[3px] border border-1 rounded-sm'>
                    <GiNetworkBars />
                </div>
                <div className='flex items-center py-[0.5px] px-[3px] border border-1 rounded-sm'>
                    <GoDotFill className='text-lg' />
                    <p className='text-[13.6px]'>{tag[0]}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
