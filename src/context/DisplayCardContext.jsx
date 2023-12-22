import { createContext, useState, useContext, useEffect } from 'react';

const DisplayCardContext = createContext();

const DisplayCardProvider = ({ children }) => {

    const storedCard = localStorage.getItem('isStoredCards');
    
    const [isCards, setIsCards] = useState(storedCard ? JSON.parse(storedCard) : false);

    const value = {
        isCards,
        setIsCards
    }

    useEffect(() => {
        localStorage.setItem('isStoredCards', JSON.stringify(isCards));
    }, [isCards]);

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