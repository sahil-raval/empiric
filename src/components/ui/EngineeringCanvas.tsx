import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  /** dark = white grid/nodes on navy background, light = subtle overlay on existing bg */
  mode?: 'dark' | 'light';
}

export function EngineeringCanvas({ className = '', mode = 'dark' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse    = useRef({ x: -9999, y: -9999 });
  const raf      = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext('2d')!;

    // ─── Resize ───────────────────────────────────────────
    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // ─── Node setup ───────────────────────────────────────
    const CELL = 64;
    type Node = { x: number; y: number; phase: number; speed: number; r: number; accent: boolean };
    let nodes: Node[] = [];

    const buildNodes = () => {
      nodes = [];
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          if (Math.random() < 0.25) {
            nodes.push({
              x:      c * CELL,
              y:      r * CELL,
              phase:  Math.random() * Math.PI * 2,
              speed:  0.25 + Math.random() * 0.75,
              r:      0.8 + Math.random() * 1.6,
              accent: Math.random() < 0.06,
            });
          }
        }
      }
    };
    buildNodes();
    window.addEventListener('resize', buildNodes);

    // ─── Scan-line state ──────────────────────────────────
    let scanY = 0;

    // ─── Draw loop ────────────────────────────────────────
    const gridAlpha  = mode === 'dark' ? 0.05 : 0.04;
    const nodeColor  = mode === 'dark' ? '255,255,255' : '13,21,32';

    const draw = (t: number) => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = mode === 'dark'
        ? `rgba(255,255,255,${gridAlpha})`
        : `rgba(13,21,32,${gridAlpha})`;
      ctx.lineWidth = 0.5;

      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) { const x = c * CELL; ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let r = 0; r <= rows; r++) { const y = r * CELL; ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();

      // Mouse radial glow
      const mx = mouse.current.x;
      const my = mouse.current.y;
      if (mx > 0 && mx < W && my > 0 && my < H) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 240);
        g.addColorStop(0, 'rgba(232,119,34,0.10)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      // Nodes
      for (const n of nodes) {
        const pulse = Math.sin(t * n.speed * 0.001 + n.phase);
        const alpha = (mode === 'dark' ? 0.25 : 0.18) + pulse * 0.12;
        const r     = n.r + pulse * 0.4;
        ctx.fillStyle = n.accent
          ? `rgba(232,119,34,${Math.max(0, alpha * 1.8)})`
          : `rgba(${nodeColor},${Math.max(0, alpha)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scan line
      scanY = (scanY + 0.35) % (H + 60);
      const sg = ctx.createLinearGradient(0, scanY - 24, 0, scanY + 24);
      sg.addColorStop(0,   'transparent');
      sg.addColorStop(0.5, mode === 'dark' ? 'rgba(232,119,34,0.04)' : 'rgba(13,21,32,0.025)');
      sg.addColorStop(1,   'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 24, W, 48);

      raf.current = requestAnimationFrame(draw);
    };

    // ─── Mouse tracking ───────────────────────────────────
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    raf.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', buildNodes);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
