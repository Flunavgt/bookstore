import React, { useState } from 'react';

const FormAdd = () => {
  const [input] = useState();
  const [author] = useState();
  return (
    <form>
      <input id="title" type="text" placeholder="Title" value={input} />
      <input id="author" type="text" placeholder="Author" value={author} />
      <select>
        <option value="fiction">Fiction</option>
        <option value="action">Action</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default FormAdd;
