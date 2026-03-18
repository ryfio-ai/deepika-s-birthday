import { useEffect, useState, useCallback } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  rotation: number;
  delay: number;
  duration: number;
  drift: number;
  shape: "square" | "circle" | "strip";
}

const COLORS = [
  "hsl(213, 72%, 59%)",
  "hsl(213, 100%, 82%)",
  "hsl(206, 92%, 85%)",
  "hsl(45, 93%, 67%)",
  "hsl(340, 82%, 72%)",
  "hsl(160, 60%, 55%)",
  "hsl(280, 60%, 70%)",
  "hsl(0, 0%, 100%)",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [burst, setBurst] = useState(0);

  const generatePieces = useCallback(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.8,
      duration: 2.5 + Math.random() * 2,
      drift: -30 + Math.random() * 60,
      shape: (["square", "circle", "strip"] as const)[Math.floor(Math.random() * 3)],
    }));
  }, []);

  useEffect(() => {
    setPieces(generatePieces());
    const timer = setTimeout(() => setBurst(1), 100);
    return () => clearTimeout(timer);
  }, [generatePieces]);

  if (burst === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        >
          <div
            className="animate-confetti-spin"
            style={{
              animationDuration: `${0.5 + Math.random() * 1}s`,
            }}
          >
            {p.shape === "square" && (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  transform: `rotate(${p.rotation}deg)`,
                  borderRadius: 2,
                }}
              />
            )}
            {p.shape === "circle" && (
              <div
                style={{
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  borderRadius: "50%",
                }}
              />
            )}
            {p.shape === "strip" && (
              <div
                style={{
                  width: p.size * 0.4,
                  height: p.size * 1.5,
                  background: p.color,
                  transform: `rotate(${p.rotation}deg)`,
                  borderRadius: 2,
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Confetti;
