import React from 'react';
import Photo from './Photo'

const About = props => {
	console.log(props)
	let html = "<HTML/>"
	let js = "{JavaScript}"
    return (
     <div>
      <div className="center">
      	<h3 className="aboutHeading">These are a few of my favorite things... </h3>
      </div><br/>
      
	        <h3 className="html">{html}</h3>
	     	<h3 className="css">CSS: 100%</h3>
	        <h3 className="js">{js}</h3>
	        <h3 className="ruby">def ruby end</h3>
	      	<br/>
	        <div>
		        <img className="rails_pic" src={require('./rails-logo.png')}/>
		        <img className="tech_pic" src={require('./react-logo-dark.svg')}/>
		        <img className="tech_pic" src={require('./redux-logo.png')}/>
		        <img className="tech_pic" src={require('./github.svg')}/>
	        </div>
	        
     </div>
    );
};

export default About;




// <div>
// 		        <img className="tech_pic" src={require('./ruby-logo.png')}/>
// 		        <p className="twoEm">Ruby</p>
// 	        </div>
	        
// 	        <div>
// 		        <img className="tech_pic" src={require('./nodejs-icon.svg')}/>
// 		        <p className="twoEm">JavaScript</p>
// 	        </div>
	        
// 	        <div>
// 		        <img className="rails_pic" src={require('./rails-logo.png')}/>
// 		        <p className="twoEm">Rails</p>
// 	        </div>

// 	        <div>
// 		        <img className="tech_pic" src={require('./react-logo.svg')}/>
// 		        <p className="twoEm">React</p>
// 	        </div>

// 	        <div>
// 		        <img className="tech_pic" src={require('./redux-logo.png')}/>
// 		        <p className="twoEm">Redux</p>
// 	        </div>