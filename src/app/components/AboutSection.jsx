"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
        <li>React/Next.js</li>
        <li>Node.js/Express</li>
        <li>JavaScript/TypeScript</li>
        <li>PostgreSQL/MongoDB</li>
        <li>AWS/Azure Cloud</li>
        <li>Docker/Kubernetes</li>
        <li>REST/GraphQL APIs</li>
        <li>CI/CD Pipelines</li>
        <li>Salesforce Development</li>
        <li>Agile Methodologies</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-4">
        <li>
          <div className="font-semibold">NTTF, Bangalore</div>
          <div className="text-sm text-gray-400">Advanced Diploma in Software Engineering</div>
          <div className="text-sm text-gray-400">2018 - 2021</div>
        </li>
        <li>
          <div className="font-semibold">Algappa University, Hosur</div>
          <div className="text-sm text-gray-400">Bachelor of Computer Applications</div>
          <div className="text-sm text-gray-400">2019 - 2022</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-4">
        <li>
          <div className="font-semibold">Scaler Academy</div>
          <div className="text-sm text-gray-400">Advanced Software Development Program</div>
        </li>
        <li>
          <div className="font-semibold">AWS Certified Developer</div>
          <div className="text-sm text-gray-400">Associate Level Certification</div>
        </li>
        <li>
          <div className="font-semibold">Salesforce Platform Developer I</div>
          <div className="text-sm text-gray-400">Certified Developer</div>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/images/about-image.png" 
          width={500} 
          height={500} 
          alt="Developer workspace"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            With over 4 years of experience in full-stack development, I specialize in building robust and scalable web applications. My expertise spans across modern JavaScript frameworks, cloud technologies, and enterprise solutions including Salesforce development. I'm passionate about clean code, performance optimization, and creating intuitive user interfaces. Currently focused on cloud-native applications and microservices architecture while continuously learning new technologies.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="hover:text-purple-500 transition-colors"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="hover:text-purple-500 transition-colors"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              className="hover:text-purple-500 transition-colors"
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 bg-gray-900 rounded-lg p-4 shadow-xl">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
