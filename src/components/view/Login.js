import React, { Component } from 'react'

export default (props) => {
  return (
    <div>
      <h4>Login</h4>
      <input onChange={props.inputChange.bind(this, 'email')} type="text" placeholder="Email address"/> < br />
      <input onChange={props.inputChange.bind(this, 'password')} type="password" placeholder="Password"/> < br />
      <button onClick={props.login.bind(this)} type="submit">Login</button> < br />
    </div>
  )
}