import React, {Component} from 'react';
import {
    Grid
} from 'semantic-ui-react'

import { connect } from "react-redux"

import UImessage from "../component/UIMessage/UImessage"
import UImessagebox from "../component/UIMessageBox/UImessagebox"
import UIdescriptionbox from '../component/UIDescriptionBox/UIdescriptionbox'


import MessageCurrentAction from '../action/MessageCurrent.js'

import '../style/HomePage.css'


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    MessageCurrentAction: (elmt) => {
      dispatch(MessageCurrentAction(elmt))
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    currentAgency: state.currentAgency,  
    messageList: state.messageList,
    message: state.message
  }
}

class HomePage extends Component {

    constructor(props)
    {
        super(props)
        this.constructMessageList = this.constructMessageList.bind(this)
        this.handleHour = this.handleHour.bind(this)
        this.dateConverter = this.dateConverter.bind(this)
    }

    handleHour(realdate)
    {
        var regex = /\s?([T:])\s?/
        let result = realdate.split(regex)
        let fulldate = result[0]
        let hour = result[2]
        let minute = result[4]
        let fullDatesub = fulldate.split('-')
        let year = fullDatesub[0]
        let month = fullDatesub[1]
        let day = fullDatesub[2]
        let date = new Date()
        if (year === date.getFullYear()
            && month === date.getMonth()
            && day === date.getDay())
        {
            return hour + ":" + minute
        }
        else
        {
            return day + "/" + month + "/" + year
        }
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

    constructMessageList()
    {
        const {messageList, currentAgency} = this.props
        let newList = []
        let counter = 0
        messageList.forEach((x) => {
            const {contact} = x
            const newDate = this.handleHour(x.date)
            switch (x.type)
            {
                case "phone":
                  newList.push(
                    <UImessagebox
                        onClick={() => this.props.MessageCurrentAction({message: x, currentAgency: currentAgency.id})}
                        key={counter}
                        id={x.id}
                        icon="phone"
                        sender={contact.firstname + " " + contact.lastname + " " + contact.phone}
                        hour={newDate}
                        meta='Appel téléphonique depuis MeilleursAgents'
                        description={x.body}
                        read={true}
                         />
                  )
                  break
                case "email":
                  newList.push(
                    <UImessagebox
                        onClick={() => this.props.MessageCurrentAction({message: x, currentAgency: currentAgency.id})}
                        key={counter}
                        id={x.id}
                        icon={x.read === false? "mail": "envelope open outline"}
                        sender={contact.firstname + " " + contact.lastname}
                        hour={newDate}
                        meta='Message sur votre vitrine MeilleursAgents'
                        description={x.body}
                        read={x.read}
                         />
                  )
                  break
                default:
                newList.push(
                    <UImessagebox
                        onClick={() => this.props.MessageCurrentAction({message: x, currentAgency: currentAgency.id})}
                        key={counter}
                        id={x.id}
                        icon="comment"
                        hour={newDate}
                        sender={contact.firstname + " " + contact.lastname}
                        meta='Message sur votre vitrine MeilleursAgents'
                        description={x.body}
                        read={x.read}
                         />
                )
            }
            counter++
        });
        return newList
    }

    render() {
        const list = this.constructMessageList()
        const {message} = this.props
        return (
            <Grid columns={16} id="homepage-grid" style={{marginLeft: '0'}} >
                <Grid.Row style={{padding: '0px'}}>
                    <Grid.Column id="invisible-scrollbar" style={{overflowY: "auto", padding: "3px"}} computer={5} mobile={16}>
                        {list}
                    </Grid.Column>
                    {message.isClicked && 
                        <Grid.Column  style={{padding: "3px"}} computer={11} mobile={16}>
                            <Grid.Row style={{padding: '0'}}>
                                <UIdescriptionbox
                                sender={message.firstName + " " + message.lastName}
                                email={message.email}
                                telephone={message.phone}
                                />
                            </Grid.Row>
                            <Grid.Row style={{padding: '30px 0', height: '100%'}}>
                                <UImessage
                                    sender={message.firstName + " " + message.lastName}
                                    date={this.dateConverter(message.date)}
                                    body={message.body}
                                    />
                            </Grid.Row>
                        </Grid.Column>
                    }
                </Grid.Row>
            </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)