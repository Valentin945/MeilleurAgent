const receiveAgenciesGetAction = (elmt, response) => {
  if (response.status == 200) {
    return ({
      type: 'AgencyList',
      elmt
    })
  }
  else {
    return ({
      type: 'ErrorConnectivity',
      elmt
    })
  }
}

const receiveAgenciesGetActionMessage = (elmt) => {
  return ({
    type: 'MessageList',
    elmt
  })
}

const requestAgenciesGetAction = (elmt) => ({ type: 'PENDING' })

const addAgenciesGetAction = (elmt) => {
  return {
    type: 'MessageListAdd',
    elmt
  }
}

const paginationLoop = (dispatch, url, counter) => {
  fetch( url + `/messages?page=${counter}`  , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }).then((response) => {
    response.json().then((res) => {
      if (res.length != 0)
      {
        dispatch(addAgenciesGetAction(res))
        paginationLoop(dispatch, url, ++counter)
      }
    })
  })
}

const AgenciesGetAction = () => {
  return (dispatch, getState) => {
    dispatch(requestAgenciesGetAction())
    fetch('http://localhost:5001/realtors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((response) => {
      response.json().then((res) => {
        dispatch(receiveAgenciesGetAction(res, response))
        const firstAgency = res[Object.keys(res)[0]]
        fetch('http://localhost:5001/realtors/' + firstAgency["id"]+ '/messages', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        }).then((response) => {
          response.json().then((res) => {
            dispatch(receiveAgenciesGetActionMessage(res))
          })
        })
        let counter = 2
        paginationLoop(dispatch, "http://localhost:5001/realtors/" + firstAgency["id"], counter)
      })
    })
  }
}

export default AgenciesGetAction