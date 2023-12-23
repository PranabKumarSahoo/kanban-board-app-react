import { createContext, useState, useContext, useEffect } from 'react';

const DisplayCardContext = createContext();

const DisplayCardProvider = ({ children }) => {

    const storedCard = localStorage.getItem('isStoredCards');
    const storedFilterd = localStorage.getItem('isStoredFiltered');
    const storedOrdered = localStorage.getItem('isStoredOrdered');
    const storedUser = localStorage.getItem('isStoredUser');

    console.log(storedUser);

    const [isCards, setIsCards] = useState(storedCard ? JSON.parse(storedCard) : false);
    const [isFilter, setIsFilter] = useState(storedFilterd ? JSON.parse(storedFilterd) : 'Status');
    const [isOrdered, setIsOrdered] = useState(storedOrdered ? JSON.parse(storedOrdered) : 'Priority');
    const [isUser, setIsUser] = useState(storedUser ? JSON.parse(storedUser) : []);

    const getFilter = (value) => {
        setIsFilter(value);
    }

    const getOrdered = (value) => {
        setIsOrdered(value);
    }

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