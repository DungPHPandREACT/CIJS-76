export const countReducer = (state, action) => {
  const { type, step } = action;
  switch (type) {
    case 'INCREMENT': {
      console.log('INCREMENT');
      console.log('state: ', state);
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
