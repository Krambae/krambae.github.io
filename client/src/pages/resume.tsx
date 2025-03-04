import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const experiences = [
  {
    role: "Information Technology Specialist (Internship)",
    company: "Demand-ITS - Ottawa, ON",
    period: "April 2024 - August 2024",
    description: "Second-year internship assisting clients with technical and software issues. Worked collaboratively with IT technicians to diagnose and resolve issues efficiently. Contributed to ticket resolution and server management.",
  },
  {
    role: "Information Technology Specialist (Internship)",
    company: "Demand-ITS",
    period: "May 2023 - August 2023",
    description: "Assisted clients remotely and in person with technical issues. Set up SSL configurations on private Linux web-based servers.",
  },
  {
    role: "Automotive Parts Associate",
    company: "Canadian Tire",
    period: "August 2020 - Present",
    description: "Assist customers in finding proper parts, provide automotive tips and recommendations. Maintain high customer satisfaction and positive feedback.",
  },
  {
    role: "Computer Technician (COOP)",
    company: "RB Computing",
    period: "February 2020 - March 2020",
    description: "Assisted in hardware installation for clients. Diagnosed systems to clear known issues. Worked collaboratively with technicians.",
  },
];

const skills = [
  {
    category: "Technical Skills",
    items: ["Java", "SQL", "MySQL", "Git", "Linux"],
  },
  {
    category: "Development Tools",
    items: ["Eclipse", "IntelliJ IDEA", "Visual Studio", "Software Testing", "Debugging"],
  },
  {
    category: "Professional Skills",
    items: ["Problem Solving", "Team Collaboration", "Customer Service", "Technical Support", "Server Management"],
  },
];

export default function Resume() {
  const handleDownload = () => {
    // Trigger download of the resume PDF
    const link = document.createElement('a');
    link.href = '/KARAM-OMAR.pdf';
    link.download = 'KARAM-OMAR.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen p-8 ml-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleDownload}>
            <FileDown className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Professional Summary</h3>
            <p className="text-muted-foreground">
              Dynamic and results-driven IT Professional with a passion for technology and a proven
              track record of problem-solving and customer-centric service. Strong technical expertise
              combined with excellent interpersonal skills, eager to apply in-depth knowledge of diverse
              tech products to drive success.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-orange-500 pl-4">
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold">{skill.category}</h4>
                  <ul className="space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}