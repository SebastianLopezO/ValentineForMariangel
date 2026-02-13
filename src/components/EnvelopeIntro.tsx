import { useState } from "react";

interface EnvelopeIntroProps {
  onOpen: () => void;
}

const EnvelopeIntro = ({ onOpen }: EnvelopeIntroProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Floating mini hearts background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-primary/20 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${10 + Math.random() * 14}px`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ♥
        </div>
      ))}

      <h1 className="text-3xl sm:text-5xl font-display text-primary mb-2 animate-gentle-bounce">
        Feliz San Valentín 💕
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground font-elegant italic mb-10">
        Un detalle especial para ti, Mariangel
      </p>

      {/* Envelope */}
      <div
        className="relative cursor-pointer group"
        onClick={!isOpening ? handleOpen : undefined}
      >
        {/* Envelope body */}
        <div className="w-64 h-44 sm:w-80 sm:h-52 bg-rose-soft/30 rounded-lg border-2 border-primary/30 relative overflow-hidden transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_hsl(340_80%_60%/0.3)]">
          {/* Letter inside */}
          <div
            className={`absolute inset-x-4 top-4 bottom-8 bg-card rounded-md border border-primary/10 flex items-center justify-center transition-transform duration-1000 ${
              isOpening ? "animate-letter-rise" : ""
            }`}
          >
            <p className="text-foreground font-elegant text-center px-4 text-sm sm:text-base">
              Para el amor de mi vida...
            </p>
          </div>

          {/* Envelope flap */}
          <div
            className={`absolute inset-x-0 top-0 h-24 sm:h-28 bg-primary/20 origin-top transition-transform duration-1000 ${
              isOpening ? "animate-envelope-open" : ""
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />
        </div>

        {/* Heart seal */}
        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl transition-all duration-500 ${
            isOpening ? "scale-150 opacity-0" : "animate-pulse-heart"
          }`}
        >
          💌
        </div>
      </div>

      {!isOpening && (
        <p className="mt-10 text-muted-foreground text-sm animate-gentle-bounce font-body">
          Toca el sobre para abrir tu sorpresa ♥
        </p>
      )}
    </div>
  );
};

export default EnvelopeIntro;
