const requestMessageCurrentAction = (elmt) => ({type: "SaveMessage", elmt})

const receiveMessageCurrentAction = (elmt) => {
  return {type: "MessageRead", elmt}
}

const MessageCurrentAction = (elmt) => {
  return (dispatch, getState) => {
    dispatch(requestMessageCurrentAction(elmt.message))
    !elmt.message.read &&
      fetch('http://localhost:5001/realtors/' + elmt.currentAgency + '/messages/' + elmt.message.id, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({read: 1})
      }).then((response) => {
          dispatch(receiveMessageCurrentAction(elmt.message.id))
        })
  }
}

export default MessageCurrentAction