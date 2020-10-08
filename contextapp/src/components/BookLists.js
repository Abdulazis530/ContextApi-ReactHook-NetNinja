import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export default class Booklists extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark
        return (
            <div className="book-list" style={{ colot: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the winds</li>
                    <li style={{ background: theme.ui }}> the final empire</li>
                </ul>
            </div>
        )
    }

}