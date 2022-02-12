import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lets discuss your project</h1>
          <div className="contact-info">
            <div className="info-item">
              <b>Phone:</b>
            </div>
            <div className="info-item">
              <b>Email:</b>
            </div>
            <div className="info-item">
              <b>GitHub:</b>
            </div>
            <div className="info-item">
              <b>LinkedIn:</b>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            Get in touch, and lets materialize your vision!
          </p>
          <form>
            <input type="text" placeholder="Name" name="userName"></input>
            <input type="text" placeholder="Subject" name="userSubject"></input>
            <input type="text" placeholder="Email" name="userEmail"></input>
            <textarea
              rows="5"
              placeholder="Message"
              name="userMessage"
            ></textarea>
            <button className="btn">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
