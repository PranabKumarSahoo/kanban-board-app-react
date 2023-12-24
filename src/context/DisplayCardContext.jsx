import { createContext, useState, useContext, useEffect } from 'react';

const DisplayCardContext = createContext();

const DisplayCardProvider = ({ children }) => {

    const storedCard = localStorage.getItem('isStoredCards');
    const storedFilterd = localStorage.getItem('isStoredFiltered');
    const storedOrdered = localStorage.getItem('isStoredOrdered');
    const storedUser = localStorage.getItem('isStoredUser');


    const [isCards, setIsCards] = useState(storedCard ? JSON.parse(storedCard) : null);
    const [isFilter, setIsFilter] = useState(storedFilterd ? JSON.parse(storedFilterd) : 'Status');
    const [isOrdered, setIsOrdered] = useState(storedOrdered ? JSON.parse(storedOrdered) : 'Priority');
    const [isUser, setIsUser] = useState(storedUser ? JSON.parse(storedUser) : null);

    // console.log(isUser);

    const getFilter = (value) => {
        setIsFilter(value);
    }

    const getOrdered = (value) => {
        setIsOrdered(value);
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers'
                );
                const result = await response.json();
                setIsCards(result.tickets);
                setIsUser(result.users);
    
                // console.log('Data fetched successfully:', result);
    
                localStorage.setItem('isStoredCards', JSON.stringify(result.tickets));
                localStorage.setItem('isStoredUser', JSON.stringify(result.users));
    
                // console.log('Data stored in localStorage.');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // initial states
    const value = {
        isCards,
        setIsCards,
        isFilter,
        setIsFilter,
        isOrdered,
        setIsOrdered,
        isUser,
        setIsUser,
        getFilter,
        getOrdered
    }

    useEffect(() => {
        localStorage.setItem('isStoredCards', JSON.stringify(isCards));
        localStorage.setItem('isStoredFiltered', JSON.stringify(isFilter));
        localStorage.setItem('isStoredOrdered', JSON.stringify(isOrdered));
        localStorage.setItem('isStoredUser', JSON.stringify(isUser));
    }, [isCards, isFilter, isOrdered, isUser]);

    return (
        <DisplayCardContext.Provider value={value}>
            {children}
        </DisplayCardContext.Provider>
    );
};

const useCards = () => {
    return useContext(DisplayCardContext);
};

export { DisplayCardProvider, useCards };