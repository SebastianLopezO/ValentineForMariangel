import {useState} from "react";

const FloatingParticle = ({delay, left, size}: { delay: number; left: number; size: number }) => (
    <div
        className="absolute rounded-full opacity-20"
        style={{
            left: `${left}%`,
            bottom: `-10px`,
            width: `${size}px`,
            height: `${size}px`,
            background: size > 6 ? "hsl(340, 60%, 65%)" : "hsl(340, 80%, 75%)",
            animation: `float-particle ${6 + delay * 2}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
        }}
    />
);

const GiftReveal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative z-20 py-20 px-4 overflow-hidden bg-secondary/30">
            {/* Floating particles */}
            {Array.from({length: 20}).map((_, i) => (
                <FloatingParticle key={i} delay={Math.random() * 5} left={Math.random() * 100}
                                  size={4 + Math.random() * 8}/>
            ))}

            <div className="max-w-lg mx-auto flex flex-col items-center text-center relative">
                {/* Gift box */}
                <div
                    className={`relative cursor-pointer select-none transition-transform duration-300 ${!isOpen ? "animate-gift-bounce hover:scale-110" : ""}`}
                    onClick={() => !isOpen && setIsOpen(true)}
                >
                    <div className="w-40 h-32 sm:w-52 sm:h-40 rounded-lg relative overflow-hidden bg-primary">
                        {Array.from({length: 12}).map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full bg-primary-foreground/25"
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    top: `${15 + (i % 3) * 30}%`,
                                    left: `${10 + Math.floor(i / 3) * 25}%`,
                                }}
                            />
                        ))}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-rose-soft"/>
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-5 bg-rose-soft"/>
                    </div>

                    <div
                        className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-rose-deep transition-all duration-700 ${isOpen ? "-translate-y-16 rotate-12 opacity-0" : ""}`}
                        style={{width: "calc(100% + 16px)", height: "20px"}}
                    />

                    <div
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 text-5xl transition-all duration-700 ${isOpen ? "-translate-y-20 scale-0 opacity-0" : ""}`}
                    >
                        🎀
                    </div>
                </div>

                <div
                    className={`mt-8 transition-all duration-700 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`}
                >
                    <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border">
                        <p className="text-2xl sm:text-3xl font-display text-primary">
                            Cada día contigo es un regalo 🎁
                        </p>
                        <p className="mt-3 font-elegant italic text-lg text-muted-foreground">
                            Y mi regalo favorito eres tú, Mariangel
                        </p>
                    </div>
                </div>

                {!isOpen && (
                    <p className="mt-8 font-body text-sm animate-pulse text-muted-foreground">
                        Toca el regalo para abrirlo 🎁
                    </p>
                )}

                <p className="mt-10 text-2xl sm:text-3xl font-display text-primary">
                    Feliz San Valentín, te amo 💝
                </p>
            </div>
        </section>
    );
};

export default GiftReveal;