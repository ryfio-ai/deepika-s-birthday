import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: number; duration: string; delay: string; driftDuration: string }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      size: 16 + Math.random() * 24,
      duration: `${8 + Math.random() * 8}s`,
      delay: `${Math.random() * 10}s`,
      driftDuration: `${4 + Math.random() * 6}s`,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: h.left,
            "--duration": h.duration,
            "--delay": h.delay,
          } as React.CSSProperties}
        >
          <div
            className="animate-drift"
            style={{
              "--duration": h.driftDuration,
              "--delay": h.delay,
            } as React.CSSProperties}
          >
            <svg
              width={h.size}
              height={h.size}
              viewBox="0 0 24 24"
              fill="hsl(213, 72%, 59%)"
              fillOpacity="0.35"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
