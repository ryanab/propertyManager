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
    //this.props.fetchRecentTransactions({tenant: this.props.user.id}) 
    this.props.fetchMessages({tenant: '58a5efb3c8d85e594db46150'})
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
    updated.tenant = '58a5efb3c8d85e594db46150'
    //updated.tenant = this.props.user.id
    updated.category = 'general'
    this.props.submitMessage(updated)
  }

  render(){
    let messages = this.props.messages['58a5efb3c8d85e594db46150'] //need to change later to current user
    return(
        <div className="col-lg-12 col-xs-12 col-sm-12">
            <div className="portlet light bordered">
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
                <div className="portlet-body" id="chats">
                    <div className="scroller" style={{height: '525px'}} data-always-visible="1" data-rail-visible1="1">
                            { (messages==null) ? <div>No message history</div> :
                              <ul className="chats">
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