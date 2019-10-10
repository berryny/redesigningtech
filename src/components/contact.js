import React from 'react';
import SocialMedia from '../components/socialmedia';

function Contact() {
  return (
    <div id="contact">
      <section className="jumbotron text-center text-white bg-dark">
        <div className="container">
          <h1 className="jumbotron-heading">Get in Touch!</h1>
          <p>I am looking forward to hearing from you!</p>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Want to collaborate?</h5>
            <p><a rel="noopener noreferrer" href="mailto:info@redesigningtech.com" target="_blank">info@redesigningtech.com</a> <br/>New York City, NY</p>
          </div>
          <div className="col">
            <h5>Want to say hi?</h5>
            <p><a rel="noopener noreferrer" href="tel:+13479948830" target="_blank">+1-347-994-8830</a></p>
          </div>
          <div className="col">
            <h5>Want to digitally connect?</h5>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
console.log('contact');

export default Contact;
