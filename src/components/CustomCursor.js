import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "./ThemeContext";

const CustomCursor = () => {
  const { theme } = useTheme();

  const cursorColor =
    theme === "midnight"
      ? "#45A29E"
      : theme === "glacier"
        ? "#0D9488"
        : "#78866b";

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 800, damping: 28, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 28, mass: 0.1 });

  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const points = useRef(
    Array.from({ length: 5 }, () => ({ x: -100, y: -100 })),
  );

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest(
        'a, button, [role="button"], .cursor-pointer',
      );
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let leadPoint = mousePos.current;

      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        const ease = i === 0 ? 0.7 : 0.45;

        point.x += (leadPoint.x - point.x) * ease;
        point.y += (leadPoint.y - point.y) * ease;

        leadPoint = point;
      }

      for (let i = 0; i < points.current.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(points.current[i].x, points.current[i].y);
        ctx.lineTo(points.current[i + 1].x, points.current[i + 1].y);

        const progress = i / points.current.length;

        ctx.lineWidth = Math.max(0.1, 14 * (1 - progress));
        ctx.globalAlpha = 1 - progress;
        ctx.strokeStyle = cursorColor;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY, cursorColor]);

  if (isMobile) return null;

  const targetWidth = isHovering ? 45 : 20;
  const targetHeight = isHovering ? 45 : 20;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
      />

      <motion.div
        className="fixed top-0 left-0 rounded-full border-primary border-[3px] pointer-events-none z-[9999]"
        animate={{
          width: targetWidth,
          height: targetHeight,
          backgroundColor: isHovering ? "var(--accent-glow)" : "transparent",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: !isHovering ? "0 0 15px 4px var(--accent-glow)" : "none",
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      />
    </>
  );
};

export default CustomCursor;
