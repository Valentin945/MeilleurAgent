import React, {Component} from 'react'
import {
  Responsive,
  Grid,
  Icon
} from 'semantic-ui-react'

import UIicon from "../UIIcon/UIicon"
import UIdropbox from "../UIDropBox/UIdropbox"

import './UItopbar.css'


export default class UItopbar extends Component
{

  render()
  {
    const {currentAgency, agencyList} = this.props
    return (
        <Grid id="background--blue" colums={16}>
            <Grid.Row style={{display: 'flex', padding: "0"}} >
              <Grid.Column style={{display: 'flex', justifyContent: "center"}} width={3}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                  <Icon.Group>
                    <Icon style={{color: 'white'}} size='big' color='white' name='search' />
                    <Icon style={{color: 'white', left: '35%', top: '38%'}} size='small' name='home' />
                  </Icon.Group>
                </div>
                <div style={{flexDirection: "column", display: "flex", justifyContent: 'center', color: "white"}}>
                  <h3> MeilleursAgents PRO</h3>
                </div>
              </Grid.Column>
              <Grid.Column style={{display: 'flex'}} width={3}>
                <UIicon color="green" text={currentAgency.unread} icon="envelope outline" />
              </Grid.Column>
              <Grid.Column style={{display: 'flex', flexDirection: 'row-reverse', padding: '0'}} width={10}>
                <UIdropbox 
                  AgencyAction={(x) => this.props.AgencyAction(x)}
                  image={currentAgency.logo}
                  name="Didier Martin"
                  agence={currentAgency.name}
                  agencyList={agencyList}
                />
              </Grid.Column>
            </Grid.Row>
          <Responsive>

          </Responsive>
        </Grid>
    )
  }
}