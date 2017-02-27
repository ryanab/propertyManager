import React, { Component } from 'react'

export default (props) => {
  let message = props.message
  let inOrOut = (message.tenant == message.creator.id) ? "in" : "out"
  return(
    <li className={inOrOut}>
        <img className="avatar" alt="" src={message.creator.imageUrl}/>
        <div className="message">
            <span className="arrow"> </span>
            <a href="javascript:;" className="name"> {message.creator.name} </a>
            <span className="datetime"> at {message.timestamp} </span>
            <span className="body"> {message.content} </span>
        </div>
    </li>
  )
}