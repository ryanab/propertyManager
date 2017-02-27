import React, { Component } from 'react'
import { ChatLineItem } from '../view'
import actions from '../../actions'
import { connect } from 'react-redux'

class ChatHistory extends Component{
  constructor(){
    super()
    this.state = {
      message: {}
    }
  }

  componentDidMount(){
    this.props.fetchMessages({tenant: this.props.user.id})
  }

  inquiryOnChange(key, event){
    event.preventDefault()
    let updated = Object.assign({}, this.state)
    updated[key] = event.target.value
    this.setState({
      message: updated
    })
  }
  
  submitInquiry(event){
    event.preventDefault()
    let updated=Object.assign({}, this.state.message)
    //tenant content subject category
    updated.tenant = this.props.user.id
    let creator = {
      id: this.props.user.id,
      imageUrl: this.props.user.imageUrl,
      name: this.props.user.name
    }
    updated.creator = creator
    this.props.submitMessage(updated)
  }

  render(){

    let messages = this.props.messages[this.props.user.id] //need to change later to current user
    return(
        <div className="col-lg-12 col-xs-12 col-sm-12">
            <div className="portlet light bordered" >
                <div className="portlet-title">
                    <div className="caption">
                        <i className="icon-bubble font-hide hide"></i>
                        <span className="caption-subject font-hide bold uppercase">Message History</span>
                    </div>
                    <div className="actions">
                        <div className="portlet-input input-inline">
                            <div className="input-icon right">
                                <i className="icon-magnifier"></i>
                                <input type="text" className="form-control input-circle" placeholder="search..." /> </div>
                        </div>
                    </div>
                </div>
                <div className="portlet-body" id="chats" >
                    <div className="scroller" data-always-visible="1" data-rail-visible1="1">
                            { (messages==null) ? <div>No message history</div> :
                              <ul className="chats" style={{overflow:'scroll'}}>
                                {
                                  messages.map((message, i)=>{            
                                    return <ChatLineItem key={message.id} message={message}/> 
                                  })
                                }
                              </ul>
                            }
                    </div>
                    <div className="chat-form">
                      <div className="input-cont">
                        <input onChange={this.inquiryOnChange.bind(this, 'content')} className="form-control" type="text" placeholder="Type a message here..." />
                      </div>
                      <div className="btn-cont">
                        <span className="arrow"> </span>
                          <a href="" onClick={this.submitInquiry.bind(this)} className="btn blue icn-only">
                              <i className="fa fa-check icon-white"></i>
                          </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user,
    messages: state.message
  }
}

const dispatchToProps = (dispatch) => {
  return {
    submitMessage: (params) => dispatch(actions.submitMessage(params)),
    fetchMessages: (params) => dispatch(actions.fetchMessages(params))
  }
}
export default connect(stateToProps, dispatchToProps)(ChatHistory)