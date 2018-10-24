const initialState = []
const messageList = (state = initialState, action) => {
  switch (action.type)
  {
    case "MessageList":
      return action.elmt
    case "MessageListAdd":
      return state.concat(action.elmt)
    case "MessageRead":
      return state.map((message) => {
        message.id === action.elmt? message.read = 0: {}
        return message
      })
    default:
      return state;
  }
}
export default messageList
