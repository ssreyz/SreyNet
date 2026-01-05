"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Terminal, Database, Cpu, CloudCog, ChevronRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Weather-CloudBridge",
      description: "Serverless IoT pipeline with ESP32 publishing real-time environmental data to AWS IoT Core via MQTT protocol. Lambda functions process sensor streams and persist to DynamoDB.",
      tech: ["ESP32", "AWS IoT Core", "Lambda", "DynamoDB", "MQTT"],
      github: "https://github.com/ssreyz/Weather-CloudBridge",
      metrics: "Real-time streaming • Event-driven architecture",
      category: "IoT/Cloud"
    },
    {
      title: "PDF Buddy",
      description: "AI-powered document intelligence platform leveraging Gemini API and LangChain for semantic PDF analysis, summarization, and natural language querying.",
      tech: ["Next.js", "Gemini API", "LangChain", "Node.js"],
      github: "https://github.com/ssreyz/pdf-buddy",
      metrics: "Production-grade • Async processing",
      category: "AI/ML"
    },
    {
      title: "Calcharo Calculator",
      description: "Modern web-based calculator application with intuitive UI and responsive design. Implements core arithmetic operations with real-time calculation display and error handling.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/ssreyz/Calcharo",
      metrics: "Responsive design • Real-time computation",
      category: "Web"
    },
    {
      title: "Simon Memory Game",
      description: "Interactive memory game with progressive difficulty mechanics, visual animations, and audio feedback. Features sequence generation, pattern recognition validation, and score tracking system.",
      tech: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      github: "https://github.com/ssreyz/Simon-Game",
      metrics: "Progressive difficulty • Real-time validation",
      category: "Web"
    },
    {
      title: "Diabetes Prediction Model",
      description: "Machine learning classifier utilizing Support Vector Machines with optimized hyperparameters, feature engineering, and cross-validation techniques.",
      tech: ["Python", "Scikit-learn", "SVM", "Pandas"],
      github: "https://github.com/ssreyz/Diabetes-Prediction",
      metrics: "79% accuracy • 8% improvement over baseline",
      category: "ML"
    },
    {
      title: "SONAR Rock and Mine Prediction",
      description: "Binary classification system using sonar signal data to distinguish between rocks and metal mines. Implemented logistic regression with feature engineering and data normalization techniques for submarine object detection.",
      tech: ["Python", "Scikit-learn", "Logistic Regression", "Pandas"],
      github: "https://github.com/ssreyz/SONAR-Rock-and-Mine-Prediction",
      metrics: "Binary classification • Sonar signal processing",
      category: "ML"
    },
    {
      title: "Pizza Sales Analysis",
      description: "Data engineering pipeline analyzing 48.6K transactions across 12-month period. SQL-based revenue optimization and customer behavior pattern recognition.",
      tech: ["MySQL", "SQL", "Data Analytics"],
      github: "https://github.com/ssreyz/Crusty-pizza-sales-analysis",
      metrics: "48.6K records • Revenue insights",
      category: "Data"
    }
  ];

  const techStack = [
    { category: "Languages", items: ["Python", "JavaScript", "C/C++", "SQL"], icon: Terminal },
    { category: "Frameworks", items: ["React.js", "Next.js", "Node.js"], icon: Database },
    { category: "ML/AI", items: ["Scikit-learn", "Pandas", "NumPy", "SVM", "NLTK"], icon: Cpu },
    { category: "IoT/Embedded", items: ["ESP32", "Arduino", "MQTT", "Sensors"], icon: Cpu },
    { category: "Cloud", items: ["AWS IoT Core", "Lambda", "DynamoDB", "Azure"], icon: CloudCog },
    { category: "Database", items: ["MySQL", "MongoDB"], icon: Database }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Cursor glow effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent)',
          left: mousePos.x - 192,
          top: mousePos.y - 192
        }}
      ></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-cyan-500/20 backdrop-blur-xl bg-black/50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xl font-mono text-cyan-400">SRIJANI.DEY</span>
          </div>
          <nav className="flex gap-8 text-sm font-mono">
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">PROJECTS</a>
            <a href="#tech" className="text-gray-400 hover:text-cyan-400 transition-colors">TECH</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-sm font-mono text-cyan-400">
              <div className="h-px w-16 bg-cyan-400"></div>
              <span>ELECTRONICS & COMMUNICATION ENGINEER</span>
            </div>
            
            <h1 className="text-7xl font-bold tracking-tight">
              Building the future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                embedded intelligence
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Specializing in cloud-native IoT architectures, machine learning pipelines, and 
              full-stack development. AWS certified with hands-on experience in serverless computing, 
              embedded systems, and AI-powered applications.
            </p>

            <div className="flex gap-4 pt-8">
              <a href="mailto:srijani.258@gmail.com" className="group flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 transition-all font-mono text-sm cursor-pointer">
                <Mail size={18} />
                GET IN TOUCH
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/ssreyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 px-8 py-4 transition-all font-mono text-sm cursor-pointer">
                <Github size={18} />
                GITHUB
              </a>
            </div>

            <div className="flex gap-8 pt-8 text-sm font-mono">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={16} />
                <span>Kolkata, IN</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Award size={16} />
                <span>AWS Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Terminal size={16} />
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-cyan-500/20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            {[
              { label: "PROJECTS", value: "10+" },
              { label: "CERTIFICATIONS", value: "3" },
              { label: "TECH STACK", value: "20+" },
              { label: "CGPA", value: "7.76" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 font-mono">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-2 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <h2 className="text-4xl font-bold font-mono text-cyan-400">PROJECTS</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveProject(idx)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative border border-gray-800 hover:border-cyan-500/50 bg-gray-900/20 backdrop-blur transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-mono text-gray-600">0{idx + 1}</span>
                        <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 px-3 py-1">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg mb-4 max-w-3xl">{project.description}</p>
                      <p className="text-sm text-cyan-400 font-mono mb-4">{project.metrics}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-mono bg-gray-800/50 text-gray-400 border border-gray-700 px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-cyan-400 transition-all duration-300"
                     style={{ width: activeProject === idx ? '100%' : '0%' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-32 px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <h2 className="text-4xl font-bold font-mono text-cyan-400">TECH_STACK</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((stack, idx) => {
              const Icon = stack.icon;
              return (
                <div key={idx} className="border border-gray-800 hover:border-cyan-500/50 bg-gray-900/20 p-8 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-cyan-400" size={24} />
                    <h3 className="text-lg font-mono text-cyan-400">{stack.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {stack.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm font-mono">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-mono text-cyan-400 mb-8">CERTIFICATIONS</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 bg-gray-900/20 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold mb-2">AWS Certified Cloud Practitioner</h4>
                  <p className="text-sm text-gray-500 font-mono">Amazon Web Services • 2025</p>
                </div>
                <Award className="text-cyan-400" size={24} />
              </div>
            </div>
            <div className="border border-gray-800 bg-gray-900/20 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold mb-2">AWS IoT Foundations</h4>
                  <p className="text-sm text-gray-500 font-mono">Amazon Web Services • 2025</p>
                </div>
                <Award className="text-cyan-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 border-t border-cyan-500/20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's build something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              extraordinary
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Open to opportunities in software engineering, IoT development, and cloud-based embedded systems.
          </p>
          <div className="flex justify-center gap-6 flex-wrap relative z-10">
            <a 
              href="mailto:srijani.258@gmail.com" 
              className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 transition-all font-mono text-sm cursor-pointer relative z-10"
              onClick={() => window.location.href = 'mailto:srijani.258@gmail.com'}
            >
              <Mail size={18} />
              EMAIL
            </a>
            <a 
              href="https://linkedin.com/in/srijani-dey" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 border border-gray-800 hover:border-cyan-400 px-8 py-4 transition-all font-mono text-sm cursor-pointer relative z-10"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://linkedin.com/in/srijani-dey', '_blank');
              }}
            >
              <Linkedin size={18} />
              LINKEDIN
            </a>
            <a 
              href="https://github.com/ssreyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 border border-gray-800 hover:border-cyan-400 px-8 py-4 transition-all font-mono text-sm cursor-pointer relative z-10"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://github.com/ssreyz', '_blank');
              }}
            >
              <Github size={18} />
              GITHUB
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-mono text-gray-600">
          <div>© 2026 SRIJANI DEY</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}