import React, { useState, useEffect } from 'react';
//import { Form, Input, Button, Checkbox } from 'antd';
import data from '../../utils/data.jsx';

// const Contact = () => {
//     const [info, setInfo] = useState(null);

//     useEffect(() => {
//         setInfo(data.info);
//     }, []);

//     return ( 
//         <>
//             <h2>Contact Us</h2>
//             {
//                 info !== null &&
//                 <div>
//                     <p>Please contact with me if any issues...</p>
//                     <p>
//                         Email - {info.email} <br />
//                         Phone No - {info.phone_no} <br />
//                     </p>
//                 </div>
//             }
//         </>
//      );
// }


// const { TextArea } = Input;

// function Contact() {
//   return (
//     <div id="contact" className="block contactBlock">
//       <div className="container-fluid">
//         <div className="titleHolder">
//           <h2>Get in Touch</h2>
//           <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
//         </div>
//         <Form
//           name="normal_login"
//           className="login-form"
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             name="fullname"
//             rules={[
//               { 
//                 required: true,
//                 message: 'Please enter your full name!' 
//               }]
//             }
//           >
//             <Input placeholder="Full Name" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             rules={[
//               {
//                 type: 'email',
//                 message: 'The input is not valid E-mail!',
//               },
//               {
//                 required: true,
//                 message: 'Please input your E-mail!',
//               },
//             ]}
//           >
//             <Input placeholder="Email Address"/>
//           </Form.Item>
//           <Form.Item
//             name="telephone"
//           >
//             <Input placeholder="Telephone" />
//           </Form.Item>
//           <Form.Item
//             name="subject"
//           >
//             <Input placeholder="Subject" />
//           </Form.Item>
//           <Form.Item
//             name="message"
//           >
//             <TextArea placeholder="Message" />
//           </Form.Item>
//           <Form.Item>
//             <Form.Item 
//               name="remember" 
//               valuePropName="checked"
//               noStyle
//               rules={[
//                 { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
//               ]}
//             >
//               <Checkbox>I agree with terms and conditions.</Checkbox>
//             </Form.Item>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="login-form-button">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>  
//   );
// }

//import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../components/Login/Contact.css';
import Navbar from './Navbar.js';
//import contactImg from '../../../Assets/contact.svg';
// import swal from 'sweetalert'
//import Fade from 'react-reveal/Fade';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    }
    return (
        <>
        <section id="contact">
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        {/* <Fade duration={2000} left> */}
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">CONTACT US</h4>
                                <h5 className="sectionTitle">GET IN TOUCH</h5>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Name" type="text" required/>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Email" type="email" required/>
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Subject" type="text" required/>
                                    </Col>
                                    <Col md={12}>
                                        <textarea placeholder="Your Message..." required></textarea>
                                    </Col>
                                </Row>
                                <button className="branBtn" type="submit">Submit Now</button>
                            </form>
                        {/* </Fade> */}
                    </Col>
                    {/* <Col md={6}>
                        <Fade duration={2000} right>
                            <img src={`${contactImg}`} alt="" className="img-fluid"/>
                        </Fade>
                    </Col> */}
                </Row>
            </Col>
        </section>
        </>
    );
};





export default Contact;