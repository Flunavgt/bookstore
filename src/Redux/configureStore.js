import { configureStore } from '@reduxjs/toolkit';
import reduceBooks from './Books/books';
import reducercategories from './categories/categories';

const store = configureStore({
  reducer: {
    books: reduceBooks,
    categories: reducercategories,
  },
});

export default store;
