import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <li>{band}</li>)

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    bands: state.bands
  }
}
export default connect(mapStateToProps)(BandsContainer)
