import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class TenantLedger extends Component{

  componentDidMount(){
    this.props.fetchRecentTransactions()//pass in tenant ID
  }  
  
  render(){
    return(
      <div>
        Account Summary
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    transactions: state.transaction                            
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchRecentTransactions: (params) => dispatch(actions.fetchRecentTransactions(params))
  }
}

export default connect(stateToProps, dispatchToProps)(TenantLedger)