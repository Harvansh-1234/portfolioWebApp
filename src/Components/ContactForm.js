import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../CSS/Contact.scss";
import fireDb from "./firebase_config";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    }
    else {
        fireDb.database().ref().child("contacts").push(state);
        setState({ name: "", email: "", subject: "", message: "" });
        toast.success("Form Submitted Successfully");
    }

  };


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <div className='AboutMain' style={{ marginTop: "100px" }}>
        <div className='about-side'>
          <div className='aboutSide'></div>
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className='ContactForm' style={{position:"relative"}}>
        <ToastContainer style={{position:"absolute",top:"0",left:"50%",transform:"translate(-50%)"}}/>
        <div class="background">
          <div class="container2">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div class="app-contact">CONTACT INFO : +91 8959180147</div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <form  onSubmit={handleSubmit}>
                    <div class="app-form-group">
                      <input name="name" type="text" class="app-form-control" onChange={handleInputChange} placeholder="NAME" />
                    </div>
                    
                    <div class="app-form-group">
                      <input name="email" type="text" class="app-form-control" onChange={handleInputChange} placeholder="EMAIL" />
                    </div>
                    <div class="app-form-group">
                      <input type="text" name="subject" class="app-form-control" onChange={handleInputChange} placeholder="CONTACT NO" />
                    </div>
                    <div class="app-form-group message">
                      <input text='text' name="message" class="app-form-control" onChange={handleInputChange} placeholder="MESSAGE" />
                    </div>
                    <div class="app-form-group buttons">
                    <div style={{width:"175px"}} class="text-loading-mask">
                            <div style={{transitionDelay:"0.1s"}} class="text-loading-overlay"></div><a type="submit" href='#contact'
                                class="the-button call-to-button no-smoothstate open-contact"><span
                                    class="button-text"><button type="submit">Send</button></span>
                                <div class="button-mask"></div>
                            </a>
                        </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* https://assets1.lottiefiles.com/packages/lf20_hqrpwcwb.json */}
      </div>
    </>
  )
}

export default ContactForm