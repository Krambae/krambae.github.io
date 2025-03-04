import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Briefcase } from "lucide-react";

function WavyText({ text }: { text: string }) {
  return (
    <div className="flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          animate={{ 
            color: ["hsl(27.8, 97.8%, 50%)", "hsl(27.8, 97.8%, 70%)", "hsl(27.8, 97.8%, 50%)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
          // className="inline-block"
          className={`inline-block ${char === " " ? "w-2" : ""}`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <WavyText text="Karam Omar" />
        </h1>

        <div className="space-y-3 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span>Ottawa, ON</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            <span>karamomar@outlook.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span>+1 819 319 1682</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span>IT Professional & Computer Programming Student</span>
          </div>
        </div>

        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Dynamic and results-driven former IT Professional intern with a passion for technology and a proven
          track record of problem-solving and customer-centric service. Currently pursuing an Advanced Diploma
          in Computer Programming at Algonquin College.
        </p>

        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/KaramOmar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-500/20 text-orange-500 rounded-lg hover:bg-orange-500/30 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume"
            className="px-4 py-2 bg-orange-500/20 text-orange-500 rounded-lg hover:bg-orange-500/30 transition-colors"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}