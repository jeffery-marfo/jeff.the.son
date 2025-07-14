import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Figma } from "lucide-react";
import Audiophile from '../assets/images/Audiophile.png';
import pVault from '../assets/images/pVault.png';
import ApomudenCare from '../assets/images/Apomuden.png';
import Library from '../assets/images/Library.png';
import Spotify from '../assets/images/Spotify1.png';
import illustrations from '../assets/images/illustration.png';
import Bus from '../assets/images/Bus.png';
import FeatheryCare from '../assets/images/FeatheryCare.png';
import SecretMemoir from '../assets/images/SecretMemoir.png';
import nutriCheck from '../assets/images/nutriCheck.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "software", label: "Software Development" },
    { id: "web", label: "Web Development" },
    { id: "uiux", label: "UI/UX Design" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const projects = [
    {
      id: "nutricheck",
      title: "NutriCheck",
      description:
        "A smart nutrition companion for healthier eating NutriCheck is a modern web application designed to help users make informed dietary choices by offering curated recipes. ",
      image: nutriCheck,
      tags: ["React", "Tailwind CSS", "GitHub"],
      categories: ["software", "web"],
      type: "development",
      links: {
        github: "https://github.com/mihrab34/nutricheck.git",
        demo: "https://nutricheck-kappa.vercel.app/",
      },
      fullDescription:
        "NutriCheck is a modern web application designed to help users make informed dietary choices by offering curated recipes, personalized meal categories, and special diet filters such as vegan, gluten-free, diabetes-friendly, and more.The platform features a responsive design with an intuitive UI, including a mega menu for easy navigation of meal types and diet plans.",
    },
    {
      id: "audiophile",
      title: "Audiophile",
      description:
        "As part of the Software Development Pathway Assessment for Azubi Afica's Talent Mobility Program, I built a fully responsive multi-page e-commerce website. ",
      image: Audiophile,
      tags: ["React", "Tailwind CSS", "GitHub"],
      categories: ["software", "web"],
      type: "development",
      links: {
        github: "https://github.com/jeffery-marfo/Azubi-E-commerce",
        demo: "https://azubi-e-commerce.vercel.app/",
      },
      fullDescription:
        " Frontend Developer Challenge – E-commerce Website: As part of the Software Development Pathway Assessment for Azubi Africa's Talent Mobility Program (TMP), I built a fully responsive multi-page e-commerce website. The project involved replicating a given design while implementing key features such as product browsing, shopping cart management, checkout form validation, and order confirmation with accurate total calculations. This challenge helped demonstrate my frontend development skills in a real-world context.",
    },
    {
      id: "pVault",
      title: "pVault: Healthcare Web Platform",
      description:
        "pVault is a unified, web-based healthcare platform designed to enhance patient experience and streamline operations across hospitals, labs, and pharmacies in Ghana.",
      image: pVault,
      tags: ["React", "Tailwind CSS", "GitHub", "Framer Motion"],
      categories: ["software", "web"],
      type: "development",
      links: {
        github: "https://github.com/XJT-FINAL-DEMO/p-Vault-Frontend",
        demo: "https://patients-vault.netlify.app/",
      },
      fullDescription:
        " pVault is a unified, web-based healthcare platform designed to enhance patient experience and streamline operations across hospitals, labs, and pharmacies in Ghana. The platform allows patients to pre-book appointments, check in digitally at hospitals, locate nearby lab centers and pharmacies, manage prescriptions, and access medical records from various healthcare providers.",
    },
    {
      id: "apomudencare",
      title: "ApomudenCare",
      description:
        "Apomuden is an AI-driven health communication tool designed to bridge the communication gap between patients with speech impairments and healthcare providers in Ghana",
      image: ApomudenCare,
      tags: ["React", "Tailwind CSS", "GitHub", "Framer Motion"],
      categories: ["software", "web"],
      type: "development",
      links: {
        github: "https://github.com/ApomudenCare/apomuden",
        demo: "https://apomudencare.netlify.app/",
      },
      fullDescription:
        " pVault is a unified, web-based healthcare platform designed to enhance patient experience and streamline operations across hospitals, labs, and pharmacies in Ghana. The platform allows patients to pre-book appointments, check in digitally at hospitals, locate nearby lab centers and pharmacies, manage prescriptions, and access medical records from various healthcare providers.",
    },
    {
      id: "readersHaven",
      title: "Reader's Haven",
      description:
        "Reader’s Haven is a web-based E-library platform designed to make reading, learning, and community engagement more accessible and enjoyable. ",
      image: Library,
      tags: ["React", "Tailwind CSS", "GitHub"],
      categories: ["software", "web"],
      type: "development",
      links: {
        github: "https://github.com/E-Library-Group-5/E-Library",
        demo: "https://readers-haven.netlify.app/",
      },
      fullDescription:
        "Reader’s Haven is a web-based E-library platform designed to make reading, learning, and community engagement more accessible and enjoyable. Built for users of all ages, the platform offers a seamless digital experience where visitors can explore a rich collection of books, e-books, audiobooks, magazines, and videos from any device.",
    },

    {
      id: "spotify-redesign",
      title: "Spotify Redesign: Passion Project",
      description:
        "As part of my continuous development in UI/UX design, two years ago, I took on the challenge of redesigning Spotify—an app I genuinely love and rely on daily.",
      image:
        Spotify,
      tags: ["Figma", "Prototyping"],
      categories: ["uiux"],
      type: "design",
      links: {
        figma: "https://embed.figma.com/design/4tivg7QIowjFbaZ5si6gG4/Jeffery-Marfo-s-Showcase?node-id=2-1600&embed-host=share",
      },
      fullDescription:
        "As part of my continuous development in UI/UX design, two years ago, I took on the challenge of redesigning Spotify—an app I genuinely love and rely on daily. The goal wasn’t to add new features, but to explore and improve the existing interface through a fresh visual approach. Using Figma, I focused on refining the layout, enhancing usability, and creating a clean, modern look while staying true to Spotify’s identity. This project allowed me to sharpen my design skills by working on something meaningful and personally inspiring.",
    },

    {
      id: "illustrations",
      title: "Illustrations",
      description:
        "This project was a hands-on exercise in mastering the pen tool to create a custom illustration from scratch. It was an opportunity to explore shape, form, and precision while building my confidence in vector design.",
      image:
      illustrations,
      tags: ["Figma", "Illustration", "Pen Tool"],
      categories: ["uiux"],
      type: "design",
      links: {
        figma: "https://embed.figma.com/design/4tivg7QIowjFbaZ5si6gG4/Jeffery-Marfo-s-Showcase?node-id=15-229&embed-host=share",
      },
      fullDescription:
        "This project was a hands-on exercise in mastering the pen tool to create a custom illustration from scratch. It was an opportunity to explore shape, form, and precision while building my confidence in vector design. Through this process, I focused on refining my control, attention to detail, and creative expression—translating a concept into a clean, visually engaging piece.",
    },
    {
      id: "bus ticketing website",
      title: "Bus Ticketing Website",
      description:
        "This project involved designing the complete user interface and user experience for M-Ticket, a web-based transportation booking platform.",
      image:
      Bus,
      tags: ["Figma", "Prototyping"],
      categories: ["uiux"],
      type: "design",
      links: {
        figma: "https://embed.figma.com/design/4tivg7QIowjFbaZ5si6gG4/Jeffery-Marfo-s-Showcase?node-id=19-1011&embed-host=share",
      },
      fullDescription:
        "This project involved designing the complete user interface and user experience for M-Ticket, a web-based transportation booking platform. The platform offers core services such as bus ticket purchases, bus rentals, and car rentals, tailored to users in Ghana. The goal was to create a clean, responsive, and intuitive design that simplifies complex booking processes while ensuring accessibility and ease of use across devices. I mapped out detailed user flows—from account registration and OTP-based authentication to ticket purchasing, vehicle rental forms, payment gateways, and user dashboards.",
    },
    {
      id: "featherycare",
      title: "FeatheryCare",
      description:
        "As part of a structured design sprint, I worked on the Cluck Control Admin Dashboard, focusing on delivering a clean, responsive, and development-ready interface in Figma.",
      image:
      FeatheryCare,
      tags: ["Figma", "Prototyping"],
      categories: ["uiux"],
      type: "design",
      links: {
        figma: "https://embed.figma.com/design/4tivg7QIowjFbaZ5si6gG4/Jeffery-Marfo-s-Showcase?node-id=30-5265&embed-host=share",
      },
      fullDescription:
        "As part of a structured design sprint, I worked on the Cluck Control Admin Dashboard, focusing on delivering a clean, responsive, and development-ready interface in Figma. The goal was to create core admin screens and a component library that aligns with the brand identity and supports efficient user management and analytics.",
    },
    {
      id: "secretmemoir",
      title: "Secret Memoir",
      description:
        "As part of a structured design sprint, I worked on the Cluck Control Admin Dashboard, focusing on delivering a clean, responsive, and development-ready interface in Figma.",
      image:
      SecretMemoir,
      tags: ["Figma", "Prototyping"],
      categories: ["uiux"],
      type: "design",
      links: {
        figma: "https://embed.figma.com/design/4tivg7QIowjFbaZ5si6gG4/Jeffery-Marfo-s-Showcase?node-id=30-5265&embed-host=share",
      },
      fullDescription:
        "As part of a structured design sprint, I worked on the Cluck Control Admin Dashboard, focusing on delivering a clean, responsive, and development-ready interface in Figma. The goal was to create core admin screens and a component library that aligns with the brand identity and supports efficient user management and analytics.",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.categories.includes(activeFilter);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-amber-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of projects across different domains, from
            software development to mobile applications.
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-8 flex-wrap gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterButtons.map((button) => (
            <motion.button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === button.id
                  ? "bg-amber-400 text-white border-amber-400"
                  : "bg-transparent text-gray-600 border border-gray-300 hover:bg-amber-50 hover:text-amber-400 hover:border-amber-400"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-700 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-xs px-3 py-1 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 bg-gradient-to-r bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>

                    {project.type === "development" && (
                      <>
                        {project.links?.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group/btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="View Code"
                          >
                            <Github
                              size={18}
                              className="text-gray-600 group-hover/btn:text-gray-800"
                            />
                          </motion.a>
                        )}
                        {project.links?.demo && (
                          <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors group/btn"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            title="Live Demo"
                          >
                            <ExternalLink
                              size={18}
                              className="text-green-600 group-hover/btn:text-green-800"
                            />
                          </motion.a>
                        )}
                      </>
                    )}

                    {project.type === "design" && project.links?.figma && (
                      <motion.a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors group/btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="View in Figma"
                      >
                        <Figma
                          size={18}
                          className="text-purple-600 group-hover/btn:text-purple-800"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-red-600 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                {/* Modal Content */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Figma Embed / Image Section in Modal */}
                  {selectedProject.type === "design" &&
                    selectedProject.links?.figma ? (
                    <div className="figma-embed-container mb-6 rounded-lg overflow-hidden">
                      <iframe
                        title={`Figma Design for ${selectedProject.title}`}
                        src={selectedProject.links.figma}
                        allowFullScreen
                        className="w-full h-full" // Tailwind classes for full width/height
                      ></iframe>
                    </div>
                  ) : (
                    <div className="h-80 mb-6 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* End Figma Embed / Image Section */}

                  {/* Tags in Modal */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm px-4 py-2 rounded-full border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links in Modal */}
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {selectedProject.type === "development" && (
                      <>
                        {selectedProject.links?.github && (
                          <motion.a
                            href={selectedProject.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                        )}
                        {selectedProject.links?.demo && (
                          <motion.a
                            href={selectedProject.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        )}
                      </>
                    )}

                    {selectedProject.type === "design" &&
                      selectedProject.links?.figma && (
                        <motion.a
                          href={selectedProject.links.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Figma size={20} />
                          View in Figma
                        </motion.a>
                      )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;