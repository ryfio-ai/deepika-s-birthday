import { useState } from "react";
import Sparkles from "@/components/Sparkles";
import FloatingHearts from "@/components/FloatingHearts";
import Confetti from "@/components/Confetti";
import InteractiveCake from "@/components/InteractiveCake";
import ScrollReveal from "@/components/ScrollReveal";
import teddyHeart from "@/assets/teddy-heart.png";
import teddyWave from "@/assets/teddy-wave.png";
import celebrationCharacters from "@/assets/celebration-characters.png";
import teddyPair from "@/assets/teddy-pair.png";

const WelcomeSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
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
  <section className="px-4 py-16 flex justify-center">
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
  <section className="px-4 py-16 flex justify-center">
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

const CuteVisualsSection = () => (
  <section className="px-4 py-16 flex flex-col items-center gap-10">
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
        src={teddyPair}
        alt="Teddy bears holding a blue heart together"
        className="w-64 md:w-80 animate-breathe drop-shadow-lg"
      />
    </ScrollReveal>
  </section>
);

const SurpriseSection = () => (
  <section className="px-4 py-20 flex justify-center">
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
  return (
    <div className="bg-birthday-gradient min-h-screen relative overflow-x-hidden">
      <Sparkles />
      <FloatingHearts />
      <div className="relative z-10 max-w-4xl mx-auto">
        <WelcomeSection />
        <MessageSection />
        <MemoriesSection />
        <CuteVisualsSection />
        <SurpriseSection />
        <footer className="text-center py-10 text-foreground/40 font-body text-sm">
          Made with ✨ just for Deepika
        </footer>
      </div>
    </div>
  );
};

export default Index;
