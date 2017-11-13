import React, { Component } from "react";
import { connect } from 'react-redux'

class WelcomePage extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div className="smallText">
        <h2 >Martina Weidenbaum</h2>
        <p>Fullstack Engineer with skills in React and Ruby on Rails.</p>
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

//<p>{this.props.json.basics.summary}</p>