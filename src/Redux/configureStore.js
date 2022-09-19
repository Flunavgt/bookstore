import { configureStore } from '@reduxjs/toolkit';
import reduceBooks from './Books/books';
import reducercategories from './categories/categories';

const store = configureStore({
  reducer: {
    book: reduceBooks,
    categories: reducercategories,
  },
});

export default store;
