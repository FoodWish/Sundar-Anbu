"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Modern portfolio website built with Next.js and TailwindCSS showcasing my professional journey and technical expertise.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yourusername/portfolio",
    previewUrl: "https://sundaranbu.com/"
  },
  {
    id: 2,
    title: "Equios Platform",
    description: "Enterprise SaaS platform for business management and operations optimization with real-time analytics.",
    image: "/images/projects/equios.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.equios.co/"
  },
  {
    id: 3,
    title: "ZipZap Website",
    description: "Food delivery platform website with dynamic content management and real-time order tracking capabilities.",
    image: "/images/projects/zipzap-web.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.zipzap.live/"
  },
  {
    id: 4,
    title: "Turbostart Investor Portal",
    description: "Secure investment management platform with portfolio tracking and document management features.",
    image: "/images/projects/turbostart.png",
    tag: ["All", "Web App"],
    previewUrl: "https://portal-investor.turbostart.co/login"
  },
  {
    id: 5,
    title: "NASSCOM Skills Platform",
    description: "Learning management system for skill development and certification tracking.",
    image: "/images/projects/nasscom.png",
    tag: ["All", "Web App"],
    previewUrl: "https://insdms2.sscnasscom.com/"
  },
  {
    id: 6,
    title: "ZipZap Customer App",
    description: "Food delivery mobile application for customers with real-time order tracking and seamless payment integration.",
    image: "/images/projects/zipzap-customer.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.zipzap.end_user"
  },
  {
    id: 7,
    title: "ZipZap Restaurant Partner",
    description: "Restaurant management app for order processing, menu management, and business analytics.",
    image: "/images/projects/zipzap-restaurant.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.restaurantpartner.zipzap"
  },
  {
    id: 8,
    title: "ZipZap Delivery Partner",
    description: "Delivery management app with route optimization and real-time delivery tracking features.",
    image: "/images/projects/zipzap-delivery.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://play.google.com/store/apps/details?id=com.zipzap.deliveryperson"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg text-center mb-8">
          Here are some of the key projects I've worked on, showcasing my expertise in web and mobile development
        </p>
        
        <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
          <ProjectTag
            onClick={setTag}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={setTag}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={setTag}
            name="Web App"
            isSelected={tag === "Web App"}
          />
          <ProjectTag
            onClick={setTag}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
