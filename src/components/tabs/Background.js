import React, { Component } from "react";
import { connect } from 'react-redux'
import Photo from './Photo'

class Background extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div>
        <p>"Studying Opera gave me considerable experience with learning syntax and linguistic pattern recognition, a skill that translates beautifully to code." </p>
        <Photo/>
        <img className="logo_pic" src={require('./barnard-college-474925.jpg')}/>
        <img className="logo_pic" src={require('./fis_new_logo-1.png')}/>
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