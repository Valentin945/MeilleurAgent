import React, {Component} from 'react'
import {
  Card, 
  Icon,
  Grid
} from "semantic-ui-react"
import "./UImessagebox.css"

export default class UImessagebox extends Component
{
  render()
  {
    const {icon,
           sender,
           email,
           phone,
           hour,
           text,
           meta,
           description,
           read,
           onClick } = this.props
    const realDescription = description.length > 100? description.substring(0, 100) + "...": description
    const color = this.props.icon? "blue" : 'grey'
    const rotated = icon === "phone"? "clockwise": ""
    return (
      <Card.Group itemsPerRow={1} style={{margin: '0'}} onClick={() => onClick()}>
        <Card style={{margin: "0", padding: '10px 2px 10px 2px'}}>
          <Card.Content style={{margin: "0", padding: '0'}}>
            <Card.Header style={{display: 'flex'}}>
              <Grid style={{margin: "0", padding: '0', width: '100%'}} columns={16}>
                <Grid.Row style={{padding: "5px 3px 2px 3px"}} >
                  <Grid.Column id="message-box-item" width={2}>
                    {
                      read === false?
                      <Icon
                        rotated={rotated}
                        style={{color: 'blue'}}
                        name={icon}
                        size="small" />
                      :
                      <Icon
                        rotated={rotated}
                        disabled
                        name={icon}
                        size="small" />
                    }
                  </Grid.Column>
                  <Grid.Column id='message-box-item' width={10}>
                    <div style={{display: 'flex'}}>
                      <h3> {sender} </h3>
                    </div>
                  </Grid.Column>
                  <Grid.Column id='message-box-item' width={4}>
                    <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                      <span style={{fontSize: '12px', color: `${color}`}}> {hour} </span>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card.Header>
            <Grid style={{margin: "0", padding: '0', width: '100%'}} columns={16}>
              <Grid.Row style={{padding: "5px 3px 2px 3px"}} >
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column id="message-box-item" width={14}>
                  <Card.Meta style={{display: 'flex', color: 'black'}} >
                    <span> {meta} </span>
                  </Card.Meta>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid style={{margin: "0", padding: '0', width: '100%'}} columns={16}>
            <Grid.Row style={{padding: "5px 3px 2px 3px"}} >
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column id="message-box-item" width={14}>
                  <Card.Description style={{color: 'rgba(0,0,0,.4)'}}>
                    {realDescription}
                  </Card.Description>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}