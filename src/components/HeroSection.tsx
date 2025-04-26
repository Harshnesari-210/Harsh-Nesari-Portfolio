
import { motion } from "framer-motion";
import { fadeIn, textReveal, staggerContainer } from "../utils/animations";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg section-padding relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-32 left-1/4 w-64 h-64 rounded-full bg-highlight/5 blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-64 h-64 rounded-full bg-highlightDark/5 blur-3xl"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="container mx-auto text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 
          className="text-lg md:text-xl font-medium mb-4 text-muted-foreground"
          variants={textReveal}
        >
          Hello, I am
        </motion.h4>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-highlight to-highlightDark bg-clip-text text-transparent"
          variants={textReveal}
        >
          Harsh Nesari
        </motion.h1>
        
        <motion.div 
          className="mb-8"
          variants={fadeIn}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Turning ideas into clean code and clean UI – one pixel at a time.
          </h2>
        </motion.div>
        
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          variants={textReveal}
        >
          A passionate developer who loves creating elegant solutions to complex problems.
          Focused on building intuitive and performant applications with modern technologies.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          variants={fadeIn}
        >
          <motion.div 
            className="py-1 px-4 border border-border rounded-full text-sm bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            Focused Learner
          </motion.div>
          <motion.div 
            className="py-1 px-4 border border-border rounded-full text-sm bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            DSA & Backend Developer
          </motion.div>
          <motion.div 
            className="py-1 px-4 border border-border rounded-full text-sm bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            AI & Cloud Explorer
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a 
            href="#about"
            className="inline-block"
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
