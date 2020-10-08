import React from 'react';
import './App.scss';
import Booklists from './components/BookLists';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';

export default function App() {
  return (
    <div className='App' >
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklists />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}