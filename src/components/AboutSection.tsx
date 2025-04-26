
import { motion } from "framer-motion";
import { slideUp, staggerContainer, techStackAnimation } from "../utils/animations";

const AboutSection = () => {
  const techStack = [
    { name: "HTML", icon: "html.svg", color: "bg-orange-100 text-orange-600" },
    { name: "Tailwind CSS", icon: "tailwind.svg", color: "bg-blue-100 text-blue-600" },
    { name: "JavaScript", icon: "javascript.svg", color: "bg-yellow-100 text-yellow-600" },
    { name: "React.js", icon: "react.svg", color: "bg-blue-100 text-blue-500" },
    { name: "Framer Motion", icon: "framer.svg", color: "bg-purple-100 text-purple-600" },
    { name: "Flask", icon: "flask.svg", color: "bg-green-100 text-green-600" },
    { name: "Node.js", icon: "node.svg", color: "bg-green-100 text-green-700" },
    { name: "MongoDB", icon: "mongodb.svg", color: "bg-green-100 text-green-600" },
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8"
        >
          {/* About Me Section */}
          <motion.div
            variants={slideUp}
            className="flex flex-col justify-center"
          >
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

          {/* Tech Stack Section */}
          <motion.div
            variants={slideUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Tech Stack</h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={techStackAnimation}
                  whileHover={{ scale: 1.05 }}
                  className={`tech-icon rounded-xl p-4 flex flex-col items-center justify-center ${tech.color}`}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="currentColor" fillOpacity="0.2" />
                      <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
