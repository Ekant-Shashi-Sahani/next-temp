import React, { createContext, ReactNode } from 'react'
interface ThemeContextType{
    theme:string;
    setTheme:(theme:string)=>void;
}
const ThemeContext=createContext<ThemeContextType| undefined>(undefined);
interface ThemeProviderProps{
    children:ReactNode;
}
export const ThemeProvider:React.FC<ThemeProviderProps>=({children})=> {
  return (
    <div>ThemeProvider</div>
  )
}

