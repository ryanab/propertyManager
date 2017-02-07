import React, { Component } from 'react'

class CreateProperty extends Component {
  
  componentDidMount(){
    this.props.createProperty('best test')
  }
  
  render(){
    return(
      <div>
        <h4>Create New Property</h4>
      </div>
    )
  }
}

export default CreateProperty