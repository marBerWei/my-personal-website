import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return(

		
		<div className = "homepage">
			<div className="homeText">
				<div>
					<p>"Studying Opera gave me experience 
					with linguistic pattern recognition, 
					a skill that translates beautifully to code." 
					</p>
				</div>
				<div className="aboutNav">
					<Link to="/about" className="aboutButton">More About Me</Link>
				</div>
			</div>
		</div>
	

	)
}

export default Home