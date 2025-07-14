import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const GetInTouchSection = () => {
  const contactChannels = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      handle: "marfojeffery31@gmail.com",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      link: "mailto:marfojeffery31@gmail.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub", 
      handle: "Jeffery Marfo",
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
      link: "https://github.com/jeffery-marfo"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      handle: "Jeffery Marfo",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700", 
      link: "https://www.linkedin.com/in/jeffery-marfo-b43b89334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2ZbtL%2BoKSDyiQ9YGWUfNvg%3D%3D"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "Twitter",
      handle: "@Jeff_the_Son_",
      color: "bg-sky-500",
      hoverColor: "hover:bg-sky-600",
      link: "https://x.com/Jeff_the_Son_?t=xkrsovIqruExxtmSwBURVg&s=09"
    }
  ];

  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    rest: {
      x: 0,
      opacity: 0.7,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      x: 4,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">
            Let's Connect
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Always up for new opportunities, collabs, or idea exchanges. Reach out through any 
            of these channels and I'll get back to you ASAP!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="block group cursor-pointer"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 transition-colors duration-300 group-hover:border-gray-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <motion.div 
                      variants={iconVariants}
                      className={`p-3 ${channel.color} ${channel.hoverColor} rounded-xl text-white transition-colors duration-300`}
                    >
                      {channel.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-500 transition-colors duration-300">
                        {channel.handle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    variants={arrowVariants}
                    className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Response time is usually within 24 hours ⚡
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
