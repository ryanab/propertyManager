import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
import { Inquiry } from '../view'

class TenantLedger extends Component{

  constructor(){
    super()
    this.state = {
      message: {}
    }
  }

  componentDidMount(){
    //this.props.fetchRecentTransactions({tenant: this.props.user.id}) 
    this.props.fetchRecentTransactions({tenant: '58a5efb3c8d85e594db46150'}) // using hard coded ID for now; as we are moving auth flow to Home
  }

  inquiryOnChange(key, event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.message)
    updated[key] = event.target.value
    this.setState({
      message: updated
    })
  }
  
  submitInquiry(event){
    event.preventDefault()
    let updated=Object.assign({}, this.state.message)
    //tenant content subject category
    updated.tenant = this.props.user.id
    updated.category = 'billing'
    this.props.submitMessage(updated)
  }

  render(){
    //Split Messages; Ledger' Inquirty into seperate components
    return(
      <div>
        Account Summary
        {
          (this.props.user == null || this.props.transactions[this.props.user.id]==null) ?
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
        <div>
          <h5>Questions?  Submit account inquiry below</h5>
          <input type="text" placeholder="Subject" onChange={this.inquiryOnChange.bind(this, 'subject')} /> <br />
          <textarea onChange={this.inquiryOnChange.bind(this, 'content')} placeholder={'I have a question regarding my account'}/> <br />
          <button onClick={this.submitInquiry.bind(this)} >Submit Inquiry</button>
        </div>
        {
          (this.props.user==null || this.props.messages[this.props.user.id]==null) ?
          <h3>No message history found</h3>
          :
          <ol>
          {
            this.props.messages[this.props.user.id].map((message, i) => {
              return (
                <li key={message.id} > {message.subject}</li>
              )
            })
          }
          </ol>
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    transactions: state.transaction,
    user: state.account.user,
    messages: state.message
  }
}

const dispatchToProps = (dispatch) => {
  return {
    testDataHelper: (path, params) => dispatch(actions.testDataHelper(path, params)),
    fetchRecentTransactions: (params) => dispatch(actions.fetchRecentTransactions(params)),
    submitMessage: (params) => dispatch(actions.submitMessage(params)),
    fetchMessages: (params) => dispatch(actions.fetchMessages(params))
  }
}

export default connect(stateToProps, dispatchToProps)(TenantLedger)