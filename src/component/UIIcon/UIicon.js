import React, {Component} from 'react'
import {
  Grid,
  Icon,
  Header
} from "semantic-ui-react"

import './UIicon.css'

export default class UIicon extends Component {
  constructor(props)
  {
    super(props)
  }

  render()
  {
    const {icon, text, color} = this.props
    return (
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Header id="custom--icon" style={{backgroundColor: `${color}`}} block as='h3' icon={icon} content={text} />
      </div>
    )
  }

}