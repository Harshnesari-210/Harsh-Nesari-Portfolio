
import { motion } from "framer-motion";
import { staggerContainer, hoverCard } from "../utils/animations";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cryptex Vault",
      description: "A secure cryptocurrency wallet with real-time market data and portfolio analytics.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      background: "bg-gradient-to-br from-sunset-50 to-sunset-100",
    },
    {
      title: "Reframe AI",
      description: "An AI-based Chrome extension that enhances prompts for better chatbot interactions, featuring a Multi-Step Prompt Engine for structured, logical task breakdowns.",
      tags: ["React", "Flask", "T5 Model", "Docker", "Express"],
      liveLink: "https://example.com",   // <-- Update this later with real demo link if you have
      githubLink: "https://github.com",   // <-- Update this later with real GitHub repo link
      background: "bg-gradient-to-br from-sunset-50 to-sunset-100",
    },
    {
      title: "RentLink",
      description: "A local home rental platform connecting homeowners and renters with features like bookings, reviews, and real-time chat.",
      tags: ["MERN Stack", "Framer Motion", "Redux", "MongoDB"],
      liveLink: "https://example.com",    // <-- Update this later with real demo link if you have
      githubLink: "https://github.com",    // <-- Update this later with real GitHub repo link
      background: "bg-gradient-to-br from-sunset-50 to-sunset-100",
    }
  ];
  
  

  return (
    <section id="projects" className="py-20 section-padding gradient-bg">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and expertise.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col h-full"
            >
              <motion.div
                className={`rounded-2xl overflow-hidden shadow-md ${project.background} h-full flex flex-col`}
                variants={hoverCard}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-white/80 text-sm px-2 py-1 rounded-full border border-sunset-200 transition-all duration-300 hover:border-sunset-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sunset-500 hover:text-sunset-600 font-medium text-sm inline-flex items-center transition-all duration-300"
                  >
                    Live Demo
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-sunset-500 font-medium text-sm inline-flex items-center transition-all duration-300"
                  >
                    GitHub
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
