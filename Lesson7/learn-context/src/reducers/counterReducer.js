export const countReducer = (state, action) => {
  const { type, step } = action;
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        number: state.number + step,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        number: state.number - step,
      };
    }
    default:
      return state;
  }
};
