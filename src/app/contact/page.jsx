"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const text = "Say Hello!";

  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setSuccess(true);
        form.current.reset();
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        setError(true);
      }
    );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* TEXT CONTAINER */}
        <div className="h-[30%] lg:h-full lg:w-1/2 flex justify-center items-center text-4xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            👋
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-[70%] lg:h-[85vh] lg:w-1/2 bg-red-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-10"
        >
          <div>
            <label
              htmlFor="message"
              className="text-[#414141] text-14 font-normal"
            >
              Message:
            </label>
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors({ ...errors, message: "" });
              }}
              className="w-full text-14 mt-6 focus:outline-none px-2 py-4"
            />
            {errors.message && (
              <div className="text-red-500 text-lg mt-1">{errors.message}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[#414141] text-14 font-normal"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
              className="w-full text-14 mt-6 focus:outline-none px-2 py-4"
            />

            {errors.email && (
              <div className="text-red-500 text-lg mt-1">{errors.email}</div>
            )}
          </div>
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
