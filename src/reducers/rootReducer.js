function rootReducer(state = { json: ''}, action) {
  switch (action.type) {
    case "ADD_JSON":
      return Object.assign({}, state, {json: action.payload})
    default:
      return state
  }
}

export default rootReducer
