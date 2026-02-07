import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8"
    >

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">StartupOps</h2>
          <p className="text-gray-400">
            Empowering founders and students to build and manage startups efficiently.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Platform</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Features</li>
            <li>How it Works</li>
            <li>Dashboard</li>
            <li>Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Documentation</li>
            <li>Support</li>
            <li>Community</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} StartupOps. All rights reserved.
      </div>

    </motion.footer>
  );
};

export default Footer;
