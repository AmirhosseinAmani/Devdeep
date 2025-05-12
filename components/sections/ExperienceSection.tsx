"use client";

import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import {
  Briefcase,
  ArrowRight,
  Code,
  Layout,
  Users
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Founder & Creative Director",
    company: "Lorcent",
    period: "2024 - Present",
    location: "Istanbul, Turkey",
    description: "Established a B2B tech brand focused on delivering innovative, client-specific design solutions.",
    responsibilities: [
      "Led multidisciplinary teams in the successful execution of complex projects",
      "Developed strategic frameworks that addressed intricate business challenges",
      "Built and maintained strong client relationships through transparent communication"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Kalleh (Delis)",
    period: "2023 - 2024",
    location: "Tehran, Iran",
    description: "Led the design and development of a new sub-brand identity using modern design principles.",
    responsibilities: [
      "Enhanced market recognition by 45% through cohesive and strategic branding",
      "Collaborated with cross-functional teams to ensure consistency across all digital channels",
      "Utilized iterative feedback to continuously refine product designs"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Navixa",
    period: "2023 - 2024",
    location: "Istanbul, Turkey",
    description: "Designed user-friendly interfaces for a crypto platform with a focus on clarity and simplicity.",
    responsibilities: [
      "Boosted user engagement by 68% by implementing data-driven design improvements",
      "Worked closely with developers to ensure seamless integration across platforms",
      "Optimized design for both mobile and desktop environments"
    ]
  },
  {
    id: 4,
    title: "Lead Developer",
    company: "TechVista Inc.",
    period: "2023 - 2024",
    location: "Remote",
    description: "Led the complete overhaul of an e-commerce platform, focusing on performance and user experience.",
    responsibilities: [
      "Integrated Next.js and Supabase to build a scalable, high-performance platform",
      "Improved page load speed by 65%, directly enhancing SEO performance",
      "Achieved 42% increase in conversions through optimized user experience"
    ]
  },
  {
    id: 5,
    title: "UX Designer",
    company: "MediSync Solutions",
    period: "2022 - 2023",
    location: "Remote",
    description: "Designed and developed an intuitive mobile interface for medical tracking.",
    responsibilities: [
      "Achieved 87% user satisfaction rate through intuitive design",
      "Increased user base by 34% through improved accessibility features",
      "Developed detailed wireframes and prototypes for clear developer communication"
    ]
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "FinEdge Capital",
    period: "2022",
    location: "Remote",
    description: "Created a comprehensive analytics dashboard offering real-time data visualization.",
    responsibilities: [
      "Reduced decision-making time by 42% through intuitive dashboard design",
      "Improved analysis accuracy by 27% through real-time data processing",
      "Implemented responsive design for optimal cross-device performance"
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
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-1 w-px h-full bg-border"></div>
              )}
              
              {/* Timeline icon */}
              <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              
              <div className="border border-border rounded-lg p-6 shadow-sm bg-card hover:bg-card/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
                </div>
                
                <p className="mb-4">{exp.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="mt-1 text-primary">
                          {i === 0 ? <Code className="h-4 w-4" /> : 
                           i === 1 ? <Layout className="h-4 w-4" /> :
                           <Users className="h-4 w-4" />}
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}