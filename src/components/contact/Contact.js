import { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { modeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const mode = useContext(modeContext);
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const darkMode = mode.state.darkMode;

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );

    if (name && email && subject && message && isValidEmail) {
      emailjs
        .sendForm(
          "service_t1poz6l",
          "template_c7yvpie",
          formRef.current,
          "user_nSvDfzE3Zj0etYWKO8d8D"
        )
        .then(
          () => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setComplete(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("handle error here and render");
    }
  };

  console.log("message", message);

  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Contact Me</h1>
        <h3>Get in touch, and lets materialize your vision!</h3>
      </div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lets discuss your project</h1>
          <p className="social-sub-heading">
            I aim to respond to all queries within 48hours. In the meantime,
            have a great day!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
            ></input>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              value={message}
            >
              {message}
            </textarea>
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
            <h2 className="social-title">Prefer social media?</h2>
            <br></br>
            <h3 className="social-sub-heading">
              No problem, click on the links below!
            </h3>
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
