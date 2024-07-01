"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  // VIEW RESUME
  const handleView = () => {
    const resumeUrl = `/images/Yogesh Resume.pdf`;
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
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center">
          {/* TITLE */}
          <h1 className="m-0 text-4xl md:text-6xl sm:text-3xl font-bold">
            I&apos;m Yogesh K U
          </h1>
          <h1 className="text-3xl md:text-4xl font-medium">
            Crafting Digital Experiences,Designing Tomorrow&apos;s Solutions
          </h1>
          {/* DESC */}
          {/* <p className="hidden md:text-xl"> */}
          <p className="hidden lg:block text-xl">
            Specializing in full-stack development, I create seamless digital
            experiences and innovative solutions. Adept in both front-end and
            back-end technologies, I collaborate with you to transform your
            vision into reality.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className=" p-3 md:p-4 rounded-lg ring-1 ring-black bg-black text-white text-xs md:text-xl">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 md:p-4 rounded-lg ring-1 ring-black text-xs md:text-xl">
                Contact Me
              </button>
            </Link>
            {/* to download resume
            <button onClick={handleDownload}>Download Resume</button> */}
            {/* to view resume  */}
            <button
              onClick={handleView}
              className=" p-3 md:p-4 rounded-lg ring-1 ring-black text-xs md:text-xl"
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
