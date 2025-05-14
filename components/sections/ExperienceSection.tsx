"use client";

import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import {
  Briefcase,
  ArrowRight,
  Code,
  Layout,
  Users,
  Calendar,
  MapPin
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Digital Therapeutics Specialist",
    company: "Biofourmis",
    period: "2022 - 2023",
    location: "Remote",
    description: "Integrated wearable biosensors with AI analytics to personalize care.",
    responsibilities: [
      "Helped launch remote monitoring systems, increasing patient engagement by 45%",
      "Integrated AI analytics with wearable biosensors for personalized care",
      "Collaborated with cross-functional teams to improve patient outcomes"
    ]
  },
  {
    id: 2,
    title: "SEO Optimization Campaign",
    company: "GrowthMetrics",
    period: "2021 - 2022",
    location: "Remote",
    description: "Led comprehensive SEO optimization strategies for client success.",
    responsibilities: [
      "Increased organic traffic by 155% through targeted SEO strategies",
      "Reduced bounce rate by 34%, generated 62% more leads",
      "Developed and implemented data-driven SEO campaigns"
    ]
  },
  {
    id: 3,
    title: "Restaurant Booking System Developer",
    company: "Cuisine Connect",
    period: "2020",
    location: "Remote",
    description: "Developed innovative cross-device booking system with integrated payments.",
    responsibilities: [
      "Raised reservations by 87%, reduced no-shows by 42%",
      "Delivered wireframes to guide system development",
      "Implemented integrated payment solutions"
    ]
  },
  {
    id: 4,
    title: "Soil Intelligence Platform Developer",
    company: "Trace Genomics",
    period: "2019 - 2020",
    location: "Remote",
    description: "Built DNA-based soil analysis tools with machine learning integration.",
    responsibilities: [
      "Built DNA-based soil analysis tools with ML, increasing accuracy by 40%",
      "Developed advanced analytics platform for soil intelligence",
      "Integrated machine learning algorithms for improved accuracy"
    ]
  },
  {
    id: 5,
    title: "Connected Worker Platform Developer",
    company: "Augmentir",
    period: "2017 - 2018",
    location: "Remote",
    description: "Developed AI tools to enhance industrial worker efficiency.",
    responsibilities: [
      "Built AI tools to guide industrial workers, increasing efficiency by 35%",
      "Implemented real-time monitoring and guidance systems",
      "Optimized worker performance through AI-driven insights"
    ]
  },
  {
    id: 6,
    title: "On-Demand Moving Platform Developer",
    company: "Ghostruck",
    period: "2016 - 2017",
    location: "Remote",
    description: "Created innovative delivery app with real-time tracking capabilities.",
    responsibilities: [
      "Developed delivery app with real-time tracking, increasing bookings by 45%",
      "Implemented location-based services and tracking features",
      "Optimized user experience for both customers and drivers"
    ]
  },
  {
    id: 7,
    title: "Code Risk Platform Developer",
    company: "Apiiro",
    period: "2015 - 2016",
    location: "Remote",
    description: "Built ML-based platform for comprehensive app security risk assessment.",
    responsibilities: [
      "Built ML-based platform for app security risk assessment",
      "Reduced vulnerabilities by 40% through automated analysis",
      "Developed advanced security assessment algorithms"
    ]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-6 w-px h-full bg-border/50"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 flex items-center justify-center w-3 h-3 rounded-full bg-primary/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
              
              <div className="p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10 hover:bg-muted/70 transition-colors">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-sm font-medium">{experience.title}</h3>
                    <p className="text-xs text-muted-foreground">{experience.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}