import { useEffect, useState } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${1.5 + Math.random() * 3}s`,
      delay: `${Math.random() * 4}s`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            left: s.left,
            top: s.top,
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6L6 0Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
