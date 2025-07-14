
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Portfolio = () => {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, threshold: 0.1 })

  const experiences = [
    {
      year: '2025',
      title: 'Project Designer',
      company: 'Best Studio',
      description: 'Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.'
    },
    {
      year: '2024',
      title: 'UX Designer',
      company: 'Digital Ace',
      description: 'Fusce rutrum augue id orci rhoncus molestie. Nunc auctor dignissim lacus vel iaculis.'
    },
    {
      year: '2023',
      title: 'UI Freelancer',
      company: null,
      description: 'Sed fringilla vitae enim sit amet cursus. Sed cursus dictum tortor quis pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      year: '2022',
      title: 'Junior Designer',
      company: 'Crafted Co.',
      description: 'Cras scelerisque scelerisque condimentum. Nullam at volutpat mi. Nunc auctor ipsum eget magna consequat viverra.'
    }
  ]

  const educations = [
    {
      year: '2025',
      title: 'MEST Africa',
      company: 'Software Engineering Bootcamp',
      description: 'Completed a Software Engineering Bootcamp delivered by MEST Africa in partnership with Generation Ghana. The program focused on full-stack web development, covering core technologies such as HTML, CSS, JavaScript, Git, and modern development workflows. I also gained hands-on experience with frontend frameworks like React, enabling me to build dynamic, responsive web applications. Through project-based learning, mentorship, and team collaboration, I strengthened my ability to apply industry best practices in software development.',
      isEducation: true
    },
    {
      year: '2023',
      title: 'Computer Science',  
      company: 'Undergrad',
      description: 'Gained a solid foundation in programming, data structures, software engineering, and systems analysis. The program equipped me with strong problem-solving abilities and practical experience through hands-on projects and coursework, shaping my path toward becoming a software engineer and building impactful tech solutions.',
      isEducation: true
    },
    {
      year: '2019',
      title: 'Ghana Secondary Technical School - Takoradi',
      company: 'High School',
      description: 'Completed a rigorous General Science program with a focus on Physics, Chemistry, Elective Mathematics, and Biology. This foundation sharpened my logical reasoning, analytical thinking, and curiosity for how systems work—qualities that naturally led me to explore technology. My exposure to problem-solving in science laid the groundwork for my transition into Computer Science and eventually, a career in software engineering and design.',
      isEducation: true
    },
  
  ]

  const TimelineSection = ({ title, items, sectionIndex }) => {
    const sectionRef = useRef(null)
    const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 })

    return (
      <div className="flex-1" ref={sectionRef}>
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line with gradient and glow */}
          <motion.div 
            className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-amber-100 via-slate-500 to-amber-200 origin-top shadow-lg"
            initial={{ scaleY: 0 }}
            animate={sectionInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            style={{ 
              height: 'calc(100% - 50px)',
              boxShadow: '0 0 10px rgba(100, 116, 139, 0.3)'
            }}
          />
          
          {/* Animated line overlay for shimmer effect */}
          <motion.div 
            className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-amber-100 via-amber-200 to-transparent origin-top opacity-60"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={sectionInView ? { scaleY: 1, opacity: 0.6 } : {}}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            style={{ height: 'calc(100% - 50px)' }}
          />

          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-20 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + (index * 0.2)
              }}
            >
              {/* Enhanced year circle */}
              <motion.div 
                className="absolute left-0 top-0 w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white"
                initial={{ scale: 0, rotate: -180 }}
                animate={sectionInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + (index * 0.2),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 8px 25px rgba(100, 116, 139, 0.4)",
                  transition: { duration: 0.2 }
                }}
                style={{
                  boxShadow: '0 4px 15px rgba(100, 116, 139, 0.3)'
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={sectionInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + (index * 0.2) }}
                >
                  {item.year}
                </motion.span>
                
                {/* Pulse ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-amber-200"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.2 + (index * 0.2)
                  }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0)"
                }}
              >
                <div className="flex items-center flex-wrap mb-3">
                  <h3 className="text-xl font-semibold text-gray-700 mr-3">
                    {item.title}
                  </h3>
                  {item.company && (
                    <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                      item.isEducation 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.company}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-8" ref={timelineRef}>
        <div className="flex flex-col lg:flex-row gap-20">
          <TimelineSection 
            title="Experiences" 
            items={experiences}
            sectionIndex={0}
          />
          <TimelineSection 
            title="Educations" 
            items={educations}
            sectionIndex={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio