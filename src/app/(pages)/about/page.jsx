'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          We are a team of creative technologists and designers passionate about building meaningful digital experiences.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-800">Our Journey</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Since our inception, we've helped companies transform their ideas into high-impact digital products. Our focus is on innovation, usability, and beautiful design.
          </p>
        </motion.div>

        {/* Team Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">What Drives Us</h3>
            <p className="text-gray-600">
              We believe in creating purposeful solutions that align with your business values. Our goal is to not only deliver software but also deliver impact.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?team,technology"
              alt="Our Team"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-800 text-white py-14 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="mb-6">We're excited to help bring your project to life. Let's create something amazing together.</p>
          <a
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
