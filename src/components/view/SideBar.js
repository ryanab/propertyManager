import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="page-sidebar-wrapper">

        <div className="page-sidebar navbar-collapse collapse">
            <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{paddingTop: '20px'}}>

                <li className="sidebar-toggler-wrapper hide">
                    <div className="sidebar-toggler">
                        <span></span>
                    </div>
                </li>
                <li className="sidebar-search-wrapper">
                    <form className="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                        <a href="javascript:;" className="remove">
                            <i className="icon-close"></i>
                        </a>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <a href="javascript:;" className="btn submit">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                </li>
                <li className="heading">
                    <h3 className="uppercase">Features</h3>
                </li>
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-diamond"></i>
                        <span className="title">My Info</span>
                        <span className="arrow"></span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-diamond"></i>
                        <span className="title">Payment History</span>
                        <span className="arrow"></span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="javascript:;" className="nav-link nav-toggle">
                        <i className="icon-diamond"></i>
                        <span className="title">Chat</span>
                        <span className="arrow"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}