import React from 'react'

const ToolBar = () => {
	let html = "<HTML/>"
	let js = "{JavaScript}"
    return (
     <div className="toolBar">
      <div className="toolContainer">
        <img className="tool" src={require('./tabs/rails-logo.png')}/>
      </div>
      <div className="toolContainer">
        <img className="tool" src={require('./tabs/react-logo-dark.svg')}/>
      </div>
      <div className="toolContainer"> 
        <img className="tool" src={require('./tabs/redux-logo.png')}/>
      </div>
      <div className="toolContainer">
        <img className="tool" src={require('./tabs/github.svg')}/>
      </div>
     </div>
    );
}

export default ToolBar