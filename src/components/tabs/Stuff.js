import React, { Component } from "react";
 
class Stuff extends React.Component {
  render() {
    return (
      <div>
        <h2>Here is some stuff I made</h2><br/>
        
        <ol>
          <h3><li>Find My Farmer - Github | Demo</li></h3>
          <p>A recipe generator that gives users recipes based on ingredients available at their nearest farmer’s markets</p>

          <h3><li>New York Times Archive Searcher - Github | Demo</li></h3>
          <p>Created a NYTimes archive checker based on any given date. Go ahead and try it out!</p>

          <h3><li>Flatiron Feedback - Github | Demo</li></h3>
          <p>Built a feedback form for students and teachers to use at Flatiron School </p>

        </ol>
      </div>
    );
  }
}
 
export default Stuff