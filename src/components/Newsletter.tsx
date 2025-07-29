import type React from "react";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Join the Spirit Youth Conference
        </h2>
        <p className="text-gray-600 mb-8">
          Register now to secure your spot at the Spirit Youth Conference
          happening on August 9th - August 10th, 2025!
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Thank you for subscribing! We'll keep you updated.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              placeholder="Your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
            >
              Submit
            </button>
          </form>
        )}

        <p className="text-sm text-gray-500">
          {/* By clicking Submit, you agree to our Terms and Conditions. */}
        </p>
      </div>
    </section>
  );
}
