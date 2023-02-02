import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Book from "./Book";
import NewBook from "./NewBook";
import BookList from "./BookList";
import BookLayout from '../BookLayout';

const BookRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<BookLayout/>}>
            <Route index element={ <BookList />} />
            <Route path=":id" element={ <Book />} />
            <Route path="new" element={ <NewBook />} />
        </Route>
      
    </Routes>
    </>
  )
}

export default BookRoutes
