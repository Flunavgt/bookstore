import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addBooksApi } from '../../Redux/Books/api';
import './FormAdd.css';

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
    <div className="footarea">
      <h2>ADD NEW BOOK</h2>
      <form className="formAdd">
        <input className="formTitle" id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="formAuthor" id="author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
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
    </div>
  );
};

export default FormAdd;
