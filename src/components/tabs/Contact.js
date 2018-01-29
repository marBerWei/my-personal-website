import React, { Component } from "react";
import ContactForm from './ContactForm'
 
class Contact extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <h2 className="center">Get in touch!</h2>
        <p>martina.weidenbaum@gmail.com</p>
        <ContactForm />
      </div>
    );
  }
}
 
export default Contact

// add this once it is ready!
// <ContactForm />