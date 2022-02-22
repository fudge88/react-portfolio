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

  const [validateName, setValidateName] = useState({});
  const [validateEmail, setValidateEmail] = useState({});
  const [validateSubject, setValidateSubject] = useState({});
  const [validateMessage, setValidateMessage] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = formValidation();
    console.log(isValid);
    if (isValid) {
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

  const formValidation = () => {
    const validateName = {};
    const validateEmail = {};
    const validateSubject = {};
    const validateMessage = {};
    let isValid = true;

    if (!name.trim()) {
      validateName.noName = "Name is required";
      isValid = false;
    }

    const isValidEmail =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

    if (!email) {
      validateEmail.noEmail = "Email is required";
      isValid = false;
    } else if (!email.match(isValidEmail)) {
      validateEmail.incorrectEmail = "Please input a valid email address";
      isValid = false;
    } else {
      isValid = true;
    }

    if (!subject.trim()) {
      validateSubject.noSubject = "Subject is required";
      isValid = false;
    } else {
      isValid = true;
    }

    if (message.length < 20) {
      validateMessage.messageShort =
        "Please give a short description of your project";
      isValid = false;
    } else {
      isValid = true;
    }

    if (!message.trim()) {
      validateMessage.noMessage = "Message is required";
      isValid = false;
    } else {
      isValid = true;
    }

    setValidateName(validateName);
    setValidateEmail(validateEmail);
    setValidateSubject(validateSubject);
    setValidateMessage(validateMessage);
    return isValid;
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
                setName(event.target.value);
              }}
            ></input>
            {Object.keys(validateName).map((key) => {
              return <div>{validateName[key]}</div>;
            })}
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
            {Object.keys(validateSubject).map((key) => {
              return <div>{validateSubject[key]}</div>;
            })}

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
            {Object.keys(validateEmail).map((key) => {
              return <div>{validateEmail[key]}</div>;
            })}

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
            {Object.keys(validateMessage).map((key) => {
              return <div>{validateMessage[key]}</div>;
            })}
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
              rel="noreferrer"
            >
              <i class="icon ion-social-github"></i>&nbsp; Visit my Github
            </a>
            <a
              className="contact-info-item"
              href="https://www.linkedin.com/in/f-akhlaq/"
              target="_blank"
              rel="noreferrer"
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
