import { motion } from "framer-motion";
import {
  Code2,
  Atom,
  Server,
  Database,
  CloudCog,
  GitBranch,
  Settings,
} from "lucide-react";


import PHPLogo from "/mnt/data/67485799-58e5-41c0-9d38-53c22351afb6.png";
// You would replace the following with your own logo images

import Bootstrap from "@/assets/logos/bootstrap.svg";
import Github from "@/assets/logos/github.svg";
import JS from "@/assets/logos/javascript.svg";
import CSS from "@/assets/logos/css.svg";
import VS from "@/assets/logos/vscode.svg";
import SQL from "@/assets/logos/mssql.svg";
import PHP from "@/assets/logos/php.svg";
import XAMPP from "@/assets/logos/xampp.png";
import JQUERY from "@/assets/logos/jquery.svg";
import MYSQL from "@/assets/logos/mysql.svg";
import CI4 from "@/assets/logos/codeigniter.svg";
import VSCODE from "@/assets/logos/vscode.svg";







const skillsData = [
  { name: "HTML", icon: Code2, color: "text-red-500" },
    { name: "CSS", icon: () => <img src={CSS} alt="Bootstrap" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "" },
    { name: "Bootstrap", icon: () => <img src={Bootstrap} alt="Bootstrap" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "" },
    { name: "JavaScript", icon: () => <img src={JS} alt="JS" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
  { name: "REACT JS", icon: Atom, color: "text-cyan-400" },
    { name: "Github", icon: () => <img src={Github} alt="Github" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "VS Code", icon: () => <img src={VS} alt="Github" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "MSSQL", icon: () => <img src={SQL} alt="SQL" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "PHP", icon: () => <img src={PHP} alt="PHP" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" }, 
    { name: "JQUERY", icon: () => <img src={JQUERY} alt="JQUERY" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" }, 

];


const ToolsData = [
    { name: "Github", icon: () => <img src={Github} alt="Github" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "VS Code", icon: () => <img src={VS} alt="Github" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "MSSQL", icon: () => <img src={SQL} alt="SQL" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "XAMPP", icon: () => <img src={XAMPP} alt="XAMPP" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "MYSQL", icon: () => <img src={MYSQL} alt="MYSQL" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },
    { name: "CODEIGNITER", icon: () => <img src={CI4} alt="CI4" className="w-12 h-12 md:w-16 md:h-16 mb-2" />, color: "white" },



];


const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-neutral-800/50"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <Icon className={`w-12 h-12 md:w-16 md:h-16 mb-2 ${color}`} />
    <p className="text-white text-sm md:text-base font-semibold uppercase tracking-wider mt-2">
      {name}
    </p>
  </motion.div>
);

export default function Skills() {
  return (
    // Set a solid dark background for the section to mimic the image's dark container
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      
   
      <div className="absolute inset-0 z-0 opacity-10">
      </div>


      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl top-0 right-0 animate-glow" />
        <div className="absolute w-80 h-80 bg-accent/20 rounded-full blur-3xl bottom-0 left-0 animate-glow" />
      </div>

      
      
      <div className="container mx-auto relative z-10 max-w-6xl">


           {/* Floating decorative elements */}
                <div className="absolute top-10 -right-8 w-12 h-12 bg-primary/30 rounded-lg rotate-12 animate-bounce border border-primary/50 shadow-lg" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-20 -left-8 hidden md:block">
                  <div className="flex gap-1">
                    <div className="w-2 h-12 bg-primary rounded-full shadow-md"></div>
                    <div className="w-2 h-6 bg-accent/70 rounded-full shadow-md"></div>
                  </div>
                </div>
            {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-20 -translate-x-20"></div>
          
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 gradient-text glow-text">
            What I do
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            I am a Software Developer and currently Residing at Road 10 Taytay Rizal. IT graduate (BSIT) with a strong interest in programming and software development
          </p>
        </motion.div>
        
        
        <div className="relative mt-12">

          
          
          {/* Vertical label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden sm:block">
            <span className="inline-block transform -rotate-90 origin-center text-lg font-bold uppercase tracking-widest gradient-text glow-text">
              Skills
            </span>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-y-10 gap-x-6 py-12 place-items-center">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </div>


         
        <div className="relative ">
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden sm:block">
            <span className="inline-block transform -rotate-90 origin-center text-lg font-bold uppercase tracking-widest gradient-text glow-text">
              Tools
            </span>
          </div>

           <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/70 rounded-2xl rotate-12 shadow-lg"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/60 rounded-2xl -rotate-12 shadow-lg"></div>


          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-y-10 gap-x-6 py-12 place-items-center">
            {ToolsData.map((tools, index) => (
              <SkillCard
                key={tools.name}
                name={tools.name}
                icon={tools.icon}
                color={tools.color}
                index={index}
              />
            ))}
          </div>
        </div>
         

      </div>





    </section>
  );
}