import { MessageCircle } from "lucide-react";
import { WHATSAPP_SUPPORT_URL } from "@/lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NEXORA no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--neon-green)] transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-primary/30 [animation-duration:2.5s]"
      />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}