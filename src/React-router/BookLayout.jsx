import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({n:3})
  // const [number, setNumber] = useState()
  const number = searchParams.get('n')
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">Add new book</Link>
      <br />
      {/* <Link to={`/books/${number}`}>Book {number}</Link> */}
      <Outlet/>
      <input 
        type='number'
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
      />
    </>
  );
};

export default BookLayout
