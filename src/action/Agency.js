const receiveAgencyAction = (elmt, response) => {
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

const receiveAgencyActionMessage = (elmt) => {
  return ({
    type: 'MessageList',
    elmt
  })
}

const requestAgencyAction = (elmt) => ({ type: 'SwipAgency', elmt })

const addAgencyAction = (elmt) => {
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

const AgencyAction = (agency) => {
  return (dispatch, getState) => {
    dispatch(requestAgencyAction(agency))
    fetch('http://localhost:5001/realtors/' + agency.id + '/messages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((response) => {
      response.json().then((res) => {
        dispatch(receiveAgencyActionMessage(res))
        let counter = 2
        paginationLoop(dispatch, "http://localhost:5001/realtors/" + agency.id, counter)
      })
    })

  }
}

export default AgencyAction