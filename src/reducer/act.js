const initialState = {
  pictures: []
};

const act = (state = initialState, action) => {
  switch (action.type)
  {
    case 'ADD':
      return state.pictures.push(action.elmt)
    case 'DELETE':
      state.pictures = state.pictures.filter((x) => x.id != action.id)
      return state
    case 'GET':
      return action.data;
    default:
      return state;
  }
}
export default act