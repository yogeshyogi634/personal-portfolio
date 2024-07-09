"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SwiperSlide from "@/components/appSwiper/appSwiper";
import SwiperSlider from "@/components/appSwiper/appSwiper";

function ContactPage() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  // Example usage
  console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello!";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.TEMPLATE_ID,
        form.current,
        process.PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          console.error("EmailJS error: ", error);
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
        <div className="h-[30%]  lg:h-full lg:w-1/2 flex justify-center items-center text-4xl">
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
          className="h-[60%] lg:h-[85vh] lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-10"
        >
          {/* <span>Your Message:</span>
          <textarea
            rows={2}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            required
          /> */}
          <span>Email:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            required
          />
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
