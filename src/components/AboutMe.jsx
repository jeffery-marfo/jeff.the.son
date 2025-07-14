import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Users, GraduationCap } from 'lucide-react'

const AboutMe = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 })

  const approaches = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design Approach",
      description: "I focus on the intersection of business goals and user needs, creating purposeful designs that drive engagement and conversions while delivering exceptional user experiences."
    },
    {
      icon: <Users className="w-5 h-5" />, 
      title: "Collaborative Process",
      description: "I believe in the power of collaboration and transparent communication throughout the design process, ensuring all stakeholders are aligned and expectations are met."
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Knowledge Sharing",
      description: "I'm passionate about mentoring the next generation of designers and sharing insights gained from my industry experience."
    }
  ]

  const skills = [
    "UI/UX Design", "Design Systems", "User Research", "Prototyping", 
    "Brand Identity", "Web Design", "Mobile Design", "Interaction Design", "Design Thinking"
  ]

  return (
    <div className="py-20 bg-gray-50">
      <motion.div 
        ref={containerRef}
        className="w-4/5 max-w-5xl bg-white rounded-xl mx-auto p-10 shadow-lg flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}
        <motion.div
          className="relative mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h1>
          <div className="w-12 h-1 bg-yellow-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* About Content */}
        <motion.div 
          className="mx-auto mb-8 text-gray-600 leading-relaxed max-w-3xl text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mb-4">
           I'm Jeffery, a creative frontend developer and UI/UX designer based in Accra, Ghana, with a unique blend of design sensibility and technical expertise that allows me to craft complete digital experiences from concept to code. With proven experience across healthcare platforms, enterprise IT systems, and custom web applications, I specialize in creating user-centered designs that translate seamlessly into high-performing, responsive web applications.
          </p>
          <p>
            My professional journey combines hands-on development work with comprehensive IT infrastructure experience at American Tower Corporation, where I supported over 150 employees while maintaining 90% system uptime across multiple offices. This technical foundation, paired with my design expertise, gives me a distinctive perspective on building digital products that are both beautifully crafted and technically robust.
          </p>
        </motion.div>

        {/* Approach Section */}
        <motion.div 
          className="mx-auto mb-10 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="flex mb-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
            >
              <motion.div 
                className="w-10 h-10 bg-amber-100 rounded-full flex justify-center items-center mr-4 flex-shrink-0"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#fbbf24",
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-amber-500">{approach.icon}</span>
              </motion.div>
              <div className="approach-content">
                <h3 className="mb-2 text-gray-800 font-medium text-lg">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div 
          className="mx-auto text-center max-w-3xl mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="mb-6 text-gray-800 font-semibold text-2xl">My Expertise</h2>
          <motion.div 
            className="flex flex-wrap gap-3 mx-auto justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-800 cursor-pointer transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.8 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.08,
                  backgroundColor: "#fbbf24",
                  color: "#ffffff",
                  y: -3,
                  boxShadow: "0 8px 25px rgba(255, 184, 0, 0.4)",
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Button */}
        {/* <motion.a
          href="#"
          className="block w-full max-w-xs bg-yellow-400 text-white py-3 px-6 rounded-md no-underline font-medium mx-auto mt-8 text-center hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2.2 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(255, 184, 0, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch
        </motion.a> */}
      </motion.div>
    </div>
  )
}

export default AboutMe