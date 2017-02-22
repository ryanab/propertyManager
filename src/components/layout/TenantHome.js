import React, { Component } from 'react'
import { TenantLedger, TenantRepairs, Authenticate } from '../containers'

export default (props) => {
  return (
    <div>
      TENANT HOME
      <Authenticate />
      <TenantLedger />
      <TenantRepairs />
    </div>
  )
}