import React, { createContext, useState } from 'react';
import { v4 } from 'uuid'

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
        { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    ])

    const addBook = (title, author) => {
        setBooks([
            ...books,
            { title, author, id: v4() }
        ])
    }

    const removeBook = (boookId) => {
        setBooks(
            books.filter(book => book.id !== boookId)
        )
    }
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children}
        </BookContext.Provider>
    )
}
