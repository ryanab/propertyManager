import React, { Component } from 'react'
import { Login, Register } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'
import { browserHistory } from 'react-router'

class Authenticate extends Component{

  constructor(){
    super()
    this.state = {
      credentials: {}
    }
  }
  
  componentDidMount(){
    this.props.fetchCurrentUser()
  }
  
  componentDidUpdate(){
  }
  
  onChildInputChange(key, event){
    event.preventDefault()
    const value = event.target.value
    let updated = Object.assign({}, this.state.credentials)
    updated[key] = value
    this.setState({
      credentials: updated
    })
  }

  login(event){
    event.preventDefault()
    this.props.login(this.state.credentials)
    .then((response)=>{
      browserHistory.push('/home')
    })
    .catch((error)=>{
      alert(error.message)
    })
  }

  //add error handling, password confirms, etc.
  register(event){
    event.preventDefault()
    this.props.register(this.state.credentials)
  }

  render(){
    return(
      <div>
        <Register inputChange={this.onChildInputChange.bind(this)} register={this.register.bind(this)} />
        <Login inputChange={this.onChildInputChange.bind(this)} login={this.login.bind(this)} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(actions.login(credentials)),
    register: (credentials) => dispatch(actions.register(credentials)),
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser())
  }
}

export default connect(stateToProps, dispatchToProps)(Authenticate)