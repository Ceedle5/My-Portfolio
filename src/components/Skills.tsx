import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Code2,
  Braces,
  Atom,
  Hexagon,
  Server,
  Database,
  Cloud,
  GitBranch,
  CloudCog,
  Figma,
  Settings,
  Palette,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Atom },
      { name: "TypeScript", icon: Braces },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Next.js", icon: LayoutDashboard },
      { name: "Vue.js", icon: Code2 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Hexagon },
      { name: "Python", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "AWS", icon: CloudCog },
      { name: "Figma", icon: Figma },
      { name: "CI/CD", icon: Settings },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-5 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-2xl shadow-lg bg-card border border-border 
                         hover:shadow-xl hover:-translate-y-1 transition-all 
                         backdrop-blur-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-base px-4 py-2 flex items-center gap-2 
                                 hover:border-primary hover:scale-105 
                                 transition-all duration-200"
                    >
                      <skill.icon className="w-4 h-4 text-primary" />
                      {skill.name}
                    </Badge>
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
