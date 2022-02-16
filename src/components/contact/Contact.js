import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { modeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);
  const mode = useContext(modeContext);
  const darkMode = mode.state.darkMode;

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
          <h2 className="contact-desc">
            Get in touch, and lets materialize your vision!
          </h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            ></input>
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
            ></textarea>
            <button className="btn">
              <span>Submit</span>
            </button>
            {complete && (
              <div className="submitMessage">
                Thank you for getting in Touch!
              </div>
            )}
          </form>
        </div>
        <div className="contact-right">
          <div className="heading-right">
            <h2 className="">Prefer social media?</h2>
            <h3 className="">No problem, click on the links below!</h3>
          </div>
          <div className="info-link-container">
            <a
              className="contact-info-item"
              href="./assets/download/cv.pdf"
              download="cv.pdf"
              target="_blank"
            >
              <i class="ionicons ion-android-download"></i>&nbsp; Download
              Resume
            </a>
            <a className="contact-info-item" href="mailto:f.akhlaq@outlook.com">
              <i class="ionicons ion-ios-email"></i>&nbsp; Email me directly
            </a>
            <a
              className="contact-info-item"
              href="https://github.com/fudge88"
              target="_blank"
            >
              <i class="icon ion-social-github"></i>&nbsp; Visit my Github
            </a>
            <a
              className="contact-info-item"
              href="https://www.linkedin.com/in/f-akhlaq/"
              target="_blank"
            >
              <i class="icon ion-social-linkedin"></i>&nbsp; Visit my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
