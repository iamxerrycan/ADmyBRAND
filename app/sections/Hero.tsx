"use client";

import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import img from '../../public/images/AI.jpg'

export default function Hero() {
  return (
    <header
    id="home"
      role="banner"
      className="relative min-h-screen gap-5 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* LEFT SIDE - CONTENT */}
      <div className="w-90% max-w-2xl z-10 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
        >
          Supercharge Your{" "}
          <br className="hidden md:block" />
          AI Marketing with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ADmyBRAND
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-sm md:text-lg text-gray-600 dark:text-gray-300"
        >
          Unlock powerful automation and data-driven insights to elevate your
          brand’s digital campaigns with our cutting-edge AI Suite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
        >
          <Button className="backdrop-blur-xl bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 focus:ring-4 focus:ring-indigo-300">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 backdrop-blur-lg px-6 py-3 text-lg font-semibold rounded-xl"
          >
            Watch Demo
          </Button>
        </motion.div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-90% md:w-auto mb-10 md:mb-0 flex justify-center z-0"
      >
        <div className="relative w-[320px] md:w-[450px]">
          <Image
            src={img}
            alt="AI Marketing Illustration"
            width={440}
            height={440}
            className="rounded-3xl object-cover"
            priority
          />
          <div className="absolute -inset-1 blur-lg bg-indigo-400/30 rounded-3xl z-[-1]" />
        </div>
      </motion.div>
    </header>
  );
}
