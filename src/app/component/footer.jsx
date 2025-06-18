'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = (direction = 'up', delay = 0) => {
  return {
    initial: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-600 to-blue-500 text-white pt-10 pb-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Info */}
          <motion.div {...fadeIn('left', 0)}>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">MyBrand</h2>
            <p className="text-sm text-gray-200">
              Delivering quality digital services to empower your business. Let’s build something great together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeIn('up', 0.2)}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-yellow-300 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div {...fadeIn('right', 0.4)}>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="hover:text-yellow-300 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-yellow-300 transition"><FaLinkedinIn /></a>
            </div>
          </motion.div>
        </div>

        <motion.hr className="border-indigo-400 my-6" {...fadeIn('up', 0.5)} />

        <motion.div className="text-center text-sm text-gray-300" {...fadeIn('up', 0.6)}>
          © 2025 MyBrand. All rights reserved sk.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
