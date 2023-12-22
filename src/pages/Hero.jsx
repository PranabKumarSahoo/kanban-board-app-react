import React, { useEffect } from 'react'
import Card from '../components/Card';
import { useCards } from '../context/DisplayCardContext';

const Hero = () => {

    const { isCards, setIsCards } = useCards();

    console.log(isCards);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers'
                );
                const result = await response.json();
                setIsCards(result.tickets);
                // setUsers(result.users);
                // console.log(result.tickets);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between p-4 px-5 bg-[#f4f5f8] h-screen'>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-400'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-300'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-500'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-200'></div>
            <div className='h-auto md:h-[92vh] w-full md:w-[285px] bg-red-100'></div>
        </div>
    )
}

export default Hero;