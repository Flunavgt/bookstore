import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addBooksApi } from '../../Redux/Books/api';

const FormAdd = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title === '' || author === '' || category === 'DEFAULT') return;
    const newBook = {
      id: nanoid(),
      title,
      author,
      category,
    };
    dispatch(addBooksApi(newBook));
    setTitle('');
    setAuthor('');
    setCategory('DEFAULT');
  };

  return (
    <form>
      <input id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input id="author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option disabled value="DEFAULT"> -- select an option -- </option>
        <option value="Fiction">Fiction</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <button onClick={handleAdd} type="button">Add Book</button>
    </form>
  );
};

export default FormAdd;
