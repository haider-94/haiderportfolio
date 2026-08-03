import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRubyonrails,
  SiRuby,
  SiVuedotjs,
  SiRedux,
  SiShopify,
  SiStripe,
  SiPostgresql,
  SiGit,
  SiGooglemaps,
  SiMui,
  SiAmazon,
  SiSentry,
  SiHtml5,
} from "react-icons/si";
import {
  Server,
  BarChart3,
  Bell,
  Bluetooth,
  Bot,
  Zap,
  Bug,
  Sparkles,
  MousePointer2,
} from "lucide-react";

// `color` holds a brand hex for recognizable logos. When omitted, the icon
// inherits the chip's text color (theme-aware) — used for generic glyphs.
// `var(--ink)` is used for logos that are otherwise black/invisible on one theme.
type Tech = { Icon: ComponentType<any>; color?: string };

const map: Record<string, Tech> = {
  // languages
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  ruby: { Icon: SiRuby, color: "#CC342D" },
  "html & css": { Icon: SiHtml5, color: "#E34F26" },

  // frameworks
  "react.js": { Icon: SiReact, color: "#61DAFB" },
  react: { Icon: SiReact, color: "#61DAFB" },
  "react native": { Icon: SiReact, color: "#61DAFB" },
  "react admin": { Icon: SiReact, color: "#61DAFB" },
  "next.js": { Icon: SiNextdotjs, color: "var(--ink)" },
  "node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "ruby on rails": { Icon: SiRubyonrails, color: "#D30001" },
  "vue.js": { Icon: SiVuedotjs, color: "#42B883" },

  // tools & services
  redux: { Icon: SiRedux, color: "#764ABC" },
  "rest apis": { Icon: Server },
  shopify: { Icon: SiShopify, color: "#7AB55C" },
  stripe: { Icon: SiStripe, color: "#635BFF" },
  sentry: { Icon: SiSentry, color: "#8B5CF6" },
  postgresql: { Icon: SiPostgresql, color: "#4169E1" },
  git: { Icon: SiGit, color: "#F05032" },
  "google maps": { Icon: SiGooglemaps, color: "#4285F4" },
  "material ui": { Icon: SiMui, color: "#007FFF" },
  "amazon sp-api": { Icon: SiAmazon, color: "#FF9900" },
  "analytics pipelines": { Icon: BarChart3 },
  "push notifications": { Icon: Bell },
  "push notification": { Icon: Bell },
  ble: { Icon: Bluetooth, color: "#0082FC" },

  // ai-assisted
  claude: { Icon: Sparkles, color: "#C8452B" },
  cursor: { Icon: MousePointer2 },
  "coding copilots": { Icon: Bot },
  "rapid prototyping": { Icon: Zap },
  "llm debugging": { Icon: Bug },
};

export function getTechIcon(name: string): Tech | null {
  return map[name.trim().toLowerCase()] ?? null;
}
