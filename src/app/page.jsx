'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-purple-800 mb-6"
        >
          Welcome to MyBrand
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          We build digital solutions that drive innovation and transformation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            href="/services"
            className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-600 transition"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {[
          {
            title: 'Custom Web Development',
            desc: 'Tailored web solutions that match your business needs perfectly.',
          },
          {
            title: 'UI/UX Design',
            desc: 'Creating intuitive and visually appealing user experiences.',
          },
          {
            title: 'SEO Optimization',
            desc: 'Boost your online visibility and rank higher on search engines.',
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-600"
          >
            <h3 className="text-xl font-bold text-purple-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 text-white py-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Start Your Project</h2>
          <p className="mb-6">Get in touch today and let us turn your ideas into reality.</p>
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;