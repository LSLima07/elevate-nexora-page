import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5515998130853?text=${encodeURIComponent(
  "Olá! Estava navegando no site da NEXORA e gostaria de tirar uma dúvida sobre os serviços de vocês."
)}`;

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a NEXORA no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_40px_-10px_var(--neon-green)] transition-transform hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden
        className="pulse absolute inset-0 rounded-full bg-primary/40"
      />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}