import { useContext, useEffect, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { modeContext } from "../../context";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const formRef = useRef();
  const mode = useContext(modeContext);
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const darkMode = mode.state.darkMode;

  useEffect(async () => {
    if (Object.keys(formErrors).length === 0) {
      await emailjs.sendForm(
        "service_t1poz6l",
        "template_c7yvpie",
        formRef.current,
        "user_nSvDfzE3Zj0etYWKO8d8D"
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setComplete(true);
    } else {
      console.log("handle error here and render");
    }
  }, [formErrors]);

  const handleSubmit = (event) => {
    event.preventDefault();

    formValidation();
  };

  const formValidation = () => {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );

    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (email && !emailRegex.test(email)) {
      errors.email = "Please input a valid email address";
    }

    if (!subject) {
      errors.subject = "Subject is required";
    }

    if (!message) {
      errors.message = "Message is required";
    }

    if (message && message.length < 10) {
      errors.message = "Please give a short description of your project";
    }

    setFormErrors(errors);
  };

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
                setName(event.target.value.trim());
              }}
            ></input>
            {formErrors.name && <div>{formErrors.name}</div>}
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
                setSubject(event.target.value.trim());
              }}
            ></input>
            {formErrors.subject && <div>{formErrors.subject}</div>}
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
                setEmail(event.target.value.trim());
              }}
            ></input>
            {formErrors.email && <div>{formErrors.email}</div>}
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows="5"
              placeholder="Message"
              name="message"
              onChange={(event) => {
                setMessage(event.target.value.trim());
              }}
              value={message}
            >
              {message}
            </textarea>
            {formErrors.message && <div>{formErrors.message}</div>}
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
              <DownloadIcon /> &nbsp;Download Resume
            </a>
            <a className="contact-info-item" href="mailto:f.akhlaq@outlook.com">
              <EmailIcon />
              &nbsp; Email me directly
            </a>
            <a
              className="contact-info-item"
              href="https://github.com/fudge88"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              &nbsp; Visit my Github
            </a>
            <a
              className="contact-info-item"
              href="https://www.linkedin.com/in/f-akhlaq/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              &nbsp; Visit my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
