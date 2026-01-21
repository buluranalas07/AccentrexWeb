import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="text-center mb-10">
        <h1 className="mt-8 scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="mt-2 text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with us for inquiries, partnerships, or support. We're
          here to help!
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe
            title="Google Maps Location"
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1196.8344040007175!2d121.06094542768578!3d14.589352857072711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c819ebfef47d%3A0x361e647178075c70!2sADB%20Ave%2C%20Ortigas%20Center%2C%20Mandaluyong%2C%201605%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1740025006558!5m2!1sen!2sph"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center p-6 text-gray-700 space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-2xl flex-shrink-0" />
              <p className="text-lg">Smart - +63 912 345 6789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-2xl flex-shrink-0" />
              <p className="text-lg">Globe - +63 456 345 1234</p>
            </div>
            <Link to="/pages/inquiry" className="w-full">
              <Button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition duration-300">
                <FaEnvelope className="text-lg" /> Inquire Now!
              </Button>
            </Link>
            <div>
              <p className="mt-15 font-semibold text-gray-900">📱 Follow Us:</p>
              <div className="justify-center flex space-x-6 text-4xl pt-5">
                <a
                  href="https://www.facebook.com/share/18cAdewVbb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook className="text-blue-600 hover:text-blue-800" />
                </a>
                <a
                  href="https://www.instagram.com/accentrexvisaconsultancy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaInstagram className="text-pink-500 hover:text-pink-700" />
                </a>
                <a
                  href="mailto:kdoz@live.com"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaGoogle className="text-red-500 hover:text-red-700" />
                </a>
                <a
                  href="https://www.tiktok.com/@accentrex?_t=ZS-8u8zXJzqSfa&_r=1"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaTiktok className="text-black hover:text-gray-700" />
                </a>
                <a
                  href="https://www.youtube.com/@accentrexvisa-consultancy"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaYoutube className="text-red-500 hover:text-red-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
