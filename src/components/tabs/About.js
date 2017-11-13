import React from 'react';
import Photo from './Photo'

const About = props => {
	console.log(props)
    return (
      <section className="center">
      	
      	<h3>This is me and my favorite technologies. </h3>
      	<Photo/>
        <div className="techPhotos">

        	<div>
		        <img className="tech_pic" src={require('./ruby-logo.png')}/>
		        <p className="twoEm">Ruby</p>
	        </div>
	        
	        <div>
		        <img className="tech_pic" src={require('./nodejs-icon.svg')}/>
		        <p className="twoEm">JavaScript</p>
	        </div>
	        
	        <div>
		        <img className="rails_pic" src={require('./rails-logo.png')}/>
		        <p className="twoEm">Rails</p>
	        </div>

	        <div>
		        <img className="tech_pic" src={require('./react-logo.svg')}/>
		        <p className="twoEm">React</p>
	        </div>

	        <div>
		        <img className="tech_pic" src={require('./redux-logo.png')}/>
		        <p className="twoEm">Redux</p>
	        </div>

        </div>
      </section>
    );
};

export default About;