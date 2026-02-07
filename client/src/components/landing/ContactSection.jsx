import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully (Demo Mode)");
  };

  return (
    <section className="py-24 bg-gray-50">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6"
      >

        <h2 className="text-4xl font-extrabold text-center mb-4">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Have questions or ideas? We would love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-600">support@startupops.com</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Address</h3>
              <p className="text-gray-600">Innovation Hub, India</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">Connect</h3>
              <p className="text-gray-600">
                LinkedIn | GitHub | Twitter
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow"
            whileHover={{ scale: 1.01 }}
          >

            <input
              name="name"
              placeholder="Your Name"
              className="border p-3 w-full mb-4 rounded"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Your Email"
              className="border p-3 w-full mb-4 rounded"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="border p-3 w-full mb-4 rounded"
              rows="4"
              onChange={handleChange}
              required
            />

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg">
              Send Message
            </button>

          </motion.form>

        </div>

      </motion.div>

    </section>
  );
};

export default ContactSection;
