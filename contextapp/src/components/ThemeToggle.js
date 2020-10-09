import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>
                Toggle the theme
            </button>
        </div>
    )
}
