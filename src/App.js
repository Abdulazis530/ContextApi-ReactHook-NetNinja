import React from 'react';
import './App.scss';
import Booklists from './components/BookLists';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';

export default function App() {
  return (
    <div className='App' >
      <ThemeContextProvider>
        <Navbar />
        <Booklists />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  )
}