import React from 'react';

const About = props => {
    return (
    <div>
    <div className="about-header">About Me</div>
     <div className="about">
        <div className="college">
          <img src={require('./barnard_classroom.jpg')}/>
          <p>I grew up in the suburbs of New York City, and went to Barnard College, where I studied Music and Anthropology.</p>
        </div>
        <div className="opera">
          <img src={require('./met_stage.jpg')}/>
          <p>After college, I pursued a career in opera and taught music classes to children.</p>
        </div>
        <div className="javascript">
          <img src={require('./flatiron_campus.png')}/>
          <p>In 2016, I met JavaScript and we got on like a house on fire.Javascript convinced me to change my life and become a Software Engineer.</p>
        </div>
        <div className="brooklyn">
          <img src={require('./brownstones.jpg')}/>
          <p>During that time I also moved to Brooklyn and started wearing wool knits.</p>
        </div>

        <div className="fullstackDeveloper">
          <img src={require('./coding.png')}/>
          <p>Now, I am a Fullstack developer seeking opportunities to grow and learn at a great company.</p>
        </div>
     </div>
     </div>
    );
};

export default About;



// A little over a year ago, I 
//         built the website for my business, the New York Children’s 
//         Opera Studio, and came to realize the power and necessity 
//         of beautiful and functional websites. I immediately 
//         started learning to code and from that moment decided to 
//         change my life by becoming a Software Engineer.<br/><br/>
//     In June 2017, I was accepted to the Flatiron School's 15-week, 
//     in-person web development program, where I learned Ruby on Rails, 
//     React/Redux, HTML/CSS, SQL, Postgres and MySQL. As 
//     I turned my ideas into online applications, I felt uniquely 
//     gratified, certain of my new career path. <br/><br/>
//     At Flatiron School I created a recipe 
//     generator called Find My Farmer that helps
//      people cook healthy meals using ingredients 
//      available at their local farmers market. 
//      (Click here to access a video walk-through of the product). 
//      To build Find My Farmer I used React/Redux, 
//      Ruby on Rails, Postgres and the USDA’s farmers market API.
//       I also built several other projects using that tech 
//       stack which can all be found on my GitHub page.