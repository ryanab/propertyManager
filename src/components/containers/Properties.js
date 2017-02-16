import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { CreateProperty, Property } from '../view'

class Properties extends Component {

    constructor(){
        super()
        this.state = {
            property: {}
        }
    }
    
    componentDidMount(){
        this.props.fetchProperties(null)
    }

    propertyOnChange(key, event){
        event.preventDefault()
        const value = event.target.value
        let updated = Object.assign({}, this.state.property)
        updated[key] = value
        this.setState({
            property: updated    
        })
    }
    
    createProperty(event){
        event.preventDefault()
        this.props.createProperty(this.state.property)
    }
    
    render(){
        return(
            <div>
                <h2>Properties </h2>
                {
                    (this.props.properties.length!=0)
                    ?
                    <ul style={{'paddingLeft': 0, 'listStyle': 'none'}}>
                        {this.props.properties.map((property, i) => {
                            return <li key={property.id}> <Property property={property} /> </li>
                        })}
                    </ul>
                    :
                    <h4>No properties created yet</h4>
                }
                <CreateProperty createProperty={this.createProperty.bind(this)} update={this.propertyOnChange.bind(this)} submit={this.createProperty.bind(this)}/>
            </div>
        )
    }
}

const stateToProps = (state) =>{
    return {
        properties: state.property.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        fetchProperties: (params) => dispatch(actions.fetchProperties(params)),
        createProperty: (params) => dispatch(actions.createProperty(params))
    }
}

export default connect(stateToProps, dispatchToProps)(Properties)