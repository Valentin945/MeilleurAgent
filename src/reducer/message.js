const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  body: "",
  isClicked: false
};

const message = (state = initialState, action) => {
  switch (action.type)
  {
    case 'SaveMessage':
      const {elmt} = action
      const {contact} = elmt
      return {
        isClicked: true,
        firstName: contact.firstname,
        lastName: contact.lastname,
        phone: contact.phone,
        email: contact.email,
        date: elmt.date,
        body: elmt.body
      }
    case 'SwipAgency':
      return {
        isClicked: false
      }
    default:
      return state;
  }
}
export default message