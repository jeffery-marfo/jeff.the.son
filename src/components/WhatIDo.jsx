import React from 'react';
import { Code, Palette, Headset } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const WhatIDo = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const services = [
    {
      title: 'IT Support',
      icon: <Headset className="w-8 h-8" />,
      description: 'Providing reliable technical support, troubleshooting issues, and ensuring smooth system operations to keep users productive and businesses running efficiently.'
    },
    {
      title: 'Web Application Development',
      icon: <Code className="w-8 h-8" />,
      description: 'Building responsive and scalable web applications using modern frameworks and best practices. From interactive single-page apps to comprehensive full-stack solutions, I focus on performance, usability, and long-term maintainability.'
    },
    {
      title: 'Web Design & UI/UX',
      icon: <Palette className="w-8 h-8" />,
      description: 'Designing clean, intuitive, and user-focused interfaces that enhance the digital experience. I create visually appealing layouts rooted in strong UX principles to ensure every interaction feels seamless and purposeful.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-8 text-gray-900"
          >
            <span className="text-black">What I Do</span> 
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            I offer a range of services to help you establish and grow your online presence with modern web technologies and design principles.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, transition: { duration: 0.2 } }}
                className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-amber-300 mb-8 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;