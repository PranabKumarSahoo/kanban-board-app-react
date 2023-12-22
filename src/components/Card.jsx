import React, { useState, useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';
import { GiNetworkBars } from 'react-icons/gi';
import { TbCircleDotted } from "react-icons/tb";
import Spinner from './Spinner';

const Card = ({ ticket, users }) => {
    const { id, title, tag, priority, userId } = ticket;

    const user = users.find((user) => user.id === userId);

    const getUserInitials = (name) => {
        const nameArray = name.split(' ');
        const initials = nameArray.map((word) => word.charAt(0).toUpperCase());
        return initials.join('');
    };

    const userNameInitials = user ? getUserInitials(user.name) : 'O';

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const randomColor = getRandomColor();

    const getStatusIcon = (status) => {
        switch (status) {
            case "Backlog":
                return <TbCircleDotted />
            case "Backlog":
                return <TbCircleDotted />
            default:
                break;
        }
    }

    return (
        <div className='flex flex-col justify-center gap-2 py-3 px-5 w-[285px] h-[150px] bg-white rounded-md shadow-md'>
            <div className='flex justify-between'>
                <p className='text-[#8D8D8D]'>{id}</p>
                <div className='flex items-center'>
                    <p
                        className='text-[9px] font-semibold text-white inline-flex items-center justify-center h-5 w-5 rounded-[50%]'
                        style={{ backgroundColor: randomColor }}
                    >
                        {userNameInitials}
                    </p>
                </div>
            </div>
            <div>
                <p className='text-[16px] text-[#373737] font-semibold'>{getStatusIcon()} {title}</p>
            </div>
            <div className='flex items-center gap-2 text-[#8D8D8D] text-sm'>
                <div className='flex items-center py-[3px] px-[3px] border border-1 rounded-sm'>
                    <GiNetworkBars />
                </div>
                <div className='flex items-center py-[1px] px-[3px] border border-1 rounded-sm'>
                    <GoDotFill className='text-lg' />
                    <p className='text-[13.6px]'>{tag[0]}</p>
                </div>
            </div>
        </div>
    );
};

const TicketList = () => {
    const [tickets, setTickets] = useState(null);
    const [users, setUsers] = useState(null);

    if (!tickets || !users) {
        return <Spinner />;
    }

    return (
        <div className='flex flex-wrap gap-4 max-h-screen'>
            {tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} users={users} />
            ))}
        </div>
    );
};

export default TicketList;
