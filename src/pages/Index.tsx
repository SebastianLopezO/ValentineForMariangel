import { useState } from "react";
import FallingHearts from "@/components/FallingHearts";
import HeartTree from "@/components/HeartTree";
import LoveCounter from "@/components/LoveCounter";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import MessageCard from "@/components/MessageCard";


const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <EnvelopeIntro onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <FallingHearts />

      {/* Hero */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="animate-fade-in-up">
          <p className="text-muted-foreground font-elegant italic text-lg mb-2">Para ti, mi amor</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-primary mb-4 animate-gentle-bounce">
            Mariangel
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 font-elegant italic max-w-lg mx-auto">
            Cada día contigo es el mejor regalo que la vida me ha dado ♥
          </p>
        </div>
        <div className="mt-8 text-4xl animate-pulse-heart">💕</div>
      </section>

      {/* Heart Tree Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-display text-primary mb-4">
              Para el amor de mi vida
            </h2>
            <p className="text-foreground/85 font-elegant text-lg leading-relaxed italic">
              Si pudiera elegir un lugar seguro, sería a tu lado.
              Cuanto más tiempo estoy contigo más te amo.
              Eres mi complemento perfecto, mi felicidad, mi todo.
            </p>
          </div>
          <HeartTree />
        </div>
      </section>

      {/* Counter Section */}
      <section className="relative z-20 py-16 px-4 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <LoveCounter />
        </div>
      </section>

      {/* Messages Section */}
      <section className="relative z-20 py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display text-primary text-center mb-8">
            Razones para amarte 💝
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <MessageCard
              title="¿Por qué te amo?"
              message="Porque tu sonrisa ilumina mis días más oscuros. Porque tu risa es mi melodía favorita. Porque cada momento contigo es un tesoro que guardo en mi corazón."
              delay={0}
              variant="default"
            />
            <MessageCard
              title="¿Por qué este San Valentín es especial?"
              message="Porque cada San Valentín contigo es mejor que el anterior. Porque celebrar el amor que tenemos es el regalo más hermoso. Porque tú haces que cada día sea San Valentín."
              delay={200}
              variant="accent"
            />
            <MessageCard
              title="Lo que más adoro de ti"
              message="Tu forma de amar, tu ternura infinita, la manera en que me miras y haces sentir que soy la persona más afortunada del mundo."
              delay={400}
              variant="elegant"
            />
            <MessageCard
              title="Nuestro tiempo juntos"
              message="Desde el 17 de diciembre de 2020, mi vida cambió para siempre. Cada segundo a tu lado ha sido la mejor aventura. Gracias por elegirme cada día."
              delay={600}
              variant="default"
            />
          </div>
        </div>
      </section>




      {/* Final Message */}
      <section className="relative z-20 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-display text-primary mb-6">
            Te amo, Mariangel ♥
          </h2>
          <p className="text-foreground/85 font-elegant text-xl leading-relaxed italic mb-8">
            No existe en todo el universo un lugar donde prefiera estar que no sea a tu lado.
            Eres mi presente y mi futuro. Feliz San Valentín, mi amor.
          </p>
          <div className="text-6xl animate-pulse-heart">💖</div>
          <p className="mt-6 text-muted-foreground font-body text-sm">
            Con todo mi amor, para siempre tuyo ∞
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
