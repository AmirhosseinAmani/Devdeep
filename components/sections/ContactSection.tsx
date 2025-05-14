"use client";

import { useRef, useState } from 'react';
import { motion } from '@/lib/motion';
import { useInView } from '@/lib/motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  Github,
  Globe,
  Lightbulb,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(6, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "amiramani8384@gmail.com",
      href: "mailto:amiramani8384@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+90 536 912 1434",
      href: "tel:+905369121434"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Istanbul, Turkey",
      href: "https://maps.google.com/?q=Istanbul,Turkey"
    }
  ];

  const socialLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Gmail",
      href: "mailto:amiramani8384@gmail.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/amirhossein-amani-86a980330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/amirhosyn.__"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/AmirhosseinAmani"
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Let's Create Something Amazing
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 bg-muted/50 rounded-lg backdrop-blur-sm border border-primary/10">
              <Form {...form}>
                <form action="https://formsubmit.co/amiramani8384@gmail.com" method="POST" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-background/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} className="bg-background/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="bg-background/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-medium">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} className="bg-background/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[120px] resize-none bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⚡</span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group backdrop-blur-sm border border-primary/10"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-muted/50 rounded-lg backdrop-blur-sm border border-primary/10">
              <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-background/50 transition-colors group backdrop-blur-sm border border-primary/10"
                      >
                        <span className="text-primary group-hover:scale-110 transition-transform">
                          {link.icon}
                        </span>
                        <span className="sr-only">{link.label}</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>{link.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg backdrop-blur-sm border border-primary/10">
              <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Let's Work Together
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm currently available for freelance work and exciting project collaborations. 
                If you have a project in mind, let's discuss how we can bring it to life.
              </p>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" onClick={() => window.open('https://calendly.com/amiramani8384', '_blank')} className="group">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Schedule a Call
                  </span>
                </Button>
                <Button size="sm" onClick={() => window.open('https://github.com/AmirhosseinAmani', '_blank')} className="group">
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    View My Work
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}