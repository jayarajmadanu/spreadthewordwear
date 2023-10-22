import React, { Component } from 'react'
import CustomNavbar from './CustomNavbar'
import CardList from './CardList'

export default class Home extends Component {
  render() {
    return (
      <div>
        <CustomNavbar></CustomNavbar>
        <CardList></CardList>
      </div>
    )
  }
}
