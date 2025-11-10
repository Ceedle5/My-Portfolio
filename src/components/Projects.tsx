import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import aiContentImg from "@/assets/project-aicontent.jpg";
import weatherImg from "@/assets/project-weather.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
      image: ecommerceImg,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and analytics dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
      demo: "#",
      github: "#",
      image: taskManagerImg,
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool leveraging modern LLMs for generating marketing copy and social media posts.",
      tech: ["React", "Python", "FastAPI", "OpenAI"],
      demo: "#",
      github: "#",
      image: aiContentImg,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts.",
      tech: ["Vue.js", "Tailwind", "Weather API"],
      demo: "#",
      github: "#",
      image: weatherImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card border-border/50 hover:shadow-[0_0_30px_hsl(180_78%_52%/0.2)] transition-all duration-300 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Dialog>
                <div className="relative group overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
