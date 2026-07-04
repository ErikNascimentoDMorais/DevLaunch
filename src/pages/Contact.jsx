import { useState } from "react";
import {
  buttonStyle,
  h1FontSize,
  h2FontSize,
  sectionStyle,
  cardStyle,
} from "../styles/classes";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const defaultFontSize = "text-xl md:text-2xl font-bold";
  const defaultBoxStyle = "border-slate-800 border-4 mb-10 mx-4 rounded-xl p-5";
  const handleSubmit = (event) => {
    event.preventDefault();

    // futere

    setSent(true);

    // Clean Form
    event.target.reset();
  };
  return (
    <div className="min-h-screen p-3">
      <h1 className={h1FontSize}>Contact Us</h1>
      <h2 className={h2FontSize}>
        Have a question or feedback? We'd love to hear from you.
      </h2>
      <form onSubmit={handleSubmit} className={cardStyle}>
        <label className={defaultFontSize} htmlFor="name">
          Name
        </label>
        <input
          className={defaultBoxStyle}
          required
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        ></input>
        <label className={defaultFontSize} htmlFor="email">
          Email
        </label>
        <input
          className={defaultBoxStyle}
          name="email"
          placeholder="Enter your email"
          id="email"
          required
          type="email"
        ></input>
        <label className={defaultFontSize} htmlFor="dropdown">
          Reason for contact
        </label>
        <select id="dropdown" className={defaultBoxStyle}>
          <option value="Course Question">Course Question</option>
          <option value="Payment Question">Payment Question</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Complaint">Complaint</option>
        </select>
        <label className={defaultFontSize} htmlFor="description">
          Please provide more details about the reason for your contact.
        </label>
        <textarea
          className={defaultBoxStyle}
          id="description"
          name="description"
          placeholder="Describe your question"
          rows={6}
        />
        <button className={buttonStyle} type="submit">
          Submit
        </button>
      </form>
      {sent && (
        <p className="text-green-600 text-lg font-semibold mb-4">
          ✅ Message sent successfully! We'll get back to you as soon as
          possible.
        </p>
      )}
    </div>
  );
};

export default Contact;
