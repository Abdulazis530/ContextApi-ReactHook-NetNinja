import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { BookContext } from '../context/BookContext'

export default function BookLists() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext)
    console.log(books)
    const theme = isLightTheme ? light : dark
    return (
        <div className="book-list" style={{ colot: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book =>
                    (<li style={{ background: theme.ui }} key={book.id}>{book.title}</li>)
                )}

            </ul>
        </div>
    )
}


/*Consume Context with class component*/

// export default class Booklists extends Component {
//     static contextType =ThemeContext ;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark
//         return (
//             <div className="book-list" style={{ colot: theme.syntax, background: theme.bg }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>the way of kings</li>
//                     <li style={{ background: theme.ui }}>the name of the winds</li>
//                     <li style={{ background: theme.ui }}> the final empire</li>
//                 </ul>
//             </div>
//         )
//     }

// }
