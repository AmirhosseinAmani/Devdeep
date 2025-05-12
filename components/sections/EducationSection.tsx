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
    location: "Istanbul, Turkey",
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
      className="py-20 md:py-28 bg-muted/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center gap-2"
            >
              <GraduationCap className="h-6 w-6" />
              Academic Background
            </motion.h3>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="relative pl-8"
                >
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-0 top-8 w-px h-full bg-border"></div>
                  )}
                  
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
                    {item.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">{item.institution}</h4>
                    <p className="text-muted-foreground">{item.degree}</p>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                    
                    <p className="mt-2 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center gap-2"
            >
              <Award className="h-6 w-6" />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="border border-border rounded-lg p-5 bg-card"
                >
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}