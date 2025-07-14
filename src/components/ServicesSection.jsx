import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Palette, Layout, ExternalLink } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Web Apps",
      description: "Creating responsive, user-friendly websites and web applications with modern frameworks and technologies",
      offer: [
        "Professional consultation and planning",
        "Customized solutions tailored to your needs",
        "Ongoing support and maintenance"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Framer Motion"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "Designing beautiful user interfaces with attention to detail, focusing on both aesthetics and functionality",
      offer: [
        "Cross-platform mobile development",
        "Native performance optimization",
        "App store deployment assistance"
      ],
      technologies: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Developing unique brand identities that communicate values and connect with target audiences effectively",
      offer: [
        "Complete brand identity packages",
        "Custom illustration and graphics",
        "Print and digital design materials"
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Principle", "InVision"]
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive product designs that solve real problems and deliver exceptional user experiences",
      offer: [
        "User research and testing",
        "Wireframing and prototyping",
        "Design system development"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "Miro"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
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
      opacity: 0.6,
      rotate: -90,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      x: 4,
      opacity: 1,
      rotate: -90,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    selected: {
      x: 0,
      opacity: 1,
      rotate: 90,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-500 tracking-wider">SERVICES</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            How Can I Help?
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto mt-4"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="rest"
              whileHover={selectedIndex !== index ? "hover" : "rest"}
              animate="rest"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              className="cursor-pointer"
            >
              <motion.div
                variants={cardVariants}
                className={`bg-white p-6 rounded-lg border transition-colors duration-300 ${
                  selectedIndex === index ? 'border-blue-200 bg-blue-50' : 'border-gray-100'
                }`}
              >
                <div className="flex justify-between items-start">
                  <motion.div 
                    variants={iconVariants}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      selectedIndex === index ? 'bg-blue-100' : 'bg-gray-50'
                    }`}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.div
                    variants={arrowVariants}
                    animate={selectedIndex === index ? "selected" : (hoveredIndex === index ? "hover" : "rest")}
                    className={`transition-colors duration-300 ${
                      selectedIndex === index ? 'text-blue-600' : 'text-gray-400'
                    }`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
                <h3 className={`mt-4 text-lg font-semibold transition-colors duration-300 ${
                  selectedIndex === index ? 'text-blue-900' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Expandable Content */}
                <motion.div
                  variants={expandVariants}
                  initial="collapsed"
                  animate={selectedIndex === index ? "expanded" : "collapsed"}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">What you'll get:</h4>
                    <ul className="space-y-2 mb-4">
                      {service.offer.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;