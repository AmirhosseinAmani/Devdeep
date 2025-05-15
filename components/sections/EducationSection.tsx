"use client";

import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    id: 1,
    institution: "Istinye University",
    degree: "Computer Engineering",
    period: "2024 - Present",
    location: "Istanbul, Turkey",
    description: "Focusing on software development, algorithms, and computer systems.",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    id: 2,
    institution: "Allameh Helli School",
    degree: "High School Diploma",
    period: "2009 - 2022",
    location: "Tabriz, Iran",
    description: "Specialized in mathematics and computer science with honors.",
    icon: <GraduationCap className="h-6 w-6" />
  }
];

const certificates = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2023",
    description: "Comprehensive certification in responsive web design principles and practices."
  },
  {
    id: 2,
    title: "Cybersecurity Strategies",
    issuer: "Istinye University",
    date: "2024",
    description: "Certificate in cybersecurity fundamentals and strategic implementation."
  }
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm font-medium mb-6 flex items-center gap-2"
            >
              <GraduationCap className="h-4 w-4 text-primary" />
              Academic Background
            </motion.h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                  className="relative pl-6"
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-0 top-6 w-px h-full bg-border/50"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-primary/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">{item.institution}</h4>
                    <p className="text-xs text-muted-foreground">{item.degree}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm font-medium mb-6 flex items-center gap-2"
            >
              <Award className="h-4 w-4 text-primary" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                  className="p-4 bg-muted/50 rounded-lg"
                >
                  <h4 className="text-sm font-medium">{cert.title}</h4>
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}