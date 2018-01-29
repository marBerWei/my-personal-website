import React from "react";
 
class ContactForm extends React.Component {

  state = {
  	name: "",
  	email: "",
  	message: ""
  }

  onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    onSubmit = (e) => {
    	e.preventDefault()
    	console.log(this.state)
    	// this is where we will email the deets
    }

      render() {
        const { name, email, message } = this.state;
        console.log(this.state)
        return (
          <div >
          <form 
          action="https://formspree.io/martina.weidenbaum@gmail.com"
          method="POST">
            <input className="namebox" type="email" name="_replyto" placeholder= "your email address"/><br/>
            <input className="textbox" type="text" name="name" placeholder= "message" /><br/>
            <input className="submit" type="submit" value="Send"/>
          </form>
          
          </div>
        );
      }
  }
 
export default ContactForm

       //  <h2 className="center">Get in touch!</h2>
       //  <h3>Email</h3>
       //  <p>martina.weidenbaum@gmail.com</p>
       //  <h3>LinkedIn</h3>
       //  <p>Click <a href={'https://www.linkedin.com/in/martina-weidenbaum-36082368/'}>here</a> to send some InMail</p>
       //  <h3>gitHub</h3>
       //  <p>Check out my projects <a href={'https://github.com/marBerWei'}>here</a></p>
       // 
// <form className="form" onSubmit={this.onSubmit}>
//             <input className="namebox" type="text" placeholder= "name" name="name" value={name} onChange={this.onChange} />
//             <input className="emailbox" type="text" placeholder= "email" name="email" value={email} onChange={this.onChange} />
//             <input className="textbox" type="text" placeholder= "message" name="message" value={message} onChange={this.onChange} />
//             <input className="submit" type="submit"/> 
//           </form>