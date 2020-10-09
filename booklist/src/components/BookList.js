import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'
import BookDetail from './BookDetail'
export default function BookList() {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => (<BookDetail book={book} key={book.id} />))}
            </ul>
        </div>
    ) : (
            <div className="empty">
                No books to read, Hello free time!
            </div>
        )
}
