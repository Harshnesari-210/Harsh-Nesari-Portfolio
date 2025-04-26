import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../utils/animations";
import CircularText from "./circulattext";
import framermotion from '../assets/framer-motion.svg'
import git from '../assets/git.svg'
import html from '../assets/html5.svg'
import js from '../assets/javascript.svg'
import nodejs from '../assets/nodedotjs.svg' 
import postman from '../assets/postman.svg'
import tailwind from '../assets/tailwindcss.svg'
import mongodb from "../assets/mongodb.svg"
import react from '../assets/react.svg'
import github from '../assets/react.svg'
import flask from '../assets/flask.svg'
import vscode from '../assets/icons8-visual-studio-code-24.png'
import {
  Code,
  FileCode,
  Database,
  Github,
  Cpu,
  PenTool,
  LayoutGrid,
  ServerCog,
  Terminal,
  Flag
} from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const AboutSection = () => {
  const techStack = {
    frontend: [
      { name: "HTML", icon: html, level: "Intermediate", color: "text-orange-600" },
      { name: "Tailwind CSS", icon: tailwind, level: "Intermediate", color: "text-sky-500" },
      { name: "JavaScript", icon: js, level: "Intermediate", color: "text-yellow-500" },
      { name: "React.js", icon: react, level: "Intermediate", color: "text-blue-500" },
      { name: "Framer Motion", icon: framermotion, level: "Intermediate", color: "text-purple-500" },
    ],
    backend: [
      { name: "Node.js", icon: nodejs, level: "Intermediate", color: "text-green-600" },
      { name: "MongoDB", icon: mongodb, level: "Intermediate", color: "text-green-500" },
      { name: "Flask", icon: flask, level: "Intermediate", color: "text-gray-700" },
    ],
    tools: [
      { name: "Git", icon: git, level: "Intermediate", color: "text-orange-600" },
      { name: "GitHub", icon: github, level: "Advanced", color: "text-gray-900" },
      { name: "VS Code", icon: vscode, level: "Advanced", color: "text-blue-600" },
      { name: "Postman", icon: postman, level: "Intermediate", color: "text-orange-500" },
    ],
  };

  const renderTechGroup = (title, items) => (
    <motion.div variants={slideUp} className="space-y-4">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-sunset-600">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((tech) => (
          <HoverCard key={tech.name}>
            <HoverCardTrigger>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.05)"
                }}
                className="tech-card bg-white/80 backdrop-blur-sm border border-sunset-100 rounded-2xl p-6 cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <tech.icon size={32} className={tech.color} />
                    )}
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 p-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{tech.name}</h4>
                <p className="text-sm text-muted-foreground">Level: {tech.level}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 section-padding bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-center"
        >
          {/* About Me Section */}
          <motion.div variants={slideUp} className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Harsh, a passionate developer with a love for creating elegant,
                efficient solutions to complex problems. My journey in tech started with a
                curiosity about how things work and evolved into a career built on continuous
                learning and improvement.
              </p>
              <p>
                I specialize in full-stack development with a focus on creating intuitive user
                experiences backed by robust, scalable architecture. I enjoy the challenge of
                optimizing performance and finding the perfect balance between functionality
                and design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or diving deep into algorithm challenges to sharpen
                my problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Rotating Circular Text */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-60 h-60">
              <CircularText />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div variants={slideUp} className="lg:col-span-2 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center ">Tech Stack</h2>
          <div className="space-y-12 ">
            {renderTechGroup("Frontend", techStack.frontend)}
            {renderTechGroup("Backend", techStack.backend)}
            {renderTechGroup("Tools", techStack.tools)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
