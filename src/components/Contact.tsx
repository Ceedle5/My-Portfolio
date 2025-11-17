import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>ptc.diopetmascarina@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div>
              <Input
                placeholder="Your Name"
                className="bg-card/50 border-border/50 focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-card/50 border-border/50 focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-card/50 border-border/50 focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(180_78%_52%/0.3)] hover:shadow-[0_0_30px_hsl(180_78%_52%/0.5)] transition-all"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
