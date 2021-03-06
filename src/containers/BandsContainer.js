import React, { Component } from 'react'
import {connect} from 'react-redux'
import Bands from '../components/Bands'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  //renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band}/> )

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bandsNames={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)


// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
// })

// export default connect(null, mapDispatchToProps)(BandInput)