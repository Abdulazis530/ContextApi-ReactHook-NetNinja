import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export default function Navbar() {
    const { books } = useContext(BookContext)
    console.log(books)
    return (
        <div className="navbar">
            <h1>Azis's reading list</h1>
            <p>Currently you have {books.length} books to get through...</p>
        </div>
    )
}
