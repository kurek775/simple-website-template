import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // new field added
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Basic phone validation: 10 digits only
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_USER_ID;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("Failed to send message, please try again.");
      }
    );

    // Optionally, reset the form fields after submission.
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d{10}"
            title="Please enter a valid 10-digit phone number"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
