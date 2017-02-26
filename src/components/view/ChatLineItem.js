import React, { Component } from 'react'

export default (props) => {
  let message = props.message
  //li className is in or out based on tenant vs property manager
  return(
    <li className="out">
        <img className="avatar" alt="" src="../assets/layouts/layout/img/avatar2.jpg" />
        <div className="message">
            <span className="arrow"> </span>
            <a href="javascript:;" className="name"> {message.tenant} </a>
            <span className="datetime"> at {message.timestamp} </span>
            <span className="body"> {message.content} </span>
        </div>
    </li>
  )
}