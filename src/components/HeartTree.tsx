const HEART_COLORS = [
  "hsl(340, 80%, 60%)",
  "hsl(345, 85%, 45%)",
  "hsl(340, 60%, 75%)",
  "hsl(350, 70%, 65%)",
  "hsl(20, 80%, 65%)",
  "hsl(338, 90%, 50%)",
  "hsl(355, 75%, 55%)",
  "hsl(10, 85%, 60%)",
];

const generateHearts = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const radius = 80 + Math.random() * 60;
    const cx = 200 + Math.cos(angle) * radius * 1.1;
    const cy = 140 + Math.sin(angle) * radius * 0.9;
    const size = 6 + Math.random() * 10;
    const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
    return { cx, cy, size, color, delay: Math.random() * 3 };
  });
};

const HeartTree = () => {
  const hearts = generateHearts(80);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 350" className="w-full h-auto">
        {/* Tree trunk */}
        <rect x="185" y="220" width="30" height="120" rx="5" fill="hsl(170, 60%, 30%)" />
        <rect x="175" y="230" width="10" height="40" rx="3" fill="hsl(170, 55%, 25%)" transform="rotate(-30, 175, 230)" />
        <rect x="215" y="240" width="8" height="35" rx="3" fill="hsl(170, 55%, 25%)" transform="rotate(25, 215, 240)" />

        {/* Heart-shaped foliage */}
        {hearts.map((heart, i) => (
          <text
            key={i}
            x={heart.cx}
            y={heart.cy}
            fontSize={heart.size}
            fill={heart.color}
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              animation: `pulse-heart ${1.5 + heart.delay}s ease-in-out infinite`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ♥
          </text>
        ))}
      </svg>
    </div>
  );
};

export default HeartTree;
