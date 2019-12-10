export const initialState = {
  todos: [
    {
      item: "learn about reducers",
      completed: false,
      id: 1
    },
    {
      item: "code some more",
      completed: false,
      id: 2
    },
    {
      item: "workout",
      completed: false,
      id: 3
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        })
      };
  }
  return state;
};
