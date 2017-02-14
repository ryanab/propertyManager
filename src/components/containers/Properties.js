import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { CreateProperty } from '../view'

class Properties extends Component {

    //can we set state without calling constructor

    componentDidMount(){
        this.props.fetchProperties(null)
    }

    propertyOnChange(key, event){
        const value = event.target.value
        console.log(key + ': ' + value)    
    }
    
    createProperty(params){
        //this.props.createProperty()
        console.log('TEST: Create Property' + JSON.stringify(params))
    }
    
    render(){
        return(
            <div>
                <h2>Properties </h2>
                {
                    (this.props.properties.length!=0)
                    ?
                    <ul>
                        {this.props.properties.map((property, i) => {
                            <li> {property.address} </li>
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