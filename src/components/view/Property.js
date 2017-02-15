import React, { Component } from 'react'

export default (props) => {
  return(
      <div style={{'backgroundColor':'#F9F9F9', 'marginBottom': 5, 'border': '1px solid black'}}>
        { props.property.address } <br />
        { props.property.city } <br />
        { props.property.state } <br />
        { props.property.zip } <br /><br />
      </div>
    )
}