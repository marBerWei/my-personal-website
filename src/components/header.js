import React from 'react'
import Nav from './Nav'

const Header = () => {
	return(
		<div>
		
		<div className = "nameContainer">
			<div className="name">
				<div className="mainName"> Martina Weidenbaum</div>
				<div className="subName"> Software Engineer</div>
			</div>
			<Nav/>
		</div>

		</div>
	)
}

export default Header