import React, { Component } from 'react'
import { Properties, Authenticate } from '../containers'

export default (props) => {
  return(
    <div>
        <h1>Property Dashboard</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    Activity
                </div>
                <div className="col-md-8">
                    <Properties />
                </div>
            </div>
        </div>
    </div>
  )
}

