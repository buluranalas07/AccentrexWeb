"use client";

import React, { lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import img3 from "@/assets/img3.webp";
import img4 from "@/assets/img4.webp";
import img5 from "@/assets/img5.webp";
import img1 from "@/assets/img1.webp";
const Typewriter = lazy(() => import("./Typewriter"));

const HomeSection = () => {
  const [images, setImages] = useState([img3, img5, img1, img4]);

  useEffect(() => {
    const timeout = setInterval(
      () => setImages((prev) => shuffle([...prev])),
      2000
    );
    return () => clearInterval(timeout);
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div className="grid grid-cols-3 gap-2 w-full h-auto relative">
        <motion.img
          src={images[0]}
          alt=""
          initial={{ x: -200, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          layout
          transition={{ ...spring, delay: 0.2 }}
          className="col-span-1 row-span-2 w-full h-[320px] object-cover rounded-2xl shadow-xl"
        />

        <motion.img
          src={images[1]}
          alt=""
          initial={{ x: 200, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          layout
          transition={{ ...spring, delay: 0.4 }}
          className="col-span-2 w-full h-[150px] object-cover rounded-xl shadow-lg"
        />

        <motion.img
          src={images[2]}
          alt=""
          initial={{ y: 200, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          layout
          transition={{ ...spring, delay: 0.6 }}
          className="col-span-2 w-full h-[170px] object-cover rounded-xl shadow-lg"
        />

        <motion.img
          src={images[3]}
          alt=""
          initial={{ y: -100, opacity: 0, rotate: 5 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          layout
          transition={{ ...spring, delay: 0.8 }}
          className="col-span-3 w-full h-[200px] object-cover rounded-xl shadow-xl"
        />
      </motion.div>

      <div className="text-center md:text-left">
        <div className="overflow-hidden">
          <motion.div
            className="inline-block"
            whileHover={{ x: 50, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="animate-gradient-change text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              STUDY
            </motion.h1>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="inline-block"
            whileHover={{ x: 50, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="animate-gradient-change text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              LIVE
            </motion.h1>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="inline-block"
            whileHover={{ x: 50, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.h1
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="animate-gradient-change text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              MIGRATE
            </motion.h1>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="leading-7 mt-4 text-lg sm:text-xl lg:text-2xl font-mono text-justify"
        >
          <Typewriter
            text="Join thousands of Filipinos who have successfully moved to Australia, New Zealand, and Canada with Accentrex! Take part in our Study, Live, and Migrate program and start building the life you deserve."
            delay={20}
          />
        </motion.p>
      </div>
    </div>
  );
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

export default HomeSection;
