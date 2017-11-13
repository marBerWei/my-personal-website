import React, { Component } from "react";
import { connect } from 'react-redux'

class Background extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div>
        <h2>Martina Weidenbaum</h2>
        <p> As an Opera singer and language-lover, I have considerable experience with learning syntax and linguistic pattern recognition, a skill that translates beautifully to code. Building and managing music programs from the ground up, </p>
        <p>Background stuff</p>
      </div>
    );
  }
}
 
function mapStateToProps(state){
  return {
    json:state.json
  }
}


export default connect(mapStateToProps)(Background)