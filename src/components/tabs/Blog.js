import React, { Component } from "react";
import { connect } from 'react-redux'

class Blog extends React.Component {

  render() {
    console.log(this.props.json.basics.summary)
    return (
      <div>

        <h2>Blog Posts</h2>
        <ol>
          <p><li>Post</li></p>
          <p><li>Post</li></p>
          <p><li>Post</li></p>
          <p><li>Post</li></p>
        </ol>
      </div>
    );
  }
}
 
function mapStateToProps(state){
  return {
    json:state.json
  }
}


export default connect(mapStateToProps)(Blog)