import React, { Component } from 'react'
import { Properties, Authenticate } from '../containers'

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Property Dashboard</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Authenticate />
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
}

export default Home