import { useState, useEffect, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ecommerceImg from "@/assets/ecom.png";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import aiContentImg from "@/assets/project-aicontent.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import ffeImg from "@/assets/ffe.png";
import lambrettaImg from "@/assets/lamretta.png"
import vendorAccreditationImg from "@/assets/vaFrom.png"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // FIXED TYPE
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  // FIXED TYPE
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const projects = [

     {
      title: "FFE Management System",
      description: "A Furniture, Fixture, and Equipment (FFE) management system designed to track assets, monitor allocation and status, and manage inventory records across branches. Includes detailed item history, status workflows, and server-side data handling for large asset datasets.",
      tech: ["CodeIgniter 4", "PHP", "JavaScript", "Bootstrap"],
      demo: "#",
      github: "#",
      image: ffeImg,
    },
    
    {
      title: "Pastry Shop",
      description: "A full-stack e-commerce solution with inventory management, payment integration, and admin dashboard.",
      tech: ["Codeigniter 4", "PHP", "JavaScript", "CSS", "SQL", "XML"],
      demo: "#",
      github: "#",
      image: ecommerceImg,
    },
    
   

      {
      title: "Lambretta Motorcycle Website",
      description: "A modern product showcase website for Lambretta motorcycles featuring model galleries, specifications, and brand highlights. Designed to present scooter models with clean visuals, responsive layouts, and intuitive navigation for customers.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demo: "#",
      github: "#",
      image: lambrettaImg,
    },

        {
        title: "Vendor Accreditation System",
        description: "A web-based vendor accreditation system for registering, validating, and managing supplier information. Features structured forms, document uploads, status tracking, and approval workflows to ensure compliant and organized vendor onboarding.",
        tech: ["CodeIgniter 4", "PHP", "JavaScript", "jQuery", "SQL Server"],
        demo: "#",
        github: "#",
        image: vendorAccreditationImg,
      },

  ];

  // Update currentIndex whenever carousel changes
  useEffect(() => {
    if (!api) return;

    const handler = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", handler);

    return () => {
      api.off("select", handler);
    };
  }, [api]);

  // Autoplay carousel
  useEffect(() => {
    if (!api) return;

    const start = () => {
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    start();
    return () => stop();
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) api.scrollTo(index);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text glow-text">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Showcasing my recent work and creative solutions
        </p>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="mx-auto w-full"
          onMouseEnter={() => {
            if (autoplayRef.current) clearInterval(autoplayRef.current);
          }}
          onMouseLeave={() => {
            if (api) {
              autoplayRef.current = setInterval(() => api.scrollNext(), 5000);
            }
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <div className="h-full">
                  <Card
                    className="glass-card border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden h-full group hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Dialog>
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Maximize2 className="w-8 h-8 text-primary" />
                          </button>
                        </DialogTrigger>
                      </div>
                      <DialogContent className="max-w-4xl w-[95vw] p-2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="flex-1 gradient-primary hover:shadow-lg transition-all"
                          asChild
                        >
                          <a href={project.demo}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-2 border-primary hover:border-blue-400 hover:shadow-lg transition-all"
                          asChild
                        >
                          <a href={project.github}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary shadow-lg"
                    : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
