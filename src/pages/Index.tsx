import { useState } from "react";
import Sparkles from "@/components/Sparkles";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import InteractiveCake from "@/components/InteractiveCake";
import ScrollReveal from "@/components/ScrollReveal";
import teddyHeart from "@/assets/teddy-heart.png";
import teddyWave from "@/assets/teddy-wave.png";
import teddySingle from "@/assets/teddy-single.png";
import teddyMini from "@/assets/teddy-mini.png";
import teddyStar from "@/assets/teddy-star.png";
import celebrationCharacters from "@/assets/celebration-characters.png";

/** Small decorative teddy placed around sections */
const MiniTeddy = ({
  src,
  className = "",
  size = "w-16 h-16",
}: {
  src: string;
  className?: string;
  size?: string;
}) => (
  <img
    src={src}
    alt=""
    aria-hidden
    className={`absolute pointer-events-none animate-breathe drop-shadow-md select-none ${size} ${className}`}
  />
);

const WelcomeSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
    {/* Scattered teddies */}
    <MiniTeddy src={teddyMini} className="top-16 left-2 md:left-10 opacity-60" size="w-14 h-14 md:w-20 md:h-20" />
    <MiniTeddy src={teddyStar} className="top-24 right-2 md:right-10 opacity-50" size="w-12 h-12 md:w-16 md:h-16" />
    <MiniTeddy src={teddySingle} className="bottom-32 left-4 md:left-16 opacity-40" size="w-10 h-10 md:w-14 md:h-14" />
    <MiniTeddy src={teddyMini} className="bottom-20 right-6 md:right-20 opacity-50" size="w-12 h-12 md:w-16 md:h-16" />

    <ScrollReveal className="flex flex-col items-center text-center">
      <img
        src={teddyWave}
        alt="Cute teddy bear waving hello"
        className="w-40 h-40 md:w-52 md:h-52 animate-breathe mb-6 drop-shadow-lg"
      />
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary glow-text mb-4">
        Happy Birthday
      </h1>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary glow-text mb-6">
        Deepika 🎉
      </h2>
      <p className="text-lg md:text-xl text-foreground/80 font-body font-medium max-w-md">
        Today the world celebrates someone truly extraordinary
      </p>
    </ScrollReveal>
    <ScrollReveal delay={400} className="mt-8">
      <svg className="animate-bounce w-8 h-8 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </ScrollReveal>
  </section>
);

const MessageSection = () => (
  <section className="relative px-4 py-16 flex justify-center">
    <MiniTeddy src={teddyStar} className="-top-6 right-4 md:right-20 opacity-50" size="w-14 h-14 md:w-20 md:h-20" />
    <MiniTeddy src={teddyMini} className="bottom-4 left-2 md:left-12 opacity-40" size="w-12 h-12 md:w-16 md:h-16" />

    <ScrollReveal className="birthday-card max-w-2xl w-full text-center">
      <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">
        A Message For You ✨
      </h3>
      <div className="space-y-4 text-foreground/90 font-body text-base md:text-lg leading-relaxed">
        <p>
          Deepika, your passion is like a flame that never dims — it lights up every room
          and inspires everyone lucky enough to know you.
        </p>
        <p>
          Your strength is quiet but unshakable. You carry challenges with grace
          and turn obstacles into stepping stones. That takes a rare kind of courage.
        </p>
        <p>
          You have this incredible ability to make people believe in themselves.
          Your words, your energy, your very presence — they inspire others
          to reach higher and dream bigger.
        </p>
        <p className="font-semibold text-primary">
          Never stop chasing those dreams, Deepika. The world needs what only you can give.
          Keep growing, keep building, and keep surprising yourself with how far you can go. 🌟
        </p>
      </div>
    </ScrollReveal>
  </section>
);

const MemoriesSection = () => (
  <section className="relative px-4 py-16 flex justify-center">
    <MiniTeddy src={teddyMini} className="-top-4 left-4 md:left-16 opacity-50" size="w-14 h-14 md:w-18 md:h-18" />
    <MiniTeddy src={teddySingle} className="bottom-0 right-2 md:right-14 opacity-40" size="w-12 h-12 md:w-16 md:h-16" />

    <ScrollReveal className="birthday-card max-w-2xl w-full text-center">
      <img
        src={teddyHeart}
        alt="Teddy bear holding a heart"
        className="w-32 h-32 mx-auto mb-6 animate-breathe drop-shadow-md"
      />
      <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">
        You Make Life Brighter 💙
      </h3>
      <div className="space-y-4 text-foreground/90 font-body text-base md:text-lg leading-relaxed">
        <p>
          You have this magical way of turning ordinary moments into something beautiful.
          Your laughter is contagious, your kindness is unforgettable,
          and your positivity can brighten even the cloudiest days.
        </p>
        <p>
          Every conversation with you feels meaningful. Every memory shared with you
          becomes a treasure. You don't just exist in moments — you make them matter.
        </p>
        <p>
          We met just a few days ago, and yet every little thing you've shared with me
          has filled my heart with happiness. We haven't had enough time to talk,
          to share, to just be — but even in those few moments, something beautiful began.
        </p>
        <p className="font-semibold text-primary">
          I want to continue this bond forever, to my very last breath.
          You are a gift I never want to let go of. 💙
        </p>
      </div>
    </ScrollReveal>
  </section>
);

const TamilMessageSection = () => (
  <section className="relative px-4 py-16 flex justify-center">
    <MiniTeddy src={teddyStar} className="-top-6 left-2 md:left-10 opacity-60" size="w-16 h-16 md:w-20 md:h-20" />
    <MiniTeddy src={teddyMini} className="top-10 right-2 md:right-8 opacity-40" size="w-10 h-10 md:w-14 md:h-14" />
    <MiniTeddy src={teddySingle} className="bottom-2 left-6 md:left-20 opacity-40" size="w-12 h-12" />

    <ScrollReveal className="birthday-card max-w-2xl w-full text-center">
      <img
        src={teddySingle}
        alt="Cute teddy bear with blue heart"
        className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 animate-breathe drop-shadow-lg"
      />
      <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">
        உனக்காக 💙
      </h3>
      <div className="space-y-4 text-foreground/90 font-body text-base md:text-lg leading-relaxed">
        <p>
          உன் கனவுகள் வானத்தைத் தொடட்டும், உன் பாதைகள் வெற்றியால் நிரம்பட்டும்.
        </p>
        <p>
          நீ இருப்பது ஒரு சந்தோஷம், நீ முன்னேறுவது ஒரு பெருமை.
        </p>
        <p className="font-semibold text-primary">
          இன்று உன் நாள், இனிமையால் நிறையட்டும், என்றும் நீ சிரித்து வளர வாழ்த்துகள் ✨
        </p>
      </div>
    </ScrollReveal>
  </section>
);

const CuteVisualsSection = () => (
  <section className="relative px-4 py-16 flex flex-col items-center gap-10">
    <MiniTeddy src={teddyMini} className="top-0 left-2 md:left-8 opacity-50" size="w-14 h-14 md:w-20 md:h-20" />
    <MiniTeddy src={teddyStar} className="top-10 right-4 md:right-12 opacity-40" size="w-12 h-12 md:w-16 md:h-16" />
    <MiniTeddy src={teddySingle} className="bottom-10 left-4 md:left-16 opacity-40" size="w-10 h-10 md:w-14 md:h-14" />
    <MiniTeddy src={teddyMini} className="bottom-4 right-2 md:right-10 opacity-50" size="w-14 h-14 md:w-18 md:h-18" />

    <ScrollReveal className="text-center">
      <h3 className="font-display text-3xl md:text-4xl text-primary mb-4">
        Celebrating You! 🎂
      </h3>
    </ScrollReveal>
    <ScrollReveal delay={200}>
      <img
        src={celebrationCharacters}
        alt="Cartoon characters celebrating birthday"
        className="w-full max-w-lg drop-shadow-lg"
      />
    </ScrollReveal>
    <ScrollReveal delay={300} className="text-center">
      <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">
        Make a Wish! 🎂
      </h3>
      <InteractiveCake />
    </ScrollReveal>
    <ScrollReveal delay={400}>
      <img
        src={teddySingle}
        alt="Cute teddy bear with blue heart"
        className="w-48 md:w-64 animate-breathe drop-shadow-lg"
      />
    </ScrollReveal>
  </section>
);

const SurpriseSection = () => (
  <section className="relative px-4 py-20 flex justify-center">
    <MiniTeddy src={teddyStar} className="-top-4 right-6 md:right-16 opacity-50" size="w-14 h-14 md:w-20 md:h-20" />
    <MiniTeddy src={teddyMini} className="bottom-6 left-4 md:left-14 opacity-40" size="w-12 h-12 md:w-16 md:h-16" />
    <MiniTeddy src={teddySingle} className="bottom-2 right-2 md:right-8 opacity-30" size="w-10 h-10 md:w-14 md:h-14" />

    <ScrollReveal className="birthday-card max-w-2xl w-full text-center animate-glow-pulse">
      <div className="space-y-6">
        <div className="text-4xl mb-4">🌟</div>
        <h3 className="font-display text-3xl md:text-5xl text-primary glow-text leading-snug">
          You are meant for something truly amazing
        </h3>
        <div className="w-16 h-0.5 bg-primary/30 mx-auto rounded-full" />
        <p className="font-display text-xl md:text-2xl text-primary/80">
          Keep shining, keep growing,
        </p>
        <p className="font-display text-xl md:text-2xl text-primary/80">
          and keep being you ✨
        </p>
        <div className="pt-4 text-foreground/60 font-body text-sm">
          With all the warmth in the world — Happy Birthday, Deepika 💙
        </div>
      </div>
    </ScrollReveal>
  </section>
);

const Index = () => {
  const [showInitialConfetti, setShowInitialConfetti] = useState(true);

  return (
    <div className="bg-birthday-gradient min-h-screen relative overflow-x-hidden">
      {showInitialConfetti && <Confetti />}
      <Sparkles />
      <FloatingHearts />
      <div className="relative z-10 max-w-4xl mx-auto">
        <WelcomeSection />
        <MessageSection />
        <MemoriesSection />
        <TamilMessageSection />
        <CuteVisualsSection />
        <SurpriseSection />
        <footer className="relative text-center py-10 text-foreground/40 font-body text-sm">
          <MiniTeddy src={teddyMini} className="-top-2 left-1/4 opacity-30" size="w-10 h-10" />
          <MiniTeddy src={teddyStar} className="-top-2 right-1/4 opacity-30" size="w-10 h-10" />
          Made with ✨ just for Deepika
        </footer>
      </div>
    </div>
  );
};

export default Index;
