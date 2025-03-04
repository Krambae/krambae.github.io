import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <Input
              placeholder="Name"
              className="bg-black/20 border-border/50"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="bg-black/20 border-border/50"
            />
          </div>
          <div>
            <Textarea
              placeholder="Message"
              className="bg-black/20 border-border/50"
              rows={6}
            />
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
