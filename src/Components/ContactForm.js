// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
// import "../CSS/Contact.scss";
// import fireDb from "./firebase_config";
// function ContactForm() {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [data, setData] = useState({});
//   const { name, email, subject, message } = state;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !subject || !message) {
//       toast.error("Please provide value in each input field");
//     }
//     else {
//       if (!id) {
//         fireDb.database().ref().child("contacts").push(state);
//       setState({ name: "", email: "", subject: "", message: "" });
//       toast.success("Form Submitted Successfully");
//       } else {
//         fireDb.database().ref().child(`contacts/${id}`).set(state);
//       setState({ name: "", email: "", subject: "", message: "" });
//       toast.success("Form Updated Successfully");
//       }
//     }

//   };

//   var currenturl = window.location.search;
//   var currenturlsearch = new URLSearchParams(currenturl);
//   var id = currenturlsearch.get("id");
//   console.log(id)
//   useEffect(() => {
//     fireDb.database().ref().child('contacts').on("value", (snapshot) => {
//       if (snapshot.val() !== null) {
//         setData({ ...snapshot.val() });
//         console.log(snapshot.val())
//       }
//       else {
//         setData({});
//       }

//     })
//     return () => {
//       setData({});
//     }
//   }, [id])

//   useEffect(() => {
//     if (id) {
//       setState({ ...data[id] })
//     }
//     else {
//       setState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       })
//     }
//     return () => {
//       setState({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       })
//     }
//   }, [id, data])

//   const handleInputChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
//   return (
//     <section className="contact-section">
//       <Container>
//         <ToastContainer position="top-center" />
//         <Row>
//           <Col md={10}>
//             <div className="wrContactformer">
//               <div className="row no-gutters">
//                 <Col md={6}>
//                   <div className="contact-wrap p-lg-5 p-4" style={{width:'100%'}}>
//                     <h3 className="mb-4">Send us a message</h3>
//                     <form
//                       id="contactForm"
//                       className="contactForm"
//                       onSubmit={handleSubmit}
//                     >
//                       <Row>
//                         <Col md={12}>
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="name"
//                               placeholder="Name"
//                               onChange={handleInputChange}
//                               value={name || ""}
//                             />
//                           </div>
//                         </Col>
//                         <Col md={12}>
//                           <div className="form-group">
//                             <input
//                               type="email"
//                               className="form-control"
//                               name="email"
//                               placeholder="Email"
//                               onChange={handleInputChange}
//                               value={email || ""}
//                             />
//                           </div>
//                         </Col>
//                         <Col md={12}>
//                           <div className="form-group">
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="subject"
//                               placeholder="Subject"
//                               onChange={handleInputChange}
//                               value={subject || ""}
//                             />
//                           </div>
//                         </Col>
//                         <Col md={12}>
//                           <div className="form-group">
//                             <textarea
//                               type="text"
//                               className="form-control"
//                               name="message"
//                               placeholder="Message"
//                               cols="30"
//                               rows="6"
//                               onChange={handleInputChange}
//                               value={message || ""}
//                             ></textarea>
//                           </div>
//                         </Col>
//                         <Col md={12}>
//                           <div className="form-group">
//                             <input
//                               type="submit"
//                               value={id ? "Update" : "Send message"}
//                               className="btn btn-primary"
//                             />
//                           </div>
//                         </Col>
//                       </Row>
//                     </form>
//                   </div>
//                 </Col>
//                 <Col md={6} style={{display:"flex",alignItems:"stretch"}}>
//                   <div className="info-wrap w-100 p-lg-5 p-4 img" style={{width:"100%"}}>
//                     <h3>Contact us</h3>
//                     <p mb={4}>
//                       We're open for any suggestion or just to have a chat
//                     </p>
//                     <div className="dbox w-100 d-flex align-items-start" style={{display:"flex",alignItems:"flex-start",}}>
//                       <div className="icon d-flex align-items-center justify-content-center"style={{display:"flex",alignItems:"flex-center",justifyContent:"center"}}>
//                         <span className="fa fa-map-marker"></span>
//                       </div>
//                       <div className="text pl-3">
//                         <p>
//                           <span>Address:</span> 198 South block sector 7 21 Street New Delhi
//                         </p>
//                       </div>
//                     </div>
//                     <div className="dbox w-100 d-flex align-items-center" style={{display:"flex",alignItems:"center",}}>
//                       <div className="icon d-flex align-items-center justify-content-center" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
//                         <span className="fa fa-phone"></span>
//                       </div>
//                       <div className="text pl-3">
//                         <p>
//                           <span>Phone:</span>
//                           <a href="tel://+8976543499" className="Hover">+8976543499</a>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="dbox w-100 d-flex align-items-center"style={{display:"flex",alignItems:"center",}}>
//                       <div className="icon d-flex align-items-center justify-content-center" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
//                         <span className="fa fa-paper-plane"></span>
//                       </div>
//                       <div className="text pl-3">
//                         <p>
//                           <span>Email:</span>
//                           <a href="mailto:website20@gmail.com" className="Hover">
//                             website20@gmail.com
//                           </a>
//                         </p>
//                       </div>
//                     </div>
//                     <div className="dbox w-100 d-flex align-items-center"style={{display:"flex",alignItems:"center"}}>
//                       <div className="icon d-flex align-items-center justify-content-center"style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
//                         <span className="fa fa-globe"></span>
//                       </div>
//                       <div className="text pl-3">
//                         <p>
//                           <span>Website:</span>
//                           <a href="#" className="Hover">website.com</a>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Col>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default ContactForm;
import { LottiePlayer } from "lottie-react";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import "../CSS/Contact.scss";
import fireDb from "./firebase_config";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [data, setData] = useState({});
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
                      <button type='submit' class="app-form-button">SEND</button>
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