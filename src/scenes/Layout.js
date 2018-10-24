import React, {Component} from 'react';
import {
    Image,
    Grid,
    Responsive
} from 'semantic-ui-react'
import { connect } from "react-redux"
import { NavLink, withRouter } from 'react-router-dom'

import UItopbar from '../component/UITopBar/UItopbar'

import AgenciesGetAction from '../action/AgenciesGet'
import AgencyAction from '../action/Agency'

function mapStateToProps(state, ownProps) {
  return {
    agencyList: state.agencyList,
    currentAgency: state.currentAgency
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getList: () => {
      dispatch(AgenciesGetAction())
    },
    AgencyAction: (x) => {
      dispatch(AgencyAction(x))
    }
  };
};

class Layout extends Component {
    componentWillMount()
    {
        this.props.getList()
    }
    render() {        
        return (
            <Grid style={{margin: 0, height: '100%'}}>
                <Grid.Row style={{padding: 0, height: 'fit-content'}}>
                    <UItopbar
                        AgencyAction={(x) => this.props.AgencyAction(x)}
                        currentAgency={this.props.currentAgency}
                        agencyList={this.props.agencyList} />
                </Grid.Row>
                <Grid.Row style={{padding: '3px', height: '90%', overflow: 'hidden'}}>
                    {this.props.children}
                </Grid.Row>
            </Grid>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))