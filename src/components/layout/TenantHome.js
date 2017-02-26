import React, { Component } from 'react'
import { TenantLedger, TenantRepairs, Authenticate, ChatHistory } from '../containers'
import {TopBar, SideBar } from '../view'

export default (props) => {
  return (
        <div className="page-wrapper">    
          < TopBar />
            <div className="clearfix"> </div>
            <div className="page-container" style={{marginTop: 50}}>
              <SideBar />
                <div className="page-content-wrapper">
                    <div className="page-content">
                        <h1 className="page-title"> My Account </h1>
                          <div className="row">
                            <ChatHistory />
                          </div>
                    </div>
                </div>
            </div>
        </div>
  )
}