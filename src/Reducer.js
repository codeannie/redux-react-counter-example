import { INCREMENT, DECREMENT } from '../src/Actions';

const initialState = {
  count: 0
};

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
    console.log('increment!');
      return {
        count: state.count + 1
      };
    case DECREMENT:
    console.log('decrement!');
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default Reducer;