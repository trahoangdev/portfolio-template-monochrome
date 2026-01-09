import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { LAYOUT } from '../config/constants';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [theme, setTheme] = useState('dark');

    const changeTabActive = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    const changeTheme = useCallback((newTheme) => {
        setTheme(newTheme);
    }, []);

    const sections = React.useRef({});

    const registerSection = useCallback((id, ref) => {
        sections.current[id] = ref;
    }, []);

    const scrollToSection = useCallback((id) => {
        const element = sections.current[id]?.current;
        if (element) {
            const headerOffset = LAYOUT.SCROLL_OFFSET;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, []);

    const value = useMemo(() => ({
        activeTab,
        changeTabActive,
        theme,
        changeTheme,
        registerSection,
        scrollToSection
    }), [activeTab, theme, changeTabActive, changeTheme, registerSection, scrollToSection]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
