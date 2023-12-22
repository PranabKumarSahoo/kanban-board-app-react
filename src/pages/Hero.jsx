import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useCards } from '../context/DisplayCardContext';
import { TbCircleDotted } from 'react-icons/tb';
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { ImPacman } from "react-icons/im";

const Hero = () => {

    const { isCards, setIsCards, isFilter, isUser } = useCards();

    const groupingStatusCards = {};
    const groupingUserCards = {};
    const groupingPriorityCards = {};

    const statusName = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

    const userName = ["usr-1", "usr-2", "usr-3", "usr-4", "usr-5"];

    const priority = [0, 1, 2, 3, 4];

    const [cardsArray, setCardsArray] = useState(statusName);

    const [groupedCards, setGroupedCards] = useState(groupingStatusCards);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers'
                );
                const result = await response.json();
                setIsCards(result.tickets);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        switch (isFilter) {
            case "Status":
                setCardsArray(statusName);
                setGroupedCards(groupingStatusCards);
                break;
            case "User":
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
    }, [isFilter]);


    return (
        <div
            className='flex flex-col md:flex-row justify-between p-4 px-5 bg-[#f4f5f8] h-screen'
        >
            {
                cardsArray.map((item, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-4 h-auto md:h-[92vh] w-full md:w-[285px]'
                    >
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <span className={`${item === "In progress" ? '-rotate-[130deg]' : ''}`}>{getStatusIcon(item)}</span>
                                <span className='text-[#373737] font-semibold'>{item}</span>
                                <span className='text-[#808080]'>{groupedCards[item]?.length || 0}</span>
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
        </div >
    )
}

export default Hero;