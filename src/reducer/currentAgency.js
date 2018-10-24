const initialState = {
  name: "",
  unread: 0,
  logo: "",
  id: -1
};

const currentAgency = (state = initialState, action) => {
  switch (action.type)
  {
    case 'AgencyList':
      if (action.elmt.size !== 0)
      {
        const firstAgency = action.elmt[Object.keys(action.elmt)[0]]
        return ({
            name: firstAgency["name"],
            unread: firstAgency["unread_messages"],
            logo: firstAgency["logo"],
            id: firstAgency["id"]
        })
      }
      else
      {
        return state
      }
    case 'SwipAgency':
      return ({
        name: action.elmt.name,
        unread: action.elmt.unread_messages,
        logo: action.elmt.logo,
        id: action.elmt.id
      })
    case 'MessageRead':
      state.unread -= 1
      return  {
        name: state.name,
        unread: state.unread,
        logo: state.logo,
        id: state.id
      }
    default:
      return state;
  }
}
export default currentAgency