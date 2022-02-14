import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_t1poz6l",
        "template_c7yvpie",
        formRef.current,
        "user_nSvDfzE3Zj0etYWKO8d8D"
      )
      .then(
        (result) => {
          console.log(result.text);
          setComplete(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lets discuss your project</h1>
          <div className="contact-info">
            <div className="info-item">
              <b>Phone:</b> 07507292214
            </div>
            <div className="info-item">
              <b>Email:</b>f.akhlaq@outlook.com
            </div>
            <div className="info-item">
              <b>GitHub:</b>github.com/fudge88
            </div>
            <div className="info-item">
              <b>LinkedIn:</b>linkedin.com/in/f-akhlaq/
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            Get in touch, and lets materialize your vision!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"></input>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input type="text" placeholder="Email" name="user_email"></input>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button className="btn">
              <span>Submit</span>
            </button>
            {complete && <div>Thank you for getting in Touch!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
