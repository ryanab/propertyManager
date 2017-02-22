import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class TenantLedger extends Component{

  componentDidMount(){
    //this.props.fetchRecentTransactions({tenant: this.props.user.id}) 
    this.props.fetchRecentTransactions({tenant: '58a5efb3c8d85e594db46150'}) // using hard coded ID for now; as we are moving auth flow to Home
  }
  
  componentDidUpdate(){
  }
  
  render(){
    return(
      <div>
        Account Summary
        {
          (this.props.user == null || this.props.transactions[this.props.user.id]==null)?
          <h3>No transactions found</h3>
          :
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.transactions[this.props.user.id].map((transaction, i)=>{
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        }
        
        
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    transactions: state.transaction,
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    testDataHelper: (path, params) => dispatch(actions.testDataHelper(path, params)),
    fetchRecentTransactions: (params) => dispatch(actions.fetchRecentTransactions(params)),
  }
}

export default connect(stateToProps, dispatchToProps)(TenantLedger)