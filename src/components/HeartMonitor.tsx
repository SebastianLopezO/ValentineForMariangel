import {useEffect, useRef} from "react";

const HeartMonitor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = 800;
        const H = 200;
        canvas.width = W;
        canvas.height = H;

        const ecgPattern = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 2, 5, 2, 0, 0, -2,
            0, 0, 0, 0, 0, -5, 30, -10, 5,
            0, 0, 0, 0, 3, 8, 12, 8, 3,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ];

        let offset = 0;
        let animId: number;

        const bgColor = "hsl(340, 30%, 8%)";
        const lineColor = "hsl(340, 100%, 65%)";
        const gridColor = "hsla(340, 80%, 60%, 0.08)";

        const draw = () => {
            ctx.fillStyle = bgColor.replace("8%", "8% / 0.15)").replace("hsl", "hsla");
            ctx.fillStyle = "rgba(20, 10, 15, 0.08)";
            ctx.fillRect(0, 0, W, H);

            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 0.5;
            for (let x = 0; x < W; x += 20) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, H);
                ctx.stroke();
            }
            for (let y = 0; y < H; y += 20) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(W, y);
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 2.5;
            ctx.shadowColor = lineColor;
            ctx.shadowBlur = 15;

            const mid = H / 2;
            for (let x = 0; x < W; x++) {
                const idx = (x + offset) % (ecgPattern.length * 4);
                const patIdx = Math.floor(idx / 4) % ecgPattern.length;
                const val = ecgPattern[patIdx] * 2.5;
                const y = mid - val;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            offset += 2;
            animId = requestAnimationFrame(draw);
        };

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, W, H);
        draw();

        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <section className="relative z-20 py-20 px-4 bg-background">
            <div className="max-w-3xl mx-auto text-center space-y-6">
                <p
                    className="text-sm sm:text-base tracking-[0.3em] uppercase text-primary"
                    style={{
                        fontFamily: "'Courier New', monospace",
                        textShadow: "0 0 20px hsl(340, 100%, 65% / 0.6)",
                    }}
                >
                    Mi corazón late...
                </p>

                <div className="rounded-xl overflow-hidden border border-primary/30">
                    <canvas ref={canvasRef} className="w-full h-auto" style={{display: "block"}}/>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50"
                     style={{
                         boxShadow: "0 0 25px hsl(340, 100%, 65% / 0.2), inset 0 0 25px hsl(340, 100%, 65% / 0.05)",
                     }}
                >
                    <span className="text-2xl">💗</span>
                    <span
                        className="text-xl sm:text-2xl font-display text-primary"
                        style={{textShadow: "0 0 10px hsl(340, 100%, 65% / 0.5)"}}
                    >
            14 • Febrero
          </span>
                </div>

                <p
                    className="text-sm text-primary/60"
                    style={{fontFamily: "'Courier New', monospace"}}
                >
                    ...cada latido lleva tu nombre, Mary
                </p>
            </div>
        </section>
    );
};

export default HeartMonitor;