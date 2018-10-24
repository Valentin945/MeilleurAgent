import React, {Component} from 'react'
import {
  Grid,
  Image, 
  Dropdown
} from 'semantic-ui-react'

import './UIdropbox.css'

export default class UIdropbox extends Component
{

  constructor(props)
  {
    super(props)
    this.displayList = this.displayList.bind(this)
  }

  displayList()
  {
    const {agencyList} = this.props
    let newList = []
    let counter = 0
    if (agencyList)
    {
      newList = agencyList.map((x) => {
        counter++
        return (
          <Dropdown.Item
            onClick={() => this.props.AgencyAction(x)}
            key={counter}
            text={x.name} />
        )
      })
    }
    return newList
  }

  render()
  {
    const {image, name, agence} = this.props
    const tab = this.displayList()
    return (
      <div style={{display: 'flex', flexDirection: 'row-reverse', borderLeft: '1px solid white', backgroundColor: '#0c0e96', padding: '5px'}}>
        <div style={{display: 'flex', flexDirection: 'column', color: 'white', justifyContent: 'center'}}>
            <Dropdown direction="left">
              <Dropdown.Menu>
                {tab}
              </Dropdown.Menu>
            </Dropdown>
        </div>
        <div id="UIdropbox-agence" style={{ flexDirection: 'column'}}>
          <div>
            <span style={{color: 'white'}}> {name} </span>
          </div>
          <div>
            <strong style={{color: 'white'}}> {agence} </strong>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
          <Image avatar src={image} />
        </div>
      </div>
    )
  }
}