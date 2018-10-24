const initialState = {
  error: false,
  elmt: ""
};

const error = (state = initialState, action) => {
  switch (action.type)
  {
    case 'ErrorConnectivity':
      return {
        error: true,
        elmt: state.elmt
      }
    default:
      return state;
  }
}
export default error