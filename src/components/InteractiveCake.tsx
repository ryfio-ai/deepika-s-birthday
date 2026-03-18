import { useState } from "react";
import Confetti from "./Confetti";

const CANDLE_COLORS = [
  "hsl(340, 82%, 72%)",
  "hsl(213, 72%, 59%)",
  "hsl(45, 93%, 67%)",
  "hsl(160, 60%, 55%)",
  "hsl(280, 60%, 70%)",
];

const InteractiveCake = () => {
  const [litCandles, setLitCandles] = useState([true, true, true, true, true]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [blownOut, setBlownOut] = useState(false);

  const blowCandle = (index: number) => {
    const newLit = [...litCandles];
    newLit[index] = false;
    setLitCandles(newLit);

    if (newLit.every((c) => !c)) {
      setBlownOut(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const resetCake = () => {
    setLitCandles([true, true, true, true, true]);
    setBlownOut(false);
    setShowConfetti(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {showConfetti && <Confetti />}

      <p className="text-foreground/60 font-body text-sm mb-2">
        {blownOut ? "🎉 You made a wish!" : "✨ Tap the candles to blow them out!"}
      </p>

      {/* Cake SVG */}
      <div className="relative select-none">
        <svg width="280" height="240" viewBox="0 0 280 240">
          {/* Cake base - bottom tier */}
          <rect x="30" y="160" width="220" height="60" rx="16" fill="hsl(213, 100%, 82%)" />
          <rect x="30" y="160" width="220" height="10" rx="5" fill="hsl(213, 72%, 59%)" opacity="0.3" />

          {/* Cake middle tier */}
          <rect x="55" y="110" width="170" height="55" rx="14" fill="hsl(206, 92%, 90%)" />
          <rect x="55" y="110" width="170" height="8" rx="4" fill="hsl(213, 72%, 59%)" opacity="0.2" />

          {/* Frosting drips */}
          {[70, 100, 130, 160, 190].map((x, i) => (
            <ellipse key={i} cx={x} cy={112} rx="8" ry={8 + (i % 2) * 4} fill="hsl(0, 0%, 100%)" opacity="0.8" />
          ))}

          {/* Cake top tier */}
          <rect x="80" y="68" width="120" height="47" rx="12" fill="hsl(213, 72%, 85%)" />
          <rect x="80" y="68" width="120" height="7" rx="3" fill="hsl(213, 72%, 59%)" opacity="0.15" />

          {/* Top frosting drips */}
          {[100, 130, 160].map((x, i) => (
            <ellipse key={i} cx={x} cy={70} rx="7" ry={6 + (i % 2) * 3} fill="hsl(0, 0%, 100%)" opacity="0.8" />
          ))}

          {/* Decorative dots on bottom tier */}
          {[60, 90, 120, 150, 180, 210].map((x, i) => (
            <circle key={i} cx={x} cy={190} r="4" fill="hsl(45, 93%, 67%)" opacity="0.7" />
          ))}

          {/* Plate */}
          <ellipse cx="140" cy="222" rx="130" ry="12" fill="hsl(0, 0%, 95%)" />
          <ellipse cx="140" cy="220" rx="125" ry="10" fill="hsl(0, 0%, 100%)" />
        </svg>

        {/* Candles - positioned on top of SVG */}
        <div className="absolute top-0 left-0 w-full h-full">
          {litCandles.map((lit, i) => {
            const xPos = 100 + i * 22;
            const yPos = 28;
            return (
              <button
                key={i}
                onClick={() => lit && blowCandle(i)}
                className="absolute cursor-pointer transition-transform hover:scale-110 focus:outline-none"
                style={{ left: xPos, top: yPos }}
                aria-label={`Candle ${i + 1}${lit ? " - click to blow out" : " - blown out"}`}
              >
                {/* Candle stick */}
                <div
                  className="w-3 h-10 rounded-sm mx-auto"
                  style={{ background: CANDLE_COLORS[i] }}
                />
                {/* Flame */}
                {lit && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-5 rounded-full bg-yellow-400 animate-breathe relative">
                      <div className="absolute inset-0.5 rounded-full bg-yellow-200 opacity-80" />
                      <div
                        className="absolute -inset-2 rounded-full opacity-40 animate-pulse"
                        style={{
                          background: "radial-gradient(circle, hsl(45, 93%, 67%) 0%, transparent 70%)",
                        }}
                      />
                    </div>
                  </div>
                )}
                {/* Smoke when blown out */}
                {!lit && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-fade-in-up">
                    <div className="w-1 h-3 bg-foreground/20 rounded-full opacity-50" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {blownOut && (
        <button
          onClick={resetCake}
          className="mt-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-body text-sm hover:bg-primary/90 transition-colors"
        >
          Light candles again 🕯️
        </button>
      )}
    </div>
  );
};

export default InteractiveCake;
