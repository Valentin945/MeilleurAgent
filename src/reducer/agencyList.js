const initialState = []

const agencyList = (state = initialState, action) => {
  switch (action.type)
  {
    case 'AgencyList':
      let res = []
      for (let tmp in action.elmt)
      {
        res.push(action.elmt[tmp])
      }
      return res
    default:
      return state;
  }
}
export default agencyList