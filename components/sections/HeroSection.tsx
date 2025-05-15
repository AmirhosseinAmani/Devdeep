"use client";

import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative pt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-lg font-medium text-muted-foreground mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Amirhossein Amani
            </h1>
            <h3 className="text-xl text-muted-foreground mb-6">
              Creative Frontend Developer & UI/UX Designer
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about crafting unique digital experiences through creative coding and innovative design.
              Specialized in building visually stunning, interactive websites that combine artistic expression
              with technical excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              key="design"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10 hover:bg-muted/70 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2 text-primary">UI/UX Design</h3>
              <p className="text-2xl font-bold text-foreground mb-1">100+ Projects</p>
              <p className="text-sm text-muted-foreground">Crafting intuitive user experiences</p>
            </motion.div>
            
            <motion.div
              key="development"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10 hover:bg-muted/70 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2 text-primary">Frontend Development</h3>
              <p className="text-2xl font-bold text-foreground mb-1">50+ Websites</p>
              <p className="text-sm text-muted-foreground">Building responsive web applications</p>
            </motion.div>
            
            <motion.div
              key="interaction"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10 hover:bg-muted/70 transition-colors"
            >
              <h3 className="text-sm font-medium mb-2 text-primary">Interactive Design</h3>
              <p className="text-2xl font-bold text-foreground mb-1">200+ Animations</p>
              <p className="text-sm text-muted-foreground">Creating engaging user interactions</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </span>
            </Button>
            <Button variant="outline" size="lg" className="group">
              <span className="flex items-center gap-2">
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          className="rounded-full p-2"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  );
}