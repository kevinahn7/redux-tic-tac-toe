export default (state = {xIsNext: true}, action) => {
  let newState;
  console.log(action);
  switch(action.type){
    case 'NEXT_TURN':
      let newState = Object.assign({}, state, {
        xIsNext: action.stepNumber % 2 === 0
      });
      return newState;
    default:
      return state;
  }


}
