import pnuema from "../assets/pnuema.jpg";
import transportation from "../assets/transportation.jpg";
import ImageSlider from "./ImageSlider";

export default function ImageSection() {
  return (
    <section id="image-section" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="transform transition-all duration-1000 ease-out animate-fade-in-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              PNUEMA <br />
              <span className="text-indigo-500">(The Wind of the Spirit)</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 transform transition-all duration-1000 ease-out animate-fade-in-left animation-delay-200">
              We'll be glad to have you at the Spirit Youth Conference!{" "}
              <strong>We have provided free transportation</strong> to give you
              a beautiful experience. Kindly provide your information to help us
              plan better.
            </p>
            <p className="text-gray-600 transform transition-all duration-1000 ease-out animate-fade-in-left animation-delay-400">
              N.B: Registration is free but compulsory. See you there!
            </p>
          </div>
          <div className="order-first md:order-last transform transition-all duration-1000 ease-out animate-fade-in-right relative w-full h-96 md:h-[32rem]">
            <ImageSlider images={[pnuema, transportation]} />
          </div>
        </div>
      </div>
    </section>
  );
}
