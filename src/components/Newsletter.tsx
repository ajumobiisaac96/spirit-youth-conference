"use client";

export default function Newsletter() {
  const whatsappChannelLink =
    "https://whatsapp.com/channel/0029VbB17mtGk1FmihHB3k3g";

  return (
    <section id="newsletter" className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Stay Connected!
        </h2>
        <p className="text-gray-600 mb-8">
          Join our WhatsApp channel to get more updates about the Spirit Youth
          Conference, exclusive content, and important announcements. Stay
          connected with us!
        </p>

        <a
          href={whatsappChannelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
        >
          Follow WhatsApp Channel
        </a>

        <p className="text-sm text-gray-500 mt-4">
          Click the "Follow" button on the WhatsApp channel page to receive
          updates.
        </p>
      </div>
    </section>
  );
}
