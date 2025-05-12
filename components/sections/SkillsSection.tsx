"use client";

import { useRef } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import { Code, Palette, Layout, Globe, Cpu, Lightbulb } from 'lucide-react';

const projects = [
  {
    title: "Extend",
    category: "Payment Platform",
    description: "Enhanced commercial payment security and efficiency through UI/UX improvements, increasing transaction volume by 50%",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://paywithextend.com",
    tags: ["Fintech", "UI/UX", "Security"]
  },
  {
    title: "Fiveable",
    category: "Learning Platform",
    description: "Created an engaging platform for AP students, boosting user retention by 60% through innovative UI design",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://fiveable.me",
    tags: ["Education", "Community", "Web App"]
  },
  {
    title: "Trace Genomics",
    category: "Soil Intelligence Platform",
    description: "Developed advanced soil testing platforms improving accuracy by 40% through intuitive data visualization",
    image: "https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://tracegenomics.com",
    tags: ["Agriculture", "Analytics", "ML"]
  },
  {
    title: "Nori",
    category: "Carbon Marketplace",
    description: "Established a transparent marketplace for carbon removal certificates, increasing market participation by 40%",
    image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1280",
    link: "https://nori.com",
    tags: ["Sustainability", "Blockchain", "Marketplace"]
  }
];

const skills = [
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    items: [
      { name: "UI Design", level: 95 },
      { name: "UX Research", level: 90 },
      { name: "Brand Design", level: 85 },
      { name: "Design Systems", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "Wireframing", level: 90 },
    ]
  },
  {
    category: "Development",
    icon: <Code className="h-6 w-6" />,
    items: [
      { name: "React & Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 85 },
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
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio & Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8">Featured Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
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
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <div className="text-primary">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 + index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
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