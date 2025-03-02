import { Globe, Handshake, Megaphone, MessageSquareHeart, Palette, Video } from 'lucide-react';

export const services = [
  { key: 'social-media', Icon: MessageSquareHeart },
  { key: 'paid-media', Icon: Megaphone },
  { key: 'web-development', Icon: Globe },
  { key: 'branding', Icon: Palette },
  { key: 'content', Icon: Video },
  { key: 'consulting', Icon: Handshake },
] as const;
