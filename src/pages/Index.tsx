import {useState} from "react";
import FallingHearts from "@/components/FallingHearts";
import HeartTree from "@/components/HeartTree";
import LoveCounter from "@/components/LoveCounter";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import MessageCard from "@/components/MessageCard";
import ReasonsJar from "@/components/ReasonsJar";
import GiftReveal from "@/components/GiftReveal";
import HeartMonitor from "@/components/HeartMonitor";
import ValentineMission from "@/components/ValentineMission";
import CupidMail from "@/components/CupidMail";
import SpecialDetail from "@/components/SpecialDetail";
import DestinyMap from "@/components/DestinyMap";
import LoveContract from "@/components/LoveContract";


const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return <EnvelopeIntro onOpen={() => setIsOpen(true)}/>;
    }

    return (
        <div className="relative min-h-screen bg-background">
            <FallingHearts/>

            {/* Hero */}
            <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <div className="animate-fade-in-up">
                    <p className="text-muted-foreground font-elegant italic text-lg mb-2">Para ti, mi tesoro</p>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-primary mb-4 animate-gentle-bounce">
                        Mariangel
                    </h1>
                    <p className="text-xl sm:text-2xl text-foreground/80 font-elegant italic max-w-lg mx-auto">
                        Llegaste a mi vida sin avisar, y desde entonces mi corazón te reconoce siempre como la primera
                        vez ♥
                    </p>
                </div>
                <div className="mt-8 text-4xl animate-pulse-heart">💕</div>
            </section>

            {/* Heart Tree Section */}
            <section className="relative z-20 py-16 px-4">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl font-display text-primary mb-4">
                            Desde aquella esquina
                        </h2>
                        <p className="text-foreground/85 font-elegant text-lg leading-relaxed italic">
                            Te miraba en silencio, admirando tu hermosura sin atreverme a confesar lo que sentía.
                            Poco a poco te fui descubriendo, y cada parte de ti me enamoraba más.
                            No soy pirata, pero tuve la fortuna de encontrar este tesoro que se llama Mary.
                        </p>
                    </div>
                    <HeartTree/>
                </div>
            </section>

            {/* Counter Section */}
            <section className="relative z-20 py-16 px-4 bg-secondary/20">
                <div className="max-w-3xl mx-auto">
                    <LoveCounter/>
                </div>
            </section>

            {/* Messages Section */}
            <section className="relative z-20 py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-display text-primary text-center mb-8">
                        Razones para amarte 💝
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <MessageCard title="Tu sonrisa de niña"
                                     message="Esa sonrisa radiante que me hace feliz desde la distancia. Tus mejillas siempre rojas, tus ojos oscuros que brillan en el sol... no me canso de admirarte."
                                     delay={0} variant="default"/>
                        <MessageCard title="Lo que me enseñaste"
                                     message="En ti descubrí una mujer que compartía su conocimiento de sol a sol, que me habló sin escrúpulos y me dio confianza para ser quien soy. Contigo aprendo de la mejor manera: con amor."
                                     delay={200} variant="accent"/>
                        <MessageCard title="Tu forma bizarra de amar"
                                     message="Tú no amas con palabras convencionales, sino de maneras más bonitas y bizarras que no solo me enamoran, sino que me llenan de risa y alegría. Así eres tú, única."
                                     delay={400} variant="elegant"/>
                        <MessageCard title="17 de diciembre de 2020"
                                     message="Ese día mi vida cambió para siempre. Hubo dificultades antes de estar juntos, pero cada obstáculo valió la pena. Cada beso, cada abrazo, cada momento lo llevo clavado en el alma."
                                     delay={600} variant="default"/>
                    </div>
                </div>
            </section>

            {/* Reasons Jar */}
            <ReasonsJar/>

            {/* 1. Gift Reveal */}
            <GiftReveal/>

            {/* 2. Heart Monitor */}
            <HeartMonitor/>

            {/* 3. Valentine Mission */}
            <ValentineMission/>

            {/* 4. Cupid Mail */}
            <CupidMail/>

            {/* 5. Special Detail */}
            <SpecialDetail/>

            {/* Destiny Map */}
            <DestinyMap/>

            {/* Love Contract */}
            <LoveContract/>


            {/* Final Message */}
            <section className="relative z-20 py-20 px-4 text-center">
                <div className="max-w-2xl mx-auto animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-display text-primary mb-6">
                        Te amo, Mary ♥
                    </h2>
                    <p className="text-foreground/85 font-elegant text-xl leading-relaxed italic mb-8">
                        Te amo profundo, honesto, completo. Te amo más que ayer y menos que mañana,
                        porque contigo el amor siempre crece, siempre se expande, siempre encuentra
                        una nueva forma de sentirse. Eres mi amor, mi cielo, mi mamor, mi todo.
                    </p>
                    <div className="text-6xl animate-pulse-heart">💖</div>
                    <p className="mt-6 text-muted-foreground font-body text-sm">
                        Todo lo que soy se expande contigo ∞
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Index;
