'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  // ui states
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSound, setIsSound] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [targetPage, setTargetPage] = useState(null);
  const [showContentSlider, setShowContentSlider] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [visitedPagesCounter, setVisitedPagesCounter] = useState(0);

  // opens nav
  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  // music on/off
  const toggleMusic = () => {
    setIsSound((prevIsSound) => !prevIsSound);
  };

  // nav decides wich content to slide
  const handleTargetPage = (pageName) => {
    setIsNavOpen(false);
    setTargetPage(pageName);
    setActiveSection(pageName);
    setVisitedPagesCounter((prevCounter) => {
      if (pageName === targetPage) {
        return prevCounter;
      } else {
        return pageName === 'HOME' ? 0 : prevCounter + 1;
      }
    });
    
  };

  // setting the slider behaviour
  useEffect(() => {
    if (visitedPagesCounter === 1) {
      setShowContentSlider(true)
    } else if (visitedPagesCounter > 1){
      setShowContentSlider(false)
      setTimeout(() => setShowContentSlider(true), 600)
    } else {
      setShowContentSlider(false)
    }
  }, [visitedPagesCounter]);

  // api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
          // console.log('Data is ready!')
        } else {
          console.error('API request failed:', response.status);
        }
      } catch (error) {
        console.error('API request failed:', error);
      }
    };
    fetchData();
  }, []);

  // state values
  let sharedState = {
    apiData,
    isNavOpen,
    toggleNav,
    isSound,
    toggleMusic,
    targetPage,
    handleTargetPage,
    showContentSlider,
    activeSection,
    visitedPagesCounter,
  }
  

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}