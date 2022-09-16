import React, { useState } from 'react';
import BooksItem from '../BookItem/BooksItem';
import FormAdd from '../FormAdd/FormAdd';

const Books = () => {
  const [books] = useState([{ id: '0', title: 'Alien', author: 'Ridley Scott' },
    { id: '1', title: 'Mi pequeno amigo', author: 'La Juanita' }]);

  const listBooks = books.map((item) => (
    <BooksItem
      key={item.id}
      id={item.id}
      title={item.title}
      author={item.author}
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
