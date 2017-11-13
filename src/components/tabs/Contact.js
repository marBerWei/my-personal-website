import React, { Component } from "react";
 
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2 className="center">Get in touch!</h2>
        <h3>Email</h3>
        <p>martina.weidenbaum@gmail.com</p>
        <h3>LinkedIn</h3>
        <p>Click <a href={'https://www.linkedin.com/in/martina-weidenbaum-36082368/'}>here</a> to send some InMail</p>
        <h3>gitHub</h3>
        <p>Check out my projects <a href={'https://github.com/marBerWei'}>here</a></p>
       
      </div>
    );
  }
}
 
export default Contact