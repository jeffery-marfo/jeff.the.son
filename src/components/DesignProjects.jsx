import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Memoir from '../assets/images/Memoir.png';
import FCare from '../assets/images/FCare.png';
import MTicketing from '../assets/images/MTicketing.png';
import SpotifyPractice from '../assets/images/SpotifyPractice.png';
import Pharstcare from '../assets/images/Pharstcare.png';
import { Link } from 'react-router-dom';

const DesignProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const projects = [
    {
      id: 1,
      title: "Secret Memoir",
      description: "Secret Memoir is a digital platform designed to give people a safe and anonymous space to share their personal stories, life experiences, and emotional journeys without fear of judgment or exposure. Whether it’s a confession, a reflection, or a deeply personal experience, Secret Memoir allows users to unburden themselves and connect with others through shared humanity.",
      image: Memoir,
      tags: ["UX/UI Design", "Data Visualization", "Dashboard"],
      link: "/projects/secret-memoir"
    },
    {
      id: 2,
      title: "FeatheryCare",
      description: "Cluck Control is a centralized internal dashboard built for FeatheryCare to track product adoption, user engagement, system health, and support issues across its digital platforms (Cluck Mobile, Web, Chat, and Lens). I developed key frontend components that visualize real-time metrics, user behavior, product performance, and marketing insights—empowering teams to make data-driven decisions and improve user retention.",
      image: FCare,
      tags: ["Branding", "Logo Design", "Style Guide"],
      link: "/projects/featherycare"
    },
    {
      id: 3,
      title: "M-Ticketing",
      description: "M-Ticket is a responsive web app for booking bus tickets, bus and car rentals across Ghana. It features OTP-based sign-up, seamless mobile money/card payments, real-time booking flows, and a user dashboard for managing trips, rentals, and transactions. Designed for simplicity and speed, the platform enhances transport accessibility while supporting operators with request management and analytics.",
      image: MTicketing,
      tags: ["Mobile Design", "E-commerce", "UX Research"],
      link: "/projects/mticketing"
    },
    {
      id: 4,
      title: "Spotify Practice",
      description: "This project is a self-initiated UI/UX redesign of Spotify’s interface, created to deepen my skills in layout design, visual hierarchy, and user-centric interaction patterns. The focus was on replicating Spotify’s sleek, dark-themed aesthetic while improving consistency, spacing, and responsiveness for better usability across devices. It served as a practical exercise in design systems and high-fidelity prototyping using Figma.",
      image: SpotifyPractice,
      tags: ["EdTech", "Web Application", "Interactive Design"],
      link: "/projects/spotify-practice"
    },
    {
      id: 5,
      title: "Pharstcare",
      description: "As part of my internship at Pharst Care, I designed a menstrual health tracking interface for their virtual healthcare platform. The design empowers female users with an intuitive and private way to monitor cycle phases, symptoms (flow, emotions, sleep), and wellness activities like hydration, fitness, and sleep. I focused on usability, accessibility, and a clean, minimalist layout to enhance user experience.",
      image: Pharstcare,
      tags: ["Web Design", "Template", "Portfolio"],
      link: "/projects/pharstcare"
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    let intervalId;
    if (isAutoPlay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex < projects.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlay, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : projects.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex < projects.length - 1 ? currentIndex + 1 : 0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-3">
          Things I have designed for digital media agencies
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          A showcase of selected projects and collaborations
        </p>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden bg-white rounded-xl shadow-lg md:shadow-xl"
        onMouseEnter={() => !isMobile && setIsAutoPlay(false)}
        onMouseLeave={() => !isMobile && setIsAutoPlay(true)}
      >
        {/* Carousel */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="min-w-full flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-10"
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 lg:pr-10 mb-6 md:mb-0 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[300px] md:max-h-[400px] rounded-lg shadow-md object-contain"
                />
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 px-2.5 py-1 rounded-full text-xs sm:text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Only show on non-mobile or when not auto-playing */}
        {(!isMobile || !isAutoPlay) && (
          <>
            <button
              onClick={goToPrevious}
              className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-90 rounded-full shadow-lg items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} className="text-gray-800" />
            </button>

            <button
              onClick={goToNext}
              className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-90 rounded-full shadow-lg items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-300 z-10"
              aria-label="Next project"
            >
              <ChevronRight size={20} className="text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-yellow-400 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesignProjects;