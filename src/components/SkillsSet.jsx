import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillsData = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      tools: [
        {
          name: 'VS Code:',
          description: 'For efficient code editing and debugging.'
        },
        {
          name: 'Git & GitHub:',
          description: 'For version control and collaboration.'
        },
        {
          name: 'npm:',
          description: 'For package management and build processes.'
        }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: Palette,
      skills: ['UI/UX Design', 'User Research & Wireframing', 'Prototyping & Usability Testing'],
      tools: [
        {
          name: 'Figma:',
          description: 'For creating intuitive and visually appealing UI designs.'
        },
        {
          name: 'Whimsical:',
          description: 'For wireframing and visualizing ideas during the design process.'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Database Management'],
      tools: [
        {
          name: 'MongoDB:',
          description: 'For flexible, scalable data storage.'
        },
        {
          name: 'Postman:',
          description: 'For API testing and documentation.'
        }
      ]
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-5 pt-12">
      {/* Section Title */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold inline-block mb-2 text-gray-800">
          Skills & Tools
        </h2>
        <div className="w-32 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((category, index) => {
          const IconComponent = category.icon;
          
          return (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Skill Header */}
              <div className="flex items-center mb-5">
                <div className="w-9 h-9 flex items-center justify-center mr-4">
                  <IconComponent 
                    size={20} 
                    className="text-amber-400" 
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="mb-4 ml-1">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center py-1 text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <span className="text-amber-400 font-bold mr-2 text-base">•</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* Tools List */}
              <div className="ml-1">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    className="flex mb-2 text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + (category.skills.length + toolIndex) * 0.05 
                    }}
                  >
                    <span className="text-amber-400 font-bold mr-2 text-base">•</span>
                    <div className="flex flex-wrap">
                      <span className="font-semibold mr-1">{tool.name}</span>
                      <span className="text-gray-500 text-xs leading-relaxed">
                        {tool.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsSection;