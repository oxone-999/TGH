const bookmarksList = [];

const bookmarks = (state = bookmarksList, action) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookmarks;
