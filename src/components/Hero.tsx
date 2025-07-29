"use client";

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  // Scroll to the ImageSection
  const handleLearnMore = () => {
    const el = document.getElementById("image-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="w-full bg-gradient-to-b from-white via-blue-200 to-blue-700 py-12 md:py-20 overflow-hidden"
    >
      <div className="px-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 mb-8 rounded-xl transform transition-all duration-1000 ease-out animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-2 transform transition-all duration-1200 ease-out animate-fade-in-up animation-delay-200">
            Welcome to Spirit Youth Conference 2025!
          </h1>
        </div>

        <p className="text-lg md:text-xl text-blue-900 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 ease-out animate-fade-in-up animation-delay-400">
          Join us for an inspiring weekend filled with faith, fellowship, and
          power. The conference will take place from{" "}
          <span className="font-bold text-blue-800">
            August 9th-10th, 2025.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out animate-fade-in-up animation-delay-600">
          <button
            onClick={onRegisterClick}
            className="px-8 py-3 bg-white text-blue-700 rounded-full hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-out font-medium shadow-lg hover:shadow-xl transform"
          >
            Register
          </button>
          <button
            onClick={handleLearnMore}
            className="px-8 py-3 bg-white border border-blue-400 text-blue-700 rounded-full hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-out font-medium shadow-lg hover:shadow-xl transform"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
