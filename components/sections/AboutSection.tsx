"use client";

import { useInView } from '@/lib/motion';
import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { Button } from '@/components/ui/button';
import { FileText, Globe, Code } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-28 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2">About Me</h3>
              <p className="text-sm text-muted-foreground">
                I'm a Creative Frontend Developer and UI/UX Designer with a unique background in Digital Therapeutics and AI development. 
                My experience in healthcare technology has given me a deep understanding of user needs and accessibility requirements, 
                which I now apply to create intuitive and engaging web experiences. I combine my technical expertise in frontend development 
                with my passion for design to build responsive, accessible, and visually stunning websites.
              </p>
              <p className="text-sm text-muted-foreground">
                Throughout my career, I've demonstrated expertise in building innovative solutions that drive 
                significant improvements in user engagement and business metrics. My work has resulted in 
                measurable success, including 45% increase in patient engagement and 155% enhancement in 
                organic traffic for various clients.
              </p>
            </div>

            <div className="pt-4">
              <Button className="flex items-center gap-2" size="sm">
                <FileText size={16} />
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Languages */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-medium">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium">Persian</span>
                      <span className="text-xs text-muted-foreground">Native</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full">
                      <div className="h-full w-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium">Turkish</span>
                      <span className="text-xs text-muted-foreground">Fluent</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium">Azari</span>
                      <span className="text-xs text-muted-foreground">Fluent</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium">English</span>
                      <span className="text-xs text-muted-foreground">Professional</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full">
                      <div className="h-full w-[85%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-medium">Development Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-medium">Frontend</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium">Backend & Other</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>C++</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}