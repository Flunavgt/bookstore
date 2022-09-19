const ADD_BOOK = 'src/components/Books/ADD_BOOK';
const REMOVE_BOOK = 'src/components/Books/REMOVE_BOOK';

const initialState = [];

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

const addBook = (title, author, category, id) => ({
  id,
  type: ADD_BOOK,
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
