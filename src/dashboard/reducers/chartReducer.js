import initialState from '../initialState';

/*
  Chart Reducer.
*/
const chartReducer = (state=initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'UPDATE':{
      return action.payload;
    }
    default:{
      return state;
    }
  }
}
export default chartReducer;
