import React, {Component} from 'react';
import {
    Image,
    Grid
} from 'semantic-ui-react'
import { connect } from "react-redux"

import UImessage from "../component/UIMessage/UImessage"
import UIdescriptionbox from '../component/UIDescriptionBox/UIdescriptionbox'

function mapStateToProps(state, ownProps) {
  return {
    message: state.message
  }
}

class MobileMessage extends Component {
    constructor(props)
    {
      super(props)
      this.dateConverter = this.dateConverter.bind(this)
    }

    dateConverter(date)
    {
      var regex = /\s?([T:])\s?/
      let result = date.split(regex)
      let fulldate = result[0]
      let hour = result[2]
      let minute = result[4]
      let fullDatesub = fulldate.split('-')
      let year = fullDatesub[0]
      let month = fullDatesub[1]
      let day = fullDatesub[2]
      return day + "/" + month + "/" + year + " à " + hour + " " + minute
    }

    render() {
      const {message} = this.props
      return (
          <Grid style={{margin: "0"}}>
            <Grid.Row style={{padding: '0', display: 'flex', justifyContent: 'center'}}>
              <UIdescriptionbox
                sender={message.firstName + " " + message.lastName}
                email={message.email}
                telephone={message.phone}
                />
            </Grid.Row>
            <Grid.Row style={{padding: '30px 10px', height: '100%'}}>
              <UImessage
                  sender={message.firstName + " " + message.lastName}
                  date={this.dateConverter(message.date)}
                  body={message.body}
                  />
            </Grid.Row>
          </Grid>
      );
    }
}

export default connect(mapStateToProps)(MobileMessage)