import {useState} from "react";

interface Destination {
    id: number;
    name: string;
    description: string;
    x: number;
    y: number;
}

const DESTINATIONS: Destination[] = [
    {
        id: 1,
        name: "La esquina donde te miraba",
        description: "Desde ahí te admiraba en silencio, temeroso, sin atreverme a confesar lo que sentía ♥",
        x: 25,
        y: 35
    },
    {
        id: 2,
        name: "Cuando comenzamos a hablar",
        description: "Mi vida se llenó de ilusiones. Fuiste esquiva, pero fui poco a poco acercándome a ti.",
        x: 55,
        y: 25
    },
    {
        id: 3,
        name: "17 de diciembre de 2020",
        description: "El día que consolidamos nuestro amor. Hubo dificultades, pero todo valió la pena.",
        x: 75,
        y: 45
    },
    {
        id: 4,
        name: "Nuestras conversaciones eternas",
        description: "De día a noche, sin importar la hora ni el mes, hablábamos sin parar.",
        x: 40,
        y: 60
    },
    {
        id: 5,
        name: "Explorando juntos",
        description: "Fuimos descubriendo cosas que nunca habíamos hecho. La confianza y el amor lo permitieron todo.",
        x: 65,
        y: 70
    },
    {
        id: 6,
        name: "El futuro que imagino contigo",
        description: "Tengo una visión, y tú estás incluida en ella. Nuestro destino sigue escribiéndose ∞",
        x: 20,
        y: 65
    },
];

const HeartPin = ({
                      dest,
                      isActive,
                      onClick,
                  }: {
    dest: Destination;
    isActive: boolean;
    onClick: () => void;
}) => (
    <div
        className="absolute cursor-pointer group z-10"
        style={{left: `${dest.x}%`, top: `${dest.y}%`, transform: "translate(-50%, -50%)"}}
        onClick={onClick}
    >
        {/* Pulse ring */}
        <div
            className={`absolute inset-0 w-8 h-8 -translate-x-1 -translate-y-1 rounded-full transition-all duration-500 ${
                isActive ? "bg-primary/30 scale-150 animate-pulse-heart" : "bg-transparent scale-100"
            }`}
        />

        {/* Heart pin */}
        <div
            className={`relative text-2xl transition-all duration-300 hover:scale-150 ${
                isActive ? "scale-125 drop-shadow-[0_0_8px_hsl(340,80%,60%)]" : "hover:drop-shadow-[0_0_6px_hsl(340,80%,60%)]"
            }`}
            style={{
                animation: `gentle-bounce ${2 + dest.id * 0.2}s ease-in-out infinite`,
                animationDelay: `${dest.id * 0.3}s`,
            }}
        >
            📍
        </div>

        {/* Label on hover */}
        <div
            className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12 whitespace-nowrap bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1.5 text-xs font-body font-semibold text-primary pointer-events-none">
            {dest.name}
        </div>
    </div>
);

const DestinyMap = () => {
    const [activeDest, setActiveDest] = useState<Destination | null>(null);

    return (
        <section className="relative z-20 py-20 px-4 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-display text-primary text-center mb-3">
                    Mapa de Nuestro Destino 🗺️
                </h2>
                <p className="text-center text-muted-foreground font-elegant italic text-lg mb-12">
                    Cada pin es un momento que nos une... toca uno para descubrirlo
                </p>

                <div className="relative">
                    {/* Map container */}
                    <div
                        className="relative w-full aspect-[16/9] rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm overflow-hidden">
                        {/* Map grid lines */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={`h-${i}`}
                                className="absolute left-0 right-0 border-t border-primary/5"
                                style={{top: `${(i + 1) * 11}%`}}
                            />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={`v-${i}`}
                                className="absolute top-0 bottom-0 border-l border-primary/5"
                                style={{left: `${(i + 1) * 8}%`}}
                            />
                        ))}

                        {/* Abstract landmasses */}
                        <div
                            className="absolute w-[30%] h-[40%] top-[15%] left-[10%] rounded-[60%_40%_50%_70%] bg-primary/5 border border-primary/10"/>
                        <div
                            className="absolute w-[25%] h-[35%] top-[20%] left-[45%] rounded-[40%_60%_30%_70%] bg-primary/5 border border-primary/10"/>
                        <div
                            className="absolute w-[20%] h-[30%] top-[45%] left-[30%] rounded-[50%_50%_40%_60%] bg-primary/5 border border-primary/10"/>
                        <div
                            className="absolute w-[15%] h-[25%] top-[50%] left-[65%] rounded-[45%_55%_60%_40%] bg-primary/5 border border-primary/10"/>

                        {/* Dotted path connecting pins */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100"
                             preserveAspectRatio="none">
                            <path
                                d="M25,35 Q35,20 55,25 Q65,30 75,45 Q70,55 65,70 Q50,75 40,60 Q30,55 20,65"
                                fill="none"
                                stroke="hsl(340, 80%, 60%)"
                                strokeWidth="0.3"
                                strokeDasharray="1.5,1"
                                opacity="0.4"
                            />
                        </svg>

                        {/* Heart pins */}
                        {DESTINATIONS.map((dest) => (
                            <HeartPin
                                key={dest.id}
                                dest={dest}
                                isActive={activeDest?.id === dest.id}
                                onClick={() => setActiveDest(activeDest?.id === dest.id ? null : dest)}
                            />
                        ))}

                        {/* Compass */}
                        <div
                            className="absolute bottom-3 right-3 w-10 h-10 rounded-full border border-primary/20 bg-card/40 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-xs font-body text-primary/60">♥N</span>
                        </div>
                    </div>

                    {/* Selected destination info */}
                    <div
                        className={`mt-6 transition-all duration-500 ${
                            activeDest ? "opacity-100 translate-y-0 max-h-40" : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
                        }`}
                    >
                        {activeDest && (
                            <div
                                className="text-center bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 animate-fade-in-up">
                                <h3 className="text-xl font-display text-primary mb-2">{activeDest.name}</h3>
                                <p className="font-elegant italic text-muted-foreground">{activeDest.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                <p className="text-center text-muted-foreground font-elegant italic text-sm mt-8">
                    Nuestra historia es un camino que hemos construido paso a paso... y apenas comienza 🌎💕
                </p>
            </div>
        </section>
    );
};

export default DestinyMap;
