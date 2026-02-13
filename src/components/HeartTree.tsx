import {useMemo} from "react";

const HEART_COLORS = [
    "hsl(340, 90%, 55%)",  // hot pink
    "hsl(330, 85%, 65%)",  // pink
    "hsl(345, 80%, 50%)",  // deep pink
    "hsl(350, 75%, 60%)",  // rose
    "hsl(20, 85%, 60%)",   // orange
    "hsl(35, 90%, 55%)",   // golden orange
    "hsl(50, 90%, 60%)",   // yellow
    "hsl(310, 70%, 60%)",  // magenta
    "hsl(355, 85%, 45%)",  // red
    "hsl(338, 95%, 65%)",  // bright pink
    "hsl(15, 80%, 55%)",   // coral
    "hsl(325, 80%, 70%)",  // light magenta
];

// Heart shape parametric equation
const heartX = (t: number) => 16 * Math.pow(Math.sin(t), 3);
const heartY = (t: number) =>
    -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

const generateHearts = (count: number) => {
    const hearts: Array<{ cx: number; cy: number; size: number; color: string; delay: number; opacity: number }> = [];

    for (let i = 0; i < count; i++) {
        const t = Math.random() * Math.PI * 2;
        const r = Math.random(); // 0-1, how far from center to edge
        const scale = 9.5;

        // Fill the heart shape by interpolating from center to edge
        const edgeX = heartX(t) * scale;
        const edgeY = heartY(t) * scale;
        const cx = 210 + edgeX * r + (Math.random() - 0.5) * 12;
        const cy = 135 + edgeY * r + (Math.random() - 0.5) * 12;
        const size = 5 + Math.random() * 12;
        const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
        const delay = Math.random() * 4;
        const opacity = 0.7 + Math.random() * 0.3;

        hearts.push({cx, cy, size, color, delay, opacity});
    }

    return hearts;
};

// Falling petals from the tree
const generatePetals = (count: number) => {
    return Array.from({length: count}, (_, i) => ({
        startX: 140 + Math.random() * 140,
        size: 6 + Math.random() * 8,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 8,
        swayAmount: 20 + Math.random() * 40,
    }));
};

const HeartTree = () => {
    const hearts = useMemo(() => generateHearts(200), []);
    const petals = useMemo(() => generatePetals(8), []);

    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg viewBox="0 0 420 380" className="w-full h-auto overflow-visible">
                <defs>
                    <style>{`
            @keyframes petalFall {
              0% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
              50% { opacity: 0.7; }
              100% { transform: translateY(180px) rotate(360deg); opacity: 0; }
            }
            @keyframes heartPulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.15); }
            }
          `}</style>
                </defs>

                {/* Tree trunk - teal/turquoise color like the reference */}
                <rect x="195" y="235" width="30" height="130" rx="4" fill="hsl(175, 65%, 30%)"/>
                {/* Left branch */}
                <rect
                    x="180" y="240" width="8" height="45" rx="3"
                    fill="hsl(175, 60%, 28%)"
                    transform="rotate(-35, 180, 240)"
                />
                {/* Right branch */}
                <rect
                    x="228" y="245" width="8" height="40" rx="3"
                    fill="hsl(175, 60%, 28%)"
                    transform="rotate(30, 228, 245)"
                />

                {/* Heart-shaped canopy filled with tiny hearts */}
                {hearts.map((heart, i) => (
                    <text
                        key={i}
                        x={heart.cx}
                        y={heart.cy}
                        fontSize={heart.size}
                        fill={heart.color}
                        opacity={heart.opacity}
                        textAnchor="middle"
                        dominantBaseline="central"
                        style={{
                            animation: `heartPulse ${1.5 + heart.delay * 0.3}s ease-in-out infinite`,
                            animationDelay: `${heart.delay}s`,
                            transformOrigin: `${heart.cx}px ${heart.cy}px`,
                        }}
                    >
                        ♥
                    </text>
                ))}

                {/* Falling heart petals */}
                {petals.map((petal, i) => (
                    <text
                        key={`petal-${i}`}
                        x={petal.startX}
                        y={200}
                        fontSize={petal.size}
                        fill={petal.color}
                        opacity={0.8}
                        textAnchor="middle"
                        style={{
                            animation: `petalFall ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
                            transformOrigin: `${petal.startX}px 200px`,
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
