const STATUS_CHECKED = 'src/components/categories/CHECKED';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKED: {
      return 'Under Construction';
    }

    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

export default reducer;
