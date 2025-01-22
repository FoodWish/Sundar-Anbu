"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sundar Anbu",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl">
            Passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. Specialized in React, Node.js, and cloud solutions with a strong focus on creating exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://www.linkedin.com/in/sundar-anbu-a94614202/"
              target="_blank"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Let&apos;s Connect
            </Link>
            <Link
              target="_blank"
              href="https://turbostart.blob.core.windows.net/turbostart/Sundar_Anbu.pdf"
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#121212] p-2">
              <Image
                src="/images/sundar_anbu.jpg"
                alt="hero image"
                className="rounded-full w-full h-full object-cover"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
