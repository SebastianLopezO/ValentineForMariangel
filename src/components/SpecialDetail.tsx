import { useState } from "react";

const AudioBars = () => (
  <div className="flex items-end gap-1 justify-center h-6">
    {[0, 0.2, 0.1, 0.3, 0.15, 0.25, 0.05].map((delay, i) => (
      <div
        key={i}
        className="w-1 rounded-full bg-primary"
        style={{
          height: "100%",
          animation: `audio-bar 0.8s ease-in-out infinite alternate`,
          animationDelay: `${delay}s`,
        }}
      />
    ))}
  </div>
);

const SpecialDetail = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative z-20 py-20 px-4 bg-background">
      <div className="max-w-lg mx-auto text-center relative">
        {/* Floral frame */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-24 flex flex-col justify-between items-center py-4 opacity-60">
          {["🌹", "🍃", "🌺", "🍃", "🌹"].map((e, i) => (
            <span key={i} className="text-lg sm:text-2xl">{e}</span>
          ))}
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-24 flex flex-col justify-between items-center py-4 opacity-60">
          {["🌹", "🍃", "🌺", "🍃", "🌹"].map((e, i) => (
            <span key={i} className="text-lg sm:text-2xl">{e}</span>
          ))}
        </div>

        <div className="px-12 sm:px-20">
          <h2 className="text-3xl sm:text-4xl font-display text-primary mb-4">
            Feliz San Valentín 🌹
          </h2>
          <p className="font-elegant text-lg sm:text-xl italic leading-relaxed mb-10 text-muted-foreground">
            Un detalle especial para ti, porque mereces todo lo bonito del mundo, Mariangel
          </p>

          <button
            onClick={() => setRevealed(!revealed)}
            className="px-10 py-4 rounded-full text-lg font-body font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-primary text-primary-foreground animate-glow-pulse"
          >
            {revealed ? "Ocultar Sorpresa" : "Ver Sorpresa"} 💝
          </button>

          <div className="mt-4">
            <AudioBars />
          </div>

          <div
            className={`mt-8 transition-all duration-700 ${revealed ? "opacity-100 max-h-96 translate-y-0" : "opacity-0 max-h-0 overflow-hidden -translate-y-4"}`}
          >
            <div className="rounded-2xl p-6 sm:p-8 border bg-card border-border">
              <p className="text-5xl mb-4">💖</p>
              <p className="font-display text-2xl sm:text-3xl mb-3 text-primary">
                Eres mi persona favorita
              </p>
              <p className="font-elegant italic text-muted-foreground">
                En cada latido de mi corazón está tu nombre. Gracias por ser la luz de mi vida. Te amo infinitamente ♥
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDetail;