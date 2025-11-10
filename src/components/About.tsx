import profilePhoto from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl relative">
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-[0_8px_32px_hsl(220_26%_4%/0.6)] animate-fade-in-up relative overflow-visible">
          
          {/* Floating profile photo */}
          <div className="absolute -top-16 -right-16 w-36 h-36 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl ring-4 ring-primary/10">
              <img 
                src={profilePhoto} 
                alt="Diopet C. Mascariña - Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <div className="md:flex-1">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
                <p>
                  I'm a passionate developer who transforms complex challenges into clean, 
                  elegant, and user-friendly solutions. With experience in both frontend and 
                  backend technologies, I craft products that are not only functional but also delightful to use.
                </p>
                <p>
                  My tech journey began with curiosity and has grown into a career dedicated 
                  to creating meaningful digital experiences. I prioritize writing maintainable 
                  code, staying current with industry trends, and continuously learning new tools and frameworks.
                </p>
                <p>
                  Outside of coding, I enjoy exploring emerging technologies, contributing 
                  to open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
