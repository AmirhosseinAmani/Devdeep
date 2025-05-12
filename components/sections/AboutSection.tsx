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
      className="py-20 md:py-28 bg-card"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Amirhossein Amani</h3>
            <p className="text-muted-foreground">
              I am a creative Frontend Developer and Computer Engineering student based in Istanbul, Turkey. 
              With extensive experience in UI/UX design and development, I've successfully led multiple high-impact projects
              across various industries.
            </p>
            <p className="text-muted-foreground">
              Throughout my career, I've demonstrated a strong ability to bridge the gap between design and development,
              consistently delivering solutions that drive significant improvements in user engagement and business metrics.
              My work has resulted in measurable success, including 68% increase in user engagement and 45% enhancement
              in market recognition for various clients.
            </p>
            <p className="text-muted-foreground">
              Currently, as the Founder & Creative Director of Lorcent, I'm focused on delivering innovative B2B tech
              solutions while continuing to expand my expertise in computer engineering at Istinye University.
            </p>

            <div className="pt-4">
              <Button className="flex items-center gap-2">
                <FileText size={18} />
                Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Languages */}
            <div className="bg-muted p-6 rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Persian</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full w-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Turkish</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Azari</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">English</span>
                      <span className="text-sm text-muted-foreground">Professional</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full w-[85%] bg-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Skills */}
            <div className="bg-muted p-6 rounded-xl border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Development Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Frontend</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Backend & Other</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
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