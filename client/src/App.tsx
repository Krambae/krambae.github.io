import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { DotGrid } from "@/components/canvas/dot-grid";
import { SidebarNav } from "@/components/ui/sidebar-nav";
import { CustomCursor } from "@/components/ui/custom-cursor";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Resume from "@/pages/resume";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/projects", Component: Projects },
  { path: "/contact", Component: Contact },
  { path: "/resume", Component: Resume },
];

function Router() {
  const [location, setLocation] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const currentIndex = pages.findIndex(page => page.path === location);
      const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < pages.length) {
        setLocation(pages[nextIndex].path);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [location, setLocation]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Switch>
          {pages.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Component />
              </motion.div>
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DotGrid />
      <CustomCursor />
      <SidebarNav />
      <main className="ml-24">
        <Router />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;