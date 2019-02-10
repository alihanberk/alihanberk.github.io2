import state from './state';

const initialState = state;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        [action.payload.key]: action.payload.data
      };
    default:
      return state;
  }
};