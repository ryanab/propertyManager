import React, { Component } from 'react'

export default (props) => {
  return (
    <div>
      <h4>Register</h4>
      <input onChange={props.inputChange.bind(this, 'email')} type="text" placeholder="Email address"/> < br />
      <input onChange={props.inputChange.bind(this, 'password')} type="password" placeholder="Password"/> < br />
      <input onChange={props.inputChange.bind(this, 'passwordConfirm')} type="password" placeholder="Confirm Password"/> < br />
      <input onChange={props.inputChange.bind(this, 'name')} type="text" placeholder="Name"/> < br />
      <input onChange={props.inputChange.bind(this, 'phoneNumber')} type="text" placeholder="Phone Number"/> <br />
      <button onClick={props.register.bind(this)} type="submit">Register</button> < br />
    </div>
  )
}