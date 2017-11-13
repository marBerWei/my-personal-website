import React, { Component } from "react";
import { connect } from 'react-redux'

class WelcomePage extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div className="smallText">
        <h2 >Martina Weidenbaum</h2>
        <p>{this.props.json.basics.summary}</p>
      </div>
    );
  }
}
 
function mapStateToProps(state){
  return {
    json:state.json
  }
}


export default connect(mapStateToProps)(WelcomePage)