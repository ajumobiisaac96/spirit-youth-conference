"use client";

export default function ScrollingMessage() {
  const whatsappChannelLink =
    "https://whatsapp.com/channel/0029VbB17mtGk1FmihHB3k3g";
  const messageContent = (
    <>
      📢 Stay updated! Join our WhatsApp channel for the latest conference news
      and exclusive content!{" "}
      <a
        href={whatsappChannelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline font-semibold text-white"
      >
        Click here to join!
      </a>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white text-sm py-2 shadow-md overflow-hidden w-screen">
      {" "}
      {/* Added w-screen and ensured overflow-hidden */}
      {/* Use a custom utility class for the LTR animation */}
      <div className="flex flex-nowrap min-w-max animate-scroll-left-reverse">
        {/* Duplicate content multiple times to ensure continuous scrolling */}
        <span className="inline-block px-8">{messageContent}</span>
        <span className="inline-block px-8">{messageContent}</span>
        <span className="inline-block px-8">{messageContent}</span>
      </div>
    </div>
  );
}
