'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable websites tailored to your business goals.',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Custom mobile application development for Android and iOS platforms.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that improve user experience and engagement.',
    icon: '🎨',
  },
  {
    title: 'SEO & Marketing',
    description: 'Improve your search ranking and drive traffic with expert SEO strategies.',
    icon: '🚀',
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <section className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-800 mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          We offer a range of professional services to help your business thrive in the digital world.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-purple-600 text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="text-center mt-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Need a custom solution?</h2>
          <p className="text-gray-700 mb-6">We'd love to hear your ideas and work together to bring them to life.</p>
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

export default ServicesPage;
