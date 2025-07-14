import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Twitter, Calendar } from 'lucide-react';
import proFile from '../assets/images/Profile.jpg';
import cvFile from '../assets/Jeffery_Marfo_CV.pdf';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const textOptions = [
    "Jeffery Marfo",
    "A Product Designer", 
    "A UI UX Designer",
    "A Web Developer",
  ];

  useEffect(() => {
    let timeout;
    const currentText = textOptions[currentIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        setIsTyping(true);
        timeout = setTimeout(() => {}, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, textOptions]);

  const handleBookCall = (e) => {
    e.preventDefault();
    // Replace 'your-username' with your actual Cal.com username
    window.open('https://cal.com/jeffery-marfo-9ifi2q', '_blank', 'noopener,noreferrer');
  };

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

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-20 pb-10 relative max-w-7xl mx-auto px-4 sm:px-8">
      {/* Hero Content */}
      <div className="max-w-[550px] flex-shrink-0 w-full md:w-auto mb-12 md:mb-0">
        <p className="text-gray-600 mb-6 text-base">
          Welcome to my portfolio website!
        </p>

        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          Developer & Designer
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-800 leading-tight">
          Hey folks,
        </h1>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-gray-800 leading-tight">
          I'm{' '}
          <span className="text-yellow-400 inline-block relative">
            {displayText}
          </span>
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Building a successful product is a challenge. I am highly energetic in 
          user experience design, interfaces and web development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            onClick={handleDownloadCV}
            className="flex items-center justify-center px-6 py-3.5 bg-gray-100 text-gray-800 rounded-md text-base font-medium hover:bg-gray-200 transition-all duration-300 ease-in-out no-underline"
          >
            <Download size={16} className="mr-2" />
            Download CV
          </button>
          
          <button
            onClick={handleBookCall}
            className="flex items-center justify-center px-6 py-3.5 bg-amber-400 text-white rounded-md text-base font-medium hover:bg-amber-500 transition-all duration-300 ease-in-out no-underline"
          >
            <Calendar size={16} className="mr-2" />
            Book a Call
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/jeffery-marfo" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jeffery-marfo-b43b89334?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsEj%2FpLnsSmaBHHc2fZxSOg%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {/* <a 
            href="https://twitter.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a> */}
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full max-w-[450px] md:ml-12 flex-shrink-0">
        <img
          src={proFile}
          alt="Jeffery Marfo - Web Designer & Developer"
          className="w-full h-auto max-h-[600px] rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;