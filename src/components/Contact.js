import React, {Component} from "react";
import emailjs from "emailjs-com";
import {createGlobalStyle} from 'styled-components';
import {Spring} from 'react-spring/renderprops'
import {StyledFormWrapper, StyledForm, StyledButton, StyledError, StyledInput, StyledTextArea, StyledTextAreaSubject, ButtonSet, Modal} from "./assets/StyledContactForm.js";
import './assets/Contact.scss';

// If you need anything for this ask Ram Reddy.

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-color: #293241;
    font-family: Poppins, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

class ContactForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      error:'',
      show:false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleNameChange(event) {
    this.setState({ 
      name: event.target.value 
    });
  }

  handleEmailChange(event) {
    this.setState({ 
      email: event.target.value 
    });
  }

  handleSubjectChange(event) {
    this.setState({ 
      subject: event.target.value 
    });
  }

  handleMessageChange(event) {
    this.setState({ 
      message: event.target.value 
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var i = 0;
    for (let key in this.state) {
      if (this.state[key] === '' && i<4) {
        this.setState({error: `You must provide a ${key}`});
        return
      }
      i++;
    }
    this.setState({error: ``});


    emailjs.sendForm('service_5ggwj8d', 'template_jirc6zm', event.target, 'user_XtSzEFFNtc4C6IEpGN9JS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();

    this.showModal()
  }

  scrollDown(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    });
    
  }

  render() {

    return (
      <>
      <body className="contact-main">
        <GlobalStyle />
        <StyledFormWrapper id="backUp">
          <StyledForm onSubmit={this.handleSubmit}>
            <h2 className="header">Contact Us</h2>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              name="name"
              onChange={this.handleNameChange}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              onChange={this.handleEmailChange}
            />
            <label htmlFor="subject">Subject</label>
            <StyledTextAreaSubject
              name="subject"
              onChange={this.handleSubjectChange}
            />
            <label htmlFor="message">Message</label>
            <StyledTextArea
              name="message"
              onChange={this.handleMessageChange}
            />
            <StyledError>
              <p>{this.state.error}</p>
            </StyledError>
            
            <div className="button-container">
              <StyledButton type="submit" className="button-submit">Send Message</StyledButton>
            </div>
          </StyledForm>
        </StyledFormWrapper>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>We have recieved your message!</h1>
          <h2>You will recieve an email from us shortly.</h2>
          <h2>Below are the details you have submitted:</h2>
          <h3>Name: {this.state.name}</h3>
          <h3>Email: {this.state.email}</h3>
          <p>Subject: {this.state.subject}</p>
          <p>Message: {this.state.message}</p>
        </Modal>
      </body>
      <div className="buttonSet" id="goHere">
          <Spring
          from= {{ opacity: 0 }}
          to={{opacity: 1}}
          config = {{delay: 1000}}
          >
            { props=> (
              <div style={props}>
                <a href="https://www.linkedin.com/in/potentia-robotics-790582204/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
                <a href="https://www.youtube.com/channel/UCKzWtwtWSejKt9THR_XlU7Q" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"></a>
                <a href="https://github.com/PotentiaRobotics" target="_blank" rel="noopener noreferrer" className="fa fa-github"></a>
                <a href="https://www.instagram.com/potentiarobotics/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
                <a href="https://www.facebook.com/potentiarobotics/" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
              </div>
            )}
          </Spring>
        </div>
        <div className="bottom">

        </div>
      </>
  );
  }
}


export default ContactForm;