import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class TenantLedger extends Component{
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
    fetchRecentTransactions: (id) => dispatch(actions.fetchRecentTransactions(id))
  }
}

export default connect(stateToProps, dispatchToProps)(TenantLedger)