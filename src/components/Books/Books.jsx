import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import BooksItem from '../BookItem/BooksItem';
import FormAdd from '../FormAdd/FormAdd';
import getBooks from '../../Redux/Books/api';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.books, shallowEqual);
  const listBooks = books.map((item) => (
    <BooksItem
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.author}
      category={item.category}
    />
  ));
  return (
    <div className="BooksContainer">
      <ul>
        {listBooks}
      </ul>
      <FormAdd />
    </div>
  );
};

export default Books;
