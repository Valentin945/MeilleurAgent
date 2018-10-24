import React, {Component} from 'react'
import './UIdescriptionbox.css'

import {
  Message,
  Icon,
  Grid
} from 'semantic-ui-react'

export default class UIdescriptionbox extends Component {

  render()
  {
    const {sender, email, telephone, phone} = this.props
    return (
      <Message icon={phone}>
        {phone && 
          <Icon name="mail" />
        }
        <Message.Header>
          {sender}
        </Message.Header>
        <Message.Content>
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column width={8}>
                Email:
              </Grid.Column>
              <Grid.Column width={8}>
                <span style={{color: 'blue'}}> {email} </span>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                Telephone:
              </Grid.Column>
              <Grid.Column width={8}>
                <span style={{color: 'blue'}}> {telephone} </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Message.Content>
      </Message>
    )
  }
}