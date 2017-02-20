import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { CreateProperty, PropertySummary, PropertyDetail } from '../view'

class Properties extends Component {

  constructor() {
    super()
    this.state = {
      property: {}
    }
  }

  componentDidMount() {
    this.props.fetchProperties(null)
  }

  propertyOnChange(key, event) {
    event.preventDefault()
    const value = event.target.value
    let updated = Object.assign({}, this.state.property)
    updated[key] = value
    this.setState({
        property: updated
    })
  }

  createProperty(event) {
    event.preventDefault()
    this.props.createProperty(this.state.property)
  }

  togglePropertyView(id){
    this.props.togglePropertyDisplayType(id)
  }

  render() {
    const propertyKeys = Object.keys(this.props.properties)
    return (
      <div>
        <h2>Properties </h2>
        {
          (this.props.properties == null || propertyKeys.length==0)
          ?
          <h4>No properties created yet</h4>
          :
          <ul style={{ 'paddingLeft': 0, 'listStyle': 'none' }}>
            {propertyKeys.map((id, i) => {
              if(this.props.properties[id].displayStyle=='Summary')
                return <li key={id}> <PropertySummary toggleDisplayType={this.togglePropertyView.bind(this)} property={this.props.properties[id]} /> </li>
              else
                return <li key={id}> <PropertyDetail toggleDisplayType={this.togglePropertyView.bind(this)} property={this.props.properties[id]} /> </li>
            })}
          </ul>
        }
        <CreateProperty createProperty={this.createProperty.bind(this)} update={this.propertyOnChange.bind(this)} submit={this.createProperty.bind(this)} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    properties: state.property
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProperties: (params) => dispatch(actions.fetchProperties(params)),
    createProperty: (params) => dispatch(actions.createProperty(params)),
    togglePropertyDisplayType: (id) => dispatch(actions.togglePropertyDisplayType(id))
  }
}

export default connect(stateToProps, dispatchToProps)(Properties)