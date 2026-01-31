'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientBlobsRef = useRef<Array<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    radius: number;
    color: string;
    speed: number;
  }>>([]);
  const scrollYRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Get current theme
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Initialize gradient blobs with theme-aware colors
    const initBlobs = () => {
      const colors = isDark 
        ? [
            'rgba(59, 130, 246, 0.15)',   // Blue
            'rgba(168, 85, 247, 0.12)',   // Purple
            'rgba(236, 72, 153, 0.12)',   // Pink
            'rgba(34, 211, 238, 0.1)',    // Cyan
            'rgba(251, 146, 60, 0.08)',   // Orange
            'rgba(124, 58, 237, 0.1)',    // Violet
          ]
        : [
            'rgba(37, 99, 235, 0.08)',    // Blue
            'rgba(139, 92, 246, 0.07)',   // Purple
            'rgba(219, 39, 119, 0.07)',   // Pink
            'rgba(6, 182, 212, 0.06)',    // Cyan
            'rgba(249, 115, 22, 0.05)',   // Orange
            'rgba(109, 40, 217, 0.06)',   // Violet
          ];

      gradientBlobsRef.current = Array.from({ length: 8 }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        radius: Math.random() * 400 + 250,
        color: colors[i % colors.length],
        speed: 0.0003 + Math.random() * 0.0005,
      }));
    };

    initBlobs();

    // Handle scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize canvas on window resize to cover full scrollable height
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply blur effect
      ctx.filter = 'blur(80px)';

      gradientBlobsRef.current.forEach((blob, index) => {
        // Smooth movement towards target
        blob.x += (blob.targetX - blob.x) * blob.speed;
        blob.y += (blob.targetY - blob.y) * blob.speed;

        // Update target when close enough
        if (Math.abs(blob.targetX - blob.x) < 1 && Math.abs(blob.targetY - blob.y) < 1) {
          blob.targetX = Math.random() * canvas.width;
          blob.targetY = Math.random() * canvas.height;
        }

        // React to scroll - create wave effect and subtle parallax
        const scrollOffset = scrollYRef.current * 0.15;
        const waveOffset = Math.sin((scrollOffset + index * 150) * 0.008) * 80;
        const parallaxOffset = (scrollYRef.current * (index % 3 === 0 ? 0.05 : index % 2 === 0 ? 0.1 : 0.15));
        
        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y + waveOffset + parallaxOffset,
          0,
          blob.x,
          blob.y + waveOffset + parallaxOffset,
          blob.radius
        );
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d.]+\)$/g, (opacity) => {
          const currentOpacity = parseFloat(opacity.match(/[\d.]+/)?.[0] || '0.1');
          return `${currentOpacity * 0.5})`;
        }));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y + waveOffset + parallaxOffset, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          initBlobs();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />
    </div>
  );
}
