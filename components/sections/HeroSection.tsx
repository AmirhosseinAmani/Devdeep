"use client";

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
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
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-gradient-to-b from-background to-muted"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="text-lg md:text-xl font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Amirhossein Amani
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Creative Frontend Developer & Computer Engineering Student
          </h3>
          <p className="text-muted-foreground max-w-lg mb-8">
            Founder of Lorcent and experienced UI/UX designer with a proven track record
            of creating impactful digital experiences that drive business growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToAbout}>
              Learn More
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full aspect-square mx-auto max-w-md lg:max-w-full rounded-xl bg-card p-8 border border-border"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Latest Achievements</h3>
              <p className="text-sm text-muted-foreground">Recent highlights from my professional journey</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium">Lorcent Launch</h4>
                <p className="text-sm text-muted-foreground">Successfully established B2B tech brand delivering innovative solutions</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium">Navixa Platform</h4>
                <p className="text-sm text-muted-foreground">68% increase in user engagement through data-driven design</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium">Kalleh (Delis) Rebrand</h4>
                <p className="text-sm text-muted-foreground">45% enhancement in market recognition through strategic branding</p>
              </div>
            </div>
          </div>
        </motion.div>
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
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}