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

const MessageCard = ({ title, message, delay = 0, variant = "default" }: MessageCardProps) => (
  <div
    className={`rounded-2xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_25px_hsl(340_80%_60%/0.15)] animate-fade-in-up ${variantStyles[variant]}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-xl sm:text-2xl font-display text-primary mb-3">
      {title}
    </h3>
    <p className="text-foreground/90 font-elegant text-base sm:text-lg leading-relaxed italic">
      {message}
    </p>
  </div>
);

export default MessageCard;
