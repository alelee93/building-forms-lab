// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventdefaut()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form>
          <input 
            type="text"
            value= {this.state.name}
            onChange = {this.handleOnChange}
            />
          <input type="submit"/>
        </form>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(null, mapDispatchToProps)(BandInput)
