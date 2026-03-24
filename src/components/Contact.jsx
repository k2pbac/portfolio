import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-description">
        <h2 className="heading-xl nunita-bold">Contact</h2>
        <p className="text-md nunita-medium">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-form">
        <input
          type="text"
          placeholder="NAME"
          className="contact-input nunita-regular"
          id="name"
        />
        <input
          type="email"  
          placeholder="EMAIL"
          className="contact-input nunita-regular"
          id="email"
        />
        <textarea
          placeholder="MESSAGE"
          className="contact-textarea nunita-regular"
          id="message"
        ></textarea>
      </div>
      {/* <a
        href="mailto:kris.bachan@gmail.com"
        className="underline nunita-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        SEND ME AN EMAIL
      </a> */}
    </div>
  );
}
