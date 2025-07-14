import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // ✅ Import emailjs

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // ✅ Send email using EmailJS with your actual IDs
      const result = await emailjs.send(
        'service_vwit12c',
        'template_mgiir4o',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Marfo Jeffery',
          reply_to: formData.email
        },
        'T540dGst-oV3dZm_O' // ✅ Public Key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(255, 193, 7, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 w-full bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Map and Contact Info Section */}
        <motion.div className="w-full lg:flex-1" variants={itemVariants}>
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 mb-6">
            <div className="absolute top-3 left-3 bg-white p-2 sm:p-3 rounded-md shadow-md z-10 max-w-[80%]">
              <h3 className="text-xs sm:text-sm font-semibold mb-1">Accra Central</h3>
              <p className="text-[10px] sm:text-xs text-gray-600 mb-1">Accra, Ghana</p>
              <a href="#" className="text-blue-500 text-[10px] sm:text-xs hover:underline">
                View larger map
              </a>
            </div>
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31844.25996852698!2d-0.20606382419436094!3d5.556001400000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1709191790245!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>

          <motion.div className="bg-gray-800 text-white p-5 sm:p-6 rounded-lg" variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">Say hello</h3>
            <div className="space-y-3 sm:space-y-4">
              <motion.a 
                href="tel:+233 20 572 1817"
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white/20 bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={14} />
                </div>
                <span className="text-xs sm:text-sm group-hover:text-yellow-400 transition-colors">020 572 1817</span>
              </motion.a>

              <motion.a 
                href="mailto:marfojeffery31@gmail.com"
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }} 
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-white/20 bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={14} />
                </div>
                <span className="text-xs sm:text-sm group-hover:text-yellow-400 transition-colors">marfojeffery31@gmail.com</span>
              </motion.a>

           
            </div>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div className="w-full lg:flex-1 lg:pl-0" variants={itemVariants}>
          <div className="mb-6">
            <motion.h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2" variants={itemVariants}>
              Interested to work together?
            </motion.h2>
            <motion.p className="text-lg sm:text-xl text-gray-600" variants={itemVariants}>
              Let's talk
            </motion.p>
          </div>

          <motion.form onSubmit={handleSubmit} variants={itemVariants} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div className="w-full sm:flex-1" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                />
              </motion.div>

              <motion.div className="w-full sm:flex-1" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                />
              </motion.div>
            </div>

            <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="6"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 sm:px-8 rounded-md cursor-pointer text-sm transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-2"
              >
                Thanks for your message! We will get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm mt-2"
              >
                Sorry, there was an error sending your message. Please check your inputs and try again.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;