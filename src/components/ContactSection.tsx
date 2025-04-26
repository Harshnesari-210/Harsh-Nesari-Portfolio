
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../utils/animations";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    error: boolean;
  }>({
    submitted: false,
    submitting: false,
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: false,
      });
      
      console.log("Form submitted:", formState);
      
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sunset-200 bg-white focus:outline-none focus:ring-2 focus:ring-sunset-400 focus:border-sunset-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sunset-200 bg-white focus:outline-none focus:ring-2 focus:ring-sunset-400 focus:border-sunset-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-sunset-200 bg-white focus:outline-none focus:ring-2 focus:ring-sunset-400 focus:border-sunset-400 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(249, 115, 22, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-sunset-500 hover:bg-sunset-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex justify-center items-center"
              >
                {formStatus.submitting ? (
                  <span className="inline-block animate-spin mr-2">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                ) : null}
                {formStatus.submitting ? "Sending..." : "Send Message"}
              </motion.button>

              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to connect with me on social media or send me an email.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://www.linkedin.com/in/harsh-nesari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-sunset-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </motion.a>
                
                <motion.a
                  href="https://github.com/Harshnesari-210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-sunset-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </motion.a>
                
                <motion.a
                  href="mailto:harshnesari9@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-sunset-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Email
                </motion.a>
              </div>
            </div>

            <motion.div 
              className="p-6 bg-gradient-to-br from-sunset-50 to-sunset-100 rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-medium mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                I usually respond within 24-48 hours. For urgent inquiries, please
                mention it in your message.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
