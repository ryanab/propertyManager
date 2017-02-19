import React, { Component } from 'react'
import { Login, Register } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Authenticate extends Component{

  constructor(){
    super()
    this.state = {
      credentials: {}
    }
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
    .then(()=>{
      console.log('test')
    })
    .catch(()=>{
      console.log('error')
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
    register: (credentials) => dispatch(actions.register(credentials))
  }
}

export default connect(stateToProps, dispatchToProps)(Authenticate)