import React, { Component } from "react";
import { connect } from 'react-redux'

class Background extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div>
        <h2>Martina Weidenbaum</h2>
        <p> Full stack web developer with experience in Ruby and JavaScript frameworks. Studying Opera gave me considerable experience with learning syntax and linguistic pattern recognition, a skill that translates beautifully to code. Building and managing music programs from the ground up, I bring excellent leadership skills to a team. After dedicating my life to connecting people through music, I am excited to use my technical skills to connect people through technology.  </p>
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