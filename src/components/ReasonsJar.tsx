import {useState} from "react";

const REASONS = [
    "Tu sonrisa de niña pequeña",
    "Tus mejillas siempre rojas",
    "Tus ojos oscuros que brillan en el sol",
    "Tu pelo brillante y suave",
    "Tus labios dulces y frescos",
    "Tu piel suave y fría al tomarme la mano",
    "Tu risa que me llena de alegría",
    "Tu forma bizarra de amar",
    "Cómo me enseñas cosas de sol a sol",
    "Tu carisma inigualable",
    "Esa confianza que me diste",
    "Tus conversaciones eternas de día a noche",
    "Cómo me hablas sin escrúpulos",
    "Tu inteligencia que me enamora",
    "Tu mirada analizadora",
    "Cómo me haces reír sin intentarlo",
    "Tu forma de ser alegre y bromear",
    "Esa seguridad que generas en mí",
    "Tu fragante palidez de nieve",
    "Tu palabra cristalina",
    "Esa dulzura de romántica princesa",
    "Tu determinación ante todo",
    "Cómo compartes tu conocimiento",
    "Tus imperfecciones perfectas",
    "Nuestros momentos íntimos",
    "Cada abrazo que me devuelve la paz",
    "Esas fotos que no quiero borrar",
    "Tu nombre que alegra mi corazón",
    "Todo lo que descubro de ti",
    "Todo tu hermoso ser ♥",
];

const FloatingNote = ({
                          reason,
                          index,
                          total,
                          onClick,
                      }: {
    reason: string;
    index: number;
    total: number;
    onClick: () => void;
}) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    const x = 12 + col * 18 + (Math.random() * 6 - 3);
    const y = 15 + row * 12 + (Math.random() * 4 - 2);
    const rotation = Math.random() * 30 - 15;
    const colors = [
        "hsl(340, 80%, 60%)",
        "hsl(345, 85%, 50%)",
        "hsl(340, 60%, 70%)",
        "hsl(20, 80%, 65%)",
        "hsl(350, 70%, 55%)",
        "hsl(338, 90%, 55%)",
    ];
    const color = colors[index % colors.length];

    return (
        <div
            className="absolute cursor-pointer transition-all duration-500 hover:scale-150 hover:z-30 group"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `rotate(${rotation}deg)`,
                animation: `sway ${2 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${(index * 0.15)}s`,
            }}
            onClick={onClick}
        >
            <div className="relative">
                <span style={{color, fontSize: `${10 + Math.random() * 8}px`}}>♥</span>
                <div
                    className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-1.5 text-xs font-elegant italic text-primary pointer-events-none z-40">
                    {reason}
                </div>
            </div>
        </div>
    );
};

const ReasonsJar = () => {
    const [revealedCount, setRevealedCount] = useState(0);
    const [showAll, setShowAll] = useState(false);

    return (
        <section className="relative z-20 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-display text-primary text-center mb-4">
                    Millones de razones para amarte 💕
                </h2>
                <p className="text-center text-muted-foreground font-elegant italic text-lg mb-12">
                    Pasa el cursor sobre los corazones para descubrir algunas...
                </p>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* The Jar */}
                    <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto flex-shrink-0">
                        {/* Jar body */}
                        <div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 sm:w-60 h-64 sm:h-72 rounded-b-[2rem] border-2 border-primary/30 bg-card/20 backdrop-blur-sm overflow-hidden">
                            {/* Glass shine */}
                            <div
                                className="absolute top-0 left-2 w-3 h-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent rounded-full"/>
                            <div
                                className="absolute top-0 right-4 w-1.5 h-3/4 bg-gradient-to-b from-primary/8 to-transparent rounded-full"/>

                            {/* Hearts inside jar */}
                            {REASONS.map((reason, i) => (
                                <FloatingNote
                                    key={i}
                                    reason={reason}
                                    index={i}
                                    total={REASONS.length}
                                    onClick={() => setRevealedCount((c) => c + 1)}
                                />
                            ))}

                            {/* Overflow hearts spilling out the top */}
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={`overflow-${i}`}
                                    className="absolute text-primary"
                                    style={{
                                        top: `${-5 - i * 3}%`,
                                        left: `${20 + i * 8}%`,
                                        fontSize: `${12 + Math.random() * 6}px`,
                                        transform: `rotate(${Math.random() * 40 - 20}deg)`,
                                        animation: `gentle-bounce ${2 + i * 0.3}s ease-in-out infinite`,
                                        animationDelay: `${i * 0.2}s`,
                                        opacity: 0.8,
                                    }}
                                >
                                    ♥
                                </div>
                            ))}
                        </div>

                        {/* Jar lid */}
                        <div
                            className="absolute bottom-[calc(100%-7rem)] sm:bottom-[calc(100%-6rem)] left-1/2 -translate-x-1/2 w-44 sm:w-48 h-6 rounded-t-lg bg-secondary border-2 border-primary/30 border-b-0"/>
                        <div
                            className="absolute bottom-[calc(100%-5.5rem)] sm:bottom-[calc(100%-4.5rem)] left-1/2 -translate-x-1/2 w-48 sm:w-52 h-3 rounded-t-md bg-secondary/80 border-x-2 border-t-2 border-primary/20"/>

                        {/* Label */}
                        <div
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/60 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-1.5 z-20">
                            <p className="text-xs font-elegant italic text-primary whitespace-nowrap">Razones infinitas
                                ∞</p>
                        </div>
                    </div>

                    {/* Side text */}
                    <div className="text-center md:text-left space-y-4 max-w-sm">
                        <p className="font-elegant italic text-lg text-foreground/85 leading-relaxed">
                            Podría describirte en dos simples palabras, pero para descubrir lo hermosa que eres hay que
                            ir más a fondo...
                        </p>
                        <p className="font-elegant italic text-foreground/70 leading-relaxed">
                            Hay tanto de ti en mi ser que es imposible olvidarte. Cada recuerdo, cada foto, cada
                            conversación eterna es una razón más para amarte.
                        </p>
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="mt-4 px-6 py-3 rounded-xl font-body font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30"
                        >
                            {showAll ? "Ocultar razones" : "Revelar algunas razones"} 💝
                        </button>

                        {showAll && (
                            <div className="mt-4 space-y-2 animate-fade-in-up">
                                {REASONS.slice(0, 10).map((r, i) => (
                                    <p key={i}
                                       className="text-sm font-elegant italic text-muted-foreground flex items-center gap-2">
                                        <span className="text-primary text-xs">♥</span> {r}
                                    </p>
                                ))}
                                <p className="text-sm font-elegant italic text-primary mt-2">...y millones más ∞</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonsJar;
