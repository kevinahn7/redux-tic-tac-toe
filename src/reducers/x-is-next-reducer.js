export default (state = true, action) => {
  switch(action.type){
    case 'NEXT_TURN':
      return action.stepNumber % 2 === 0;
    default:
      return state;
  }


}
