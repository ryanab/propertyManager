import React, { Component } from 'react'

export default (props) => {
  
  return (
    <div>
      <h4>Create New Property</h4>
      <input type="text" placeholder="Address" onChange={props.update.bind(this, 'address')}/> < br />
      <input type="text" placeholder="City" onChange={props.update.bind(this, 'city')}/> < br />
      <input type="text" placeholder="State" onChange={props.update.bind(this, 'state')}/> < br />
      <input type="text" placeholder="Zip" onChange={props.update.bind(this, 'zip')}/> < br />
      <button onClick={props.submit.bind(this)}>Create Property</button>
    </div>
  )
}