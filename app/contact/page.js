"use client";
import React, { useState } from "react";
import Iframe from "react-iframe";
import Back from "./back";
import Emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
   const validateEmail = (email) => {
     // Email validation regular expression
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   };

  const myForm = (e) => {
    console.log(e.target.elements.email.value);
    e.preventDefault();
    const serviceID = "service_p9zqanl";
    const templateID = "template_em8rhoi";
    const userID = "lZ_35M8zg1DiIeXFK";
     if (!validateEmail(e.target.elements.email.value)) {
       alert("Please enter a valid email address");
       return;
     }


    Emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert("SUCCESS!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  };

  const iframeSrc =
    'https://www.google.com/maps/embed?pb=!4v1674824092134!6m8!1m7!1sAiQ7xDtdOK4kYL65ky7kUg!2m2!1d0.3825399017215345!2d32.57656907294337!3f172.61786602956778!4f3.4094833862055935!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <div>
      <Back />

      <div className="sm:mt-[-40px] mx-4 mb-5 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" p-4">
          <form
            onSubmit={myForm}
            className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6"
          >
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Subject
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                name="subject"
                type="text"
                placeholder="your header"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <Iframe
            src={iframeSrc}
            className="w-full h-[50%] p-4"
            frameBorder="0"
            style={{ border: 0 }}
            title="myFrame"
          />
          <p className="p-4">
            We are strategically located in Kawempe divion-Kampala Uganda. We
            have brunches in Kampala and wakiso. We offer both remotely and on
            site services, feel free to reach our nearest offices or reacch to
            us electronically, thank you
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
