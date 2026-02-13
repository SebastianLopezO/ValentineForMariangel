import {useState} from "react";

interface MessageCardProps {
    title: string;
    message: string;
    delay?: number;
    variant?: "default" | "accent" | "elegant";
}

const variantStyles = {
    default: "bg-card border-primary/20 hover:border-primary/40",
    accent: "bg-secondary/40 border-accent/30 hover:border-accent/60",
    elegant: "bg-primary/5 border-rose-soft/30 hover:border-rose-soft/60",
};

const MessageCard = ({title, message, delay = 0, variant = "default"}: MessageCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 cursor-pointer hover:shadow-[0_0_25px_hsl(340_80%_60%/0.15)] hover:scale-[1.03] hover:-translate-y-1 animate-fade-in-up ${variantStyles[variant]} ${isFlipped ? "ring-2 ring-primary/30" : ""}`}
            style={{animationDelay: `${delay}ms`}}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <h3 className="text-xl sm:text-2xl font-display text-primary mb-3 transition-transform duration-300 group-hover:scale-105">
                {title}
            </h3>
            <p className="text-foreground/90 font-elegant text-base sm:text-lg leading-relaxed italic">
                {message}
            </p>
            {isFlipped && (
                <p className="mt-3 text-sm text-primary/60 font-body animate-fade-in-up">
                    💕 Toca de nuevo para cerrar
                </p>
            )}
        </div>
    );
};

export default MessageCard;
