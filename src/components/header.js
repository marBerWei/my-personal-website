import React from 'react'
import Nav from './Nav'
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';

const Header = () => {
	return(
		<div>
		
		<div className = "nameContainer">
			<div className="name">
				<div className="mainName"> Martina Weidenbaum</div>
				<span><div className="subName"> 
				Software Engineer
				</div>
					<a href="https://github.com/marBerWei" className="icons"><FaGithubSquare/></a>
					<a href="https://www.facebook.com/martina.weidenbaum" className="icons"><FaFacebookOfficial/></a>
					<a href="https://www.instagram.com/martina625/?hl=en" className="icons"><FaInstagram/></a>
				</span>
			</div>
			<Nav/>
		</div>

		</div>
	)
}

export default Header