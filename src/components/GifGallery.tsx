import gif1 from "@/assets/gif1.gif";
import gif2 from "@/assets/gif2.gif";
import gif3 from "@/assets/gif3.gif";
import gif4 from "@/assets/gif4.gif";
import gif5 from "@/assets/gif5.gif";
import gif6 from "@/assets/gif6.gif";

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6];

const GifGallery = () => (
  <div className="space-y-4">
    <h2 className="text-2xl sm:text-3xl font-display text-primary text-center">
      Nuestros Momentos ✨
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {gifs.map((gif, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(340_80%_60%/0.2)] animate-fade-in-up"
          style={{ animationDelay: `${i * 150}ms` }}
        >
          <img
            src={gif}
            alt={`Momento especial ${i + 1}`}
            className="w-full h-32 sm:h-48 object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

export default GifGallery;
