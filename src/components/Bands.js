import React, { Component } from 'react'
//import {connect} from 'react-redux'

//renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band}/> )

const Bands = (props)  => {
    return(
      <div>
        {props.bandsNames.map((band, id) => {
          return (<li key={id}> {band} </li>)
        })}
      </div>
    )
  }

  export default Bands