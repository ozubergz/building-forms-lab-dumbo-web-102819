import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  renderBandsList = () => {
    return this.props.bands.map(band => <li>{band.name}</li>)
  }

  addBand = (e, formData) => {
    e.preventDefault();
    this.props.addBand(formData)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        {this.renderBandsList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({type: 'ADD_BAND', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
