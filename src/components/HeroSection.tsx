
import { motion } from "framer-motion";
import { fadeIn, textReveal, staggerContainer } from "../utils/animations";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-32 left-1/4 w-64 h-64 rounded-full bg-sunset-200/20 blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-64 h-64 rounded-full bg-sunset-300/20 blur-3xl"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="container mx-auto text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 
          className="text-lg md:text-xl font-medium mb-4 text-sunset-600"
          variants={textReveal}
        >
          Hello, I am
        </motion.h4>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-sunset-400 to-sunset-600 bg-clip-text text-transparent"
          variants={textReveal}
        >
          Harsh Nesari
        </motion.h1>
        
        <motion.div 
          className="mb-8"
          variants={fadeIn}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
            Turning ideas into clean code and clean UI – one pixel at a time.
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          variants={textReveal}
        >
          A passionate developer who loves creating elegant solutions to complex problems.
          Focused on building intuitive and performant applications with modern technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={fadeIn}
        >
          {["WEB AI developer","UI/UX designer" ,"Backend Developer"].map((tag, index) => (
            <motion.div
              key={tag}
              className="py-2 px-6 border border-sunset-200 rounded-full text-sm bg-white/50 backdrop-blur-sm hover:border-sunset-400 transition-colors hover:animate-glow"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a 
            href="#about"
            className="inline-block text-sunset-500 hover:text-sunset-600"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
