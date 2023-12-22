import { createContext, useState, useContext, useEffect } from 'react';

const DisplayCardContext = createContext();

const DisplayCardProvider = ({ children }) => {

    const storedCard = localStorage.getItem('isStoredCards');
    const storedFilterd = localStorage.getItem('isStoredFiltered');
    const storedUser = localStorage.getItem('isStoredUser');

    const [isCards, setIsCards] = useState(storedCard ? JSON.parse(storedCard) : false);
    const [isFilter, setIsFilter] = useState(storedFilterd ? JSON.parse(storedFilterd) : 'Status');
    const [isUser, setIsUser] = useState(storedUser ? JSON.parse(storedUser) : false);

    const getFilter = (value) => {
        setIsFilter(value);
    }

    // initial states
    const value = {
        isCards,
        setIsCards,
        isFilter,
        setIsFilter,
        isUser,
        setIsUser,
        getFilter
    }

    useEffect(() => {
        localStorage.setItem('isStoredCards', JSON.stringify(isCards));
        localStorage.setItem('isStoredFiltered', JSON.stringify(isFilter));
        localStorage.setItem('isStoredUser', JSON.stringify(isUser));
    }, [isCards, isFilter, isUser]);

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