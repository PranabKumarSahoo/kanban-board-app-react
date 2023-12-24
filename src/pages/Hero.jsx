import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useCards } from '../context/DisplayCardContext';
import { TbCircleDotted } from 'react-icons/tb';
import { GiNetworkBars } from 'react-icons/gi';
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImPacman } from "react-icons/im";
import Spinner from '../components/Spinner';
import { useTheme } from '../context/ThemeContext';
import UserProfile from '../components/UserProfile';

const Hero = () => {

    const { isCards, isFilter, isOrdered, isUser } = useCards();

    const { isDarkMode } = useTheme();

    const groupingStatusCards = {};
    const groupingUserCards = {};
    const groupingPriorityCards = {};

    const statusName = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

    const userName = ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"];

    const priority = [0, 1, 2, 3, 4];

    const [cardsArray, setCardsArray] = useState(statusName);

    const [groupedCards, setGroupedCards] = useState(groupingStatusCards);


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

    const getPriorityName = (item) => {
        switch (item) {
            case 0:
                return "No Priority";
            case 1:
                return "Low";
            case 2:
                return "Medium";
            case 3:
                return "High";
            case 4:
                return "Urgent";
            default:
                return null;
        }
    }

    function getUserName(userId) {
        const user = isUser.find(u => u.id === userId);
        return user ? user.name : "User not found";
    }

    useEffect(() => {
        if (isCards) {
            isCards.forEach((card) => {
                const status = card.status;
                const userId = card.userId;
                const priority = card.priority;

                if (!groupingStatusCards[status]) {
                    groupingStatusCards[status] = [];
                }
                groupingStatusCards[status].push(card);

                if (!groupingUserCards[userId]) {
                    groupingUserCards[userId] = [];
                }
                groupingUserCards[userId].push(card);

                if (!groupingPriorityCards[priority]) {
                    groupingPriorityCards[priority] = [];
                }
                groupingPriorityCards[priority].push(card);
            });

            switch (isFilter) {
                case "Status":
                    setCardsArray(statusName);
                    setGroupedCards(groupingStatusCards);
                    break;
                case "User":
                    userName.sort((a, b) => {
                        const cardsA = groupingUserCards[a]?.length || 0;
                        const cardsB = groupingUserCards[b]?.length || 0;
                        return cardsB - cardsA;
                    });
                    setCardsArray(userName);
                    setGroupedCards(groupingUserCards);
                    break;
                case "Priority":
                    setCardsArray(priority);
                    setGroupedCards(groupingPriorityCards);
                    break;
                default:
                    break;
            }

            switch (isOrdered) {
                case "Priority":

                    break;
                case "Title":

                    break;
                default:
                    break;
            }
        }
    }, [isFilter, isCards, isOrdered]);

    return (
        <div
            className={`flex flex-col md:flex-wrap md:flex-row md:justify-between py-4 px-5 h-[100%] ${isDarkMode ? 'bg-black' : 'bg-[#f4f5f8] text-black'}`}
        >
            {
                Object.keys(groupedCards).length > 0 ?
                    <>
                        {
                            cardsArray.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col gap-2 h-[100%] md:h-[100vh] w-full md:w-[360px] lg:w-[285px] ${isDarkMode ? 'bg-black' : 'text-black'}`}
                                >
                                    <div className='flex items-center justify-between p-2'>
                                        <div className='flex items-center gap-2'>
                                            {
                                                isFilter === "Status" &&
                                                <>
                                                    <span
                                                        className={`${item === "In progress" ? '-rotate-[135deg]' : ''}`}>
                                                        {getStatusIcon(item)}
                                                    </span>
                                                    <span className={`font-semibold ${isDarkMode ? 'text-[#808080]' : 'text-black'}`}>
                                                        {item}
                                                    </span>
                                                    <span className='text-[#808080]'>{groupedCards[item]?.length || 0}</span>
                                                </>
                                            }
                                            {
                                                isFilter === "User" &&
                                                <div className='flex items-center justify-center gap-2'>
                                                    <UserProfile
                                                        userId={item}
                                                    />
                                                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                                        {getUserName(item)}
                                                    </span>
                                                    <span className='text-[#808080]'>{groupedCards[item]?.length || 0}</span>
                                                </div>
                                            }
                                            {
                                                isFilter === "Priority" &&
                                                <div className='flex items-center justify-center gap-2'>
                                                    <span
                                                        className={`${item === "In progress" ? '-rotate-[135deg]' : ''}`}>
                                                        <GiNetworkBars />
                                                    </span>
                                                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                                        {getPriorityName(item)}
                                                    </span>
                                                    <span className='text-[#808080]'>{groupedCards[item]?.length || 0}</span>
                                                </div>
                                            }
                                        </div>
                                        <div className='flex gap-1'>
                                            <span className='text-[#808080] text-sm'><FaPlus /></span>
                                            <span className='text-[#808080] text-sm'><HiDotsHorizontal /></span>
                                        </div>
                                    </div>
                                    {
                                        groupedCards[item]?.map((card, index) => (
                                            <Card
                                                key={index}
                                                {...card}
                                            />
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </> :
                    <div className='flex items-center justify-center w-full'>
                        <Spinner />
                    </div>
            }
        </div >
    )
}

export default Hero;