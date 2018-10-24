import React, {Component} from 'react'
import {
  Card
} from "semantic-ui-react"

import './UImessage.css'

export default class UImessage extends Component
{
  constructor(props)
  {
    super(props)
  }
  
  render()
  {
    const {sender, date, body} = this.props
    return (
      <Card.Group id="UIMessageCard" itemsPerRow={1}>
        <Card style={{margin: '0'}}>
          <Card.Content>
            <Card.Header>{sender}</Card.Header>
            <Card.Meta>{date}</Card.Meta>
            <Card.Description>
              {body}
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}