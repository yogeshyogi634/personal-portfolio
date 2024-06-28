"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  // DOWNLOAD RESUME
  // const handleDownload = () => {
  //   const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;
  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.setAttribute("download", "Yogesh Resume.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  // };

  // VIEW RESUME
  const handleView = () => {
    const resumeUrl = `Yogesh Resume.pdf`;
    window.open(resumeUrl, "_blank");
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/images/hero.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center">
          {/* <h1 className="text-4xl md:text-6xl font-bol">
            Yogesh K U
          </h1> */}
          <h1 className="m-0 text-4xl md:text-6xl font-bold">
            I&apos;m Yogesh K U
          </h1>

          {/* TITLE */}
          <h1 className=" text-3xl md:text-5xl m-0 ">
            Crafting Digital Experiences, Designing Tomorrow&apos;s Solutions
          </h1>
          {/* DESC */}
          <p className=" md:text-xl">
            Crafting seamless digital experiences and innovative solutions, I
            specialize in full-stack development, adept in both front-end and
            back-end technologies. Let&apos;s collaborate to transform your
            vision into reality.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
            {/* to download resume
            <button onClick={handleDownload}>Download Resume</button> */}
            {/* to view resume  */}
            <button
              onClick={handleView}
              className="p-4 rounded-lg ring-1 ring-black"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
