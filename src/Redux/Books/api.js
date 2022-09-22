import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_ARR_BOOK, ADD_BOOK, REMOVE_BOOK } from './books';

const uniqueID = '0SV0H4lQFXgLbpqrXfhm';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${uniqueID}/books/`;

const getBooks = createAsyncThunk(
  ADD_ARR_BOOK,
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const newArray = Object.keys(data).map((id) => {
      const obj = data[id][0];
      obj.id = id;
      return obj;
    });
    return newArray;
  },
);

export const addBooksApi = createAsyncThunk(
  ADD_BOOK,
  async (newBook) => {
    await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${newBook.id}`,
        title: `${newBook.title}`,
        author: `${newBook.author}`,
        category: `${newBook.category}`,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return newBook;
  },
);

export const deleteBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await fetch(`${baseUrl}${id}`, { method: 'DELETE' });
    return id;
  },
);

export default getBooks;
