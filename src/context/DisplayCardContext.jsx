import { createContext, useState, useContext, useEffect } from 'react';

const DisplayCardContext = createContext();

const DisplayCardProvider = ({ children }) => {

    const storedCard = localStorage.getItem('isStoredCards');
    const storedFilterd = localStorage.getItem('isStoredFiltered');

    const [isCards, setIsCards] = useState(storedCard ? JSON.parse(storedCard) : false);
    const [isFilter, setIsFilter] = useState(storedFilterd ? JSON.parse(storedFilterd) : 'Status');

    const getFilter = (value) => {
        setIsFilter(value);
    }

    const value = {
        isCards,
        setIsCards,
        isFilter,
        setIsFilter,
        getFilter
    }

    useEffect(() => {
        localStorage.setItem('isStoredCards', JSON.stringify(isCards));
        localStorage.setItem('isStoredFiltered', JSON.stringify(isFilter));
    }, [isCards, isFilter]);

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