import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class TenantRepairs extends Component{
  
  componentDidMount(){
    this.props.fetchRecentTransactions()
  }
  
  render(){
    return(
      <div>
        Submit Repair Ticket
      </div>
    )
  }
}