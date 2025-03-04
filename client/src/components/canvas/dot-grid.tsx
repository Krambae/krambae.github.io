import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  baseY: number;
  opacity: number;
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPoints();
    };

    const initPoints = () => {
      pointsRef.current = [];
      const spacing = 30;
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          pointsRef.current.push({
            x: x * spacing,
            y: y * spacing,
            baseY: y * spacing,
            opacity: 0.2,
          });
        }
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pointsRef.current.forEach((point) => {
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 30;
          point.y = point.baseY - force;
          point.opacity = Math.min(0.8, 0.2 + (1 - distance / maxDistance) * 0.8);
        } else {
          point.y += (point.baseY - point.y) * 0.1;
          point.opacity += (0.2 - point.opacity) * 0.1;
        }

        // Main dot
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(27.8, 97.8%, 50%, ${point.opacity})`;
        ctx.fill();

        // Subtle glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(27.8, 97.8%, 50%, ${point.opacity * 0.2})`;
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-zinc-900"
    />
  );
}