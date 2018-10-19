
const reducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_USER_ID": {
        return state = {userId : action.userId} 
      }
      default :
        return state;
    }
}

export default reducer;