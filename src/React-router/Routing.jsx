import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from './BookLayout'
import NotFound from "./pages/NotFound";
import BookRoutes from "./pages/BookRoutes";

const Routing = () => {
    return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nesting routes */}
        {/*outlet pastes the child wherever it is, in this case book layout */}
        {/* <Route path="/books" element={ <BookLayout/> }> */}
        {/* si un ruta esta renderizando varias rutas debe tener la * */}
        <Route path="/books/*" element={ <BookRoutes/> }>

        </Route>


        {/* despues del : vienen los argumentos que se esperan
        <Route path="/books" element={<BookList />}>
        <Route path='/books/:id' element={ <Book /> }/>
        <Route path='/books/new' element={ <NewBook /> }/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
