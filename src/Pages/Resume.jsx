import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink, Calendar, Award, Briefcase, GraduationCap, Code, User, Star } from 'lucide-react';
import cvFile from '../assets/Jeffery_Marfo_CV.pdf';
import pfp from '../assets/images/pfp.jpg'

const Resume = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const handleDownloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Use the imported cvFile as the href
    link.href = cvFile;
    
    // Set the download attribute with the desired filename
    link.download = 'Jeffery_Marfo_CV.pdf';
    
    // Append to body, trigger download, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Resume
          </h1>
          <div className="w-20 h-1 bg-amber-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 p-1 mb-4 flex items-center justify-center">
                  <img
                    src={pfp}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center">Jeffery Marfo</h2>
                <p className="text-amber-300 font-medium text-center">Front-End Developer | UI/UX Designer</p>
                
                <button
                  onClick={handleDownloadCV}
                  className="mt-6 px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-sm"
                >
                  <Download size={18} />
                  Download CV
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-700">
                  <Mail size={18} className="mr-3 text-amber-400 flex-shrink-0" />
                  <span className="text-sm break-all">marfojeffery31@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone size={18} className="mr-3 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">+233 20 572 1817</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={18} className="mr-3 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">Accra, Ghana</span>
                </div>
                {/* <div className="flex items-center text-gray-700">
                  <Linkedin size={18} className="mr-3 text-amber-400 flex-shrink-0" />
                  <a href="#" className="text-sm hover:underline">linkedin.com/in/jeffery-marfo</a>
                </div> */}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2 mt-4">UI/UX</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Responsive Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About Me</h3>
              <p className="text-gray-700 leading-relaxed">
              Creative and detail-oriented UX/UX Designer and Frontend Developer with a proven ability to design and build 
fully responsive, user-focused web applications. Skilled in translating design concepts into functional interfaces 
using HTML, CSS, JavaScript, Tailwind CSS, and React. Experienced in delivering end-to-end frontend solutions 
for real-world projects, including healthcare platforms like pVault and ApomudenCare, an E-Library system, and 
an Ads Website. Strong foundation in wireframing, prototyping, and usability testing, paired with hands-on IT 
support and ServiceNow administration experience. Passionate about creating clean, accessible interfaces that 
balance aesthetics with performance and usability. 
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900">IT Support Specialist</h4>
                  <div className="flex items-center text-amber-400 text-sm mb-2 font-medium">
                    <span>American Tower Corporation - ATC Ghana</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Delivered first-line technical support to over 150 employees with 98% satisfaction rate</li>
                    <li>Maintained IT infrastructure ensuring 90% uptime across Accra and Kumasi offices</li>
                    <li>Managed PC rebuilding and Active Directory/Azure Intune integration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-amber-400 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900">UI/UX Designer & Frontend Developer</h4>
                  <div className="flex items-center text-amber-400 text-sm mb-2 font-medium">
                    <span>Freelance</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Led design and development of pVault and ApomudenCare healthcare platforms</li>
                    <li>Built Cluck Control Dashboard for FeatherCare poultry management system</li>
                    <li>Enhanced task completion rates by up to 25% through usability improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg hover:bg-amber-40 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">FeatherCare - Cluck Control Dashboard</h4>
                  <p className="text-sm text-gray-600 mb-2">Poultry management system dashboard</p>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Tailwind CSS', 'Figma'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-transparent border border-gray-300 text-gray-700 rounded text-xs hover:border-amber-400 hover:text-amber-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg hover:bg-amber-40 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">pVault - Patient Check-In System</h4>
                  <p className="text-sm text-gray-600 mb-2">Healthcare patient management</p>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Tailwind CSS', 'Figma'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-transparent border border-gray-300 text-gray-700 rounded text-xs hover:border-amber-400 hover:text-amber-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg hover:bg-amber-40 transition-colors md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">ApomudenCare - Healthcare Platform</h4>
                  <p className="text-sm text-gray-600 mb-2">Comprehensive healthcare experience platform</p>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Tailwind CSS', 'Figma'].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-transparent border border-gray-300 text-gray-700 rounded text-xs hover:border-amber-400 hover:text-amber-600 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-400 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science, Computer Science</h4>
                  <div className="flex items-center text-amber-400 text-sm mb-2 font-medium">
                    <Calendar size={14} className="mr-1" />
                    <span>2019 - 2023</span>
                  </div>
                  <p className="text-gray-700">University of Cape Coast</p>
                </div>

                <div className="border-l-4 border-amber-400 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                  <h4 className="text-lg font-semibold text-gray-900">General Science</h4>
                  <div className="flex items-center text-amber-400 text-sm mb-2 font-medium">
                    <Calendar size={14} className="mr-1" />
                    <span>2016 - 2019</span>
                  </div>
                  <p className="text-gray-700">Ghana Secondary Technical School, Takoradi</p>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Leadership & Activities</h3>
              
              <div className="border-l-4 border-amber-400 pl-4 hover:bg-gray-50 p-4 rounded-r-lg transition-colors">
                <h4 className="text-lg font-semibold text-gray-900">Core Lead Team Member</h4>
                <p className="text-amber-400 text-sm font-medium">Google Developer Clubs - GDSC (UCC Chapter)</p>
                <p className="text-gray-700 mt-2 text-sm">
                  Contributed to organizing tech events, workshops, and community building activities for student developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;