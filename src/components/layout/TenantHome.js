import React, { Component } from 'react'
import { TenantLedger, TenantRepairs } from '../containers'

export default (props) => {
  return (
    <div>
      TENANT HOME
      <TenantLedger />
      <TenantRepairs />
    </div>
  )
}