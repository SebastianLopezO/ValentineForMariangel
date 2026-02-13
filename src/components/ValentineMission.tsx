import {useState} from "react";
import {Check, X} from "lucide-react";

const ValentineMission = () => {
    const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

    return (
        <section className="relative z-20 py-20 px-4 overflow-hidden bg-secondary/20">
            {/* Faint cursive writing bg */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                <p className="font-display text-[120px] sm:text-[200px] text-foreground rotate-[-8deg]">amor</p>
            </div>

            <div className="max-w-md mx-auto text-center relative">
                {/* Wax seal envelope */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="w-24 h-16 rounded-md flex items-center justify-center bg-primary/30">
                            <span className="text-2xl">💌</span>
                        </div>
                        <div
                            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs bg-rose-deep text-primary-foreground">
                            ♥
                        </div>
                    </div>
                </div>

                {/* Stickers */}
                <div className="absolute top-12 left-4 text-2xl rotate-[-15deg] opacity-60">⭐</div>
                <div className="absolute top-20 right-6 text-xl rotate-[10deg] opacity-50">💕</div>
                <div className="absolute bottom-16 left-8 text-lg rotate-[20deg] opacity-40">✨</div>

                <h2 className="text-2xl sm:text-3xl font-body font-semibold mb-8 text-foreground">
                    ¿Aceptas la misión de ser mi San Valentín? 💘
                </h2>

                {answer === null ? (
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setAnswer("yes")}
                            className="flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-body font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-primary text-primary-foreground"
                        >
                            <Check size={20}/>
                            ¡Sí!
                        </button>
                        <button
                            onClick={() => setAnswer("yes")}
                            className="flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-body font-semibold transition-all duration-300 hover:scale-105 bg-secondary text-secondary-foreground border border-border"
                        >
                            <X size={20}/>
                            No
                        </button>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <div className="inline-block px-8 py-6 rounded-2xl bg-card border border-border">
                            <p className="text-3xl mb-2">🥰</p>
                            <p className="text-xl font-display text-primary">
                                ¡Sabía que dirías que sí, mi mamor!
                            </p>
                            <p className="font-elegant italic mt-2 text-muted-foreground">
                                Contigo quiero estar la vida entera si es posible ♥
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-10 flex justify-center gap-3">
                    {["💗", "⭐", "💗", "⭐", "💗"].map((emoji, i) => (
                        <span key={i} className="text-xl opacity-50">{emoji}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValentineMission;