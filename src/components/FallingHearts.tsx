import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = [
  "hsl(340, 80%, 60%)",
  "hsl(345, 85%, 45%)",
  "hsl(340, 60%, 75%)",
  "hsl(350, 40%, 85%)",
  "hsl(20, 80%, 65%)",
  "hsl(338, 70%, 55%)",
];

const FallingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 16 + 8,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 10,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            color: heart.color,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;
