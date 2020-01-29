// Add BandInput component
import React, { Component } from 'react';
// import { connect } from 'react-redux';

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleOnchange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.props.addBand(e, this.state)}>
          <input 
            type="text"
            onChange={this.handleOnchange}
            value={this.state.name}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
