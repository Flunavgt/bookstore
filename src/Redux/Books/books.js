const ADD_BOOK = 'src/components/Books/ADD_BOOK';
const REMOVE_BOOK = 'src/components/Books/REMOVE_BOOK';

const initialState = [{
  id: '0',
  title: 'mi pequeno',
  author: 'ey Scott',
  category: 'fiction',
},
{
  id: '1',
  title: 'amigo',
  author: 'nita',
  category: 'action',
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          category: action.category,
          id: action.id,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

const addBook = (id, title, author, category) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
  category,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { addBook, removeBook };
export default reducer;
