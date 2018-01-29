import React, { Component } from "react";
 
class Stuff extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Here is some stuff I made</h2><br/>
        
          <h3>Find My Farmer</h3>
          <iframe 
            width="600" 
            height="328" 
            src="https://www.youtube.com/embed/uGJX-uxnX9A" 
            frameborder="0" 
            allowfullscreen>
          </iframe><br/><br/><br/><br/>

          <h3>Picsty</h3>
          <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/WeS_gwIzzAg" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe><br/><br/><br/><br/>

          <h3>New York Times Archive Searcher</h3>
          <iframe 
            width="600" 
            height="328" 
            src="https://www.youtube.com/embed/-Xn7iRw_e0A" 
            frameborder="0" 
            allowfullscreen>
          </iframe>

      </div>
    );
  }
}
 
export default Stuff

// <p>A recipe generator that gives users recipes based on ingredients available at their nearest farmer’s markets</p>
          // <h3><li>Flatiron Feedback - Github | Demo</li></h3>
          // <p>Built a feedback form for students and teachers to use at Flatiron School </p>
// <p>Created a NYTimes archive checker based on any given date. Go ahead and try it out!</p>