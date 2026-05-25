import { MessageCircle } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/61433063494?text=" +
  encodeURIComponent("Hi Show Salon, I'd like to book an appointment.");

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-primary-foreground shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:shadow-xl sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/40" />
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-medium sm:inline">Book on WhatsApp</span>
    </a>
  );
}
