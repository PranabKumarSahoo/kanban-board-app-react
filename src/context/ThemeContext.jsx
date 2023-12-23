import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Retrieve theme mode from local storage or default to light mode
    const storedTheme = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(storedTheme ? JSON.parse(storedTheme) : false);

    // Toggle theme mode
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Update local storage when theme changes
    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };