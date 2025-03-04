import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Data Structures Visualizer",
    description: "Interactive visualization of common data structures and algorithms",
    tech: ["React", "TypeScript", "D3.js"],
    githubUrl: "#",
  },
  {
    title: "Course Notes App",
    description: "A markdown-based note-taking app with code highlighting and LaTeX support",
    tech: ["Next.js", "TailwindCSS", "Firebase"],
    demoUrl: "#",
  },
  {
    title: "Study Timer",
    description: "Pomodoro timer with customizable study/break intervals and statistics",
    tech: ["React", "ChartJS", "LocalStorage"],
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-8 ml-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8">Student Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-[300px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 bg-black/20 backdrop-blur-sm border-border/50 p-6 backface-hidden">
          <h3 className="text-xl font-bold text-orange-500 mb-4">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 bg-black/20 backdrop-blur-sm border-border/50 p-6 backface-hidden [transform:rotateY(180deg)]">
          <h4 className="text-lg font-semibold text-orange-500 mb-4">Technologies Used</h4>
          <ul className="space-y-2 mb-6">
            {project.tech.map((tech) => (
              <li key={tech} className="text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-auto">
            {project.githubUrl && (
              <a href={project.githubUrl} className="text-sm text-orange-500 hover:underline">
                View Source
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} className="text-sm text-orange-500 hover:underline">
                Live Demo
              </a>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}