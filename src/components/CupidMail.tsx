import { useState, useRef } from "react";

const FlyingEnvelope = ({ left, top, delay }: { left: number; top: number; delay: number }) => (
  <div
    className="absolute text-2xl pointer-events-none opacity-20"
    style={{
      left: `${left}%`,
      top: `${top}%`,
      animation: `sway ${3 + delay}s ease-in-out infinite, float-particle ${8 + delay * 2}s linear infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    💌
  </div>
);

const CupidMail = () => {
  const [accepted, setAccepted] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodgeButton = () => {
    if (!noButtonRef.current || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 120;
    const maxY = 80;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    noButtonRef.current.style.transform = `translate(${newX - maxX / 2}px, ${newY - maxY / 2}px)`;
  };

  return (
    <section className="relative z-20 py-20 px-4 overflow-hidden bg-primary/20">
      {/* Bokeh hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `radial-gradient(circle, hsl(340, 80%, 60% / 0.15) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle ${6 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <FlyingEnvelope key={i} left={Math.random() * 90} top={Math.random() * 80} delay={Math.random() * 3} />
      ))}

      <div className="max-w-lg mx-auto text-center relative">
        <div className="mb-8 text-6xl animate-gentle-bounce">
          <span className="inline-block" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>
            💌
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display text-primary mb-3" style={{ textShadow: "0 2px 10px hsl(340, 80%, 60% / 0.4)" }}>
          Correo de Cupido 💘
        </h2>
        <p className="text-muted-foreground font-elegant italic text-lg mb-10">
          Tienes un mensaje especial...
        </p>

        {!accepted ? (
          <div ref={containerRef} className="relative min-h-[120px] flex items-center justify-center gap-6">
            <button
              onClick={() => setAccepted(true)}
              className="px-10 py-4 rounded-2xl text-xl font-body font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl z-10 bg-accent text-accent-foreground"
              style={{ boxShadow: "0 4px 20px hsl(20, 80%, 65% / 0.4)" }}
            >
              ¡Sí! 💕
            </button>
            <button
              ref={noButtonRef}
              onMouseEnter={dodgeButton}
              onTouchStart={dodgeButton}
              className="px-8 py-4 rounded-2xl text-lg font-body font-semibold transition-all duration-300 z-10 bg-secondary text-secondary-foreground"
            >
              No 😅
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <div className="inline-block px-10 py-8 rounded-3xl bg-card/60 backdrop-blur-sm border border-border">
              <p className="text-4xl mb-3">😍</p>
              <p className="text-2xl font-display text-primary">
                ¡Cupido ha entregado tu amor!
              </p>
              <p className="text-muted-foreground font-elegant italic mt-2">
                Era la única respuesta posible 💖
              </p>
            </div>
          </div>
        )}

        <div className="mt-10 text-4xl">
          <span className="inline-block animate-gentle-bounce" style={{ animationDelay: "0.5s" }}>
            👼🏹
          </span>
        </div>
      </div>
    </section>
  );
};

export default CupidMail;