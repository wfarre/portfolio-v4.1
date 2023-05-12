import React, { useRef } from "react";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";

type Props = {};

const ContactForm = (props: Props) => {
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    console.log("hello");

    if (
      serviceId !== undefined &&
      templateId !== undefined &&
      publicKey !== undefined
    ) {
      console.log("yes!!!");

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form
      ref={form}
      action="POST"
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__item">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="John Doe"
        />
      </div>
      <div className="contact-form__item">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="email@email.com"
        />
      </div>
      <div className="contact-form__item">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          className="input"
          name="message"
          placeholder="Write your message here..."
        />
      </div>

      <Button buttonText="Send" />
    </form>
  );
};

export default ContactForm;
