import React from 'react'

const Photo = props => {
	return(
		<figure >
		  <img className="profile_pic photoShadow" src={require('./profilePic.jpg')}/>
		</figure>
	)
}

export default Photo

// <figcaption className="figCaption">Martina Weidenbaum <br/> Software Engineer </figcaption>

// <div className="photoDiv"><Photo /></div>