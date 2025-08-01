"use client";

export default function ScrollingMessage() {
  const whatsappChannelLink =
    "https://whatsapp.com/channel/0029VbB17mtGk1FmihHB3k3g";
  const messageContent = (
    <>
      📢 Stay updated! Join our WhatsApp channel to get more updates about the
      Spirit Youth Conference{" "}
      <a
        href={whatsappChannelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline font-semibold text-red-900"
      >
        Click here to join!
      </a>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-red-200 bg-opacity-80 border border-red-400 text-red-800 text-sm py-2 shadow-md text-center animate-pulse-effect">
      {messageContent}
    </div>
  );
}
