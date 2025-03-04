import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { Home, User, Code, Mail, FileText } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Code, label: "Projects", href: "/projects" },
  { icon: Mail, label: "Contact", href: "/contact" },
  { icon: FileText, label: "Resume", href: "/resume" },
];

export function SidebarNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-24 hover:w-64 transition-all duration-200 bg-zinc-900/80 border-r border-border/50 flex flex-col items-center justify-center py-8 gap-8 group z-50">
      {navItems.map(({ icon: Icon, label, href }) => (
        <Link key={href} href={href}>
          <a className="relative flex items-center justify-center w-full group">
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300",
                "hover:bg-zinc-800 hover:text-zinc-300",
                location === href
                  ? "bg-zinc-800 text-zinc-300"
                  : "text-zinc-500"
              )}
            >
              <Icon className="w-7 h-7" />
            </div>
            <span className="absolute left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-zinc-400">
              {label}
            </span>
          </a>
        </Link>
      ))}
    </nav>
  );
}