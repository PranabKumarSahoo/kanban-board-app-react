import React from 'react'
import { useCards } from '../context/DisplayCardContext';

const UserProfile = ({ userId }) => {

    const { isUser } = useCards();

    const user = isUser.find((user) => user.id === userId);

    if (!user) {
        return null;
    }

    const getUserInitials = (name) => {
        const nameArray = name.split(' ');
        const initials = nameArray.map((word) => word.charAt(0).toUpperCase());
        return initials.join('');
    };

    const userNameInitials = getUserInitials(user.name);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const randomColor = getRandomColor();

    return (
        <p
            className='text-[9px] font-semibold text-white inline-flex items-center justify-center h-5 w-5 rounded-[50%]'
            style={{ backgroundColor: randomColor }}
        >
            {userNameInitials}
        </p>
    )
}

export default UserProfile;