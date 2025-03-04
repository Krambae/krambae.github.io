import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground leading-relaxed">
          As an aspiring IT Professional with experience in customer service and technical support,
          I bring a unique blend of technical expertise and interpersonal skills. My journey in
          technology has been marked by a strong focus on problem-solving and continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-orange-500">Technical Skills</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>• Java Programming</li>
              <li>• SQL & MySQL</li>
              <li>• Git Version Control</li>
              <li>• Linux Systems</li>
              <li>• Software Testing</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-orange-500">Development Tools</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>• Eclipse</li>
              <li>• IntelliJ IDEA</li>
              <li>• Visual Studio</li>
              <li>• Server Management</li>
              <li>• SSL Configuration</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-500">Education</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>
              <div className="font-medium">Advanced Diploma in Computer Programming</div>
              <div className="text-sm">Algonquin College - Ottawa, ON (2022 - Present)</div>
            </li>
            <li>
              <div className="font-medium">Computer Engineering Studies</div>
              <div className="text-sm">Algonquin College - Ottawa, ON (2022 - 2023)</div>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}