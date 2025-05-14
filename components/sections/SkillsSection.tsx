"use client";

import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import { Code, Palette, Layout, Globe, Cpu, Lightbulb } from 'lucide-react';

const projects = [
  {
    title: "Biofourmis Health",
    category: "Digital Therapeutics",
    description: "Designed and developed a patient monitoring platform with AI-powered analytics, improving engagement by 45%",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://biofourmis.com",
    tags: ["Healthcare", "AI", "UX Design"]
  },
  {
    title: "GrowthMetrics",
    category: "SEO Platform",
    description: "Created an intuitive SEO dashboard with data visualization, increasing organic traffic by 155%",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://growthmetrics.io",
    tags: ["Analytics", "Dashboard", "UI Design"]
  },
  {
    title: "Cuisine Connect",
    category: "Restaurant Platform",
    description: "Designed a seamless booking system with real-time availability, reducing no-shows by 30%",
    image: "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://cuisineconnect.com",
    tags: ["Booking", "Mobile", "UX Design"]
  },
  {
    title: "Trace Genomics",
    category: "Soil Intelligence",
    description: "Developed an intuitive soil analysis platform with ML integration, improving accuracy by 40%",
    image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://tracegenomics.com",
    tags: ["Agriculture", "ML", "UI/UX"]
  }
];

const skills = [
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 90 },
      { name: "Wireframing", level: 95 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
      { name: "User Testing", level: 85 },
    ]
  },
  {
    category: "Development",
    icon: <Code className="h-6 w-6" />,
    items: [
      { name: "React & Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Git", level: 90 },
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Portfolio & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto"></div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors backdrop-blur-sm border border-primary/10"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1280";
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="mb-1">
                    <span className="text-xs text-primary font-medium">{project.category}</span>
                  </div>
                  <h4 className="text-sm font-medium mb-1">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground backdrop-blur-sm border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 max-w-3xl mx-auto">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
              className="space-y-4 p-6 rounded-lg bg-muted/50 backdrop-blur-sm border border-primary/10"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{skillGroup.icon}</div>
                <h3 className="text-sm font-medium">{skillGroup.category}</h3>
              </div>

              <div className="space-y-3">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 + index * 0.05 }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out rounded-full"
                        style={{ width: isInView ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}