
import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Staggered child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Animation for text reveal
export const textReveal: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", 
      stiffness: 100
    }
  }
};

// Animation for tech stack icons
export const techStackAnimation: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

// Hover animation for project cards
export const hoverCard: Variants = {
  rest: { 
    scale: 1,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2,
      type: "tween",
      ease: "easeIn" 
    }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)", 
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};

// Parallax effect for background elements
export const parallaxEffect: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    },
  }
};
