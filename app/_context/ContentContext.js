'use client'

import {createContext, useState, useContext, useEffect} from 'react';

const ContentContext = createContext();

export const ContentProvider = ({children}) => {
  const [content, setContent] = useState({
    textContent: '',
    isLoading: false,
    error: ''
  });

  return(
    <ContentContext.Provider value={{content, setContent}}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext);