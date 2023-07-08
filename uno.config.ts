import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  shortcuts: {
    "nav-even": "bg-amber-50 text-teal-900 fill-teal-900 stroke-teal-900",
    "nav-odd": "bg-teal-900 text-amber-50 fill-amber-50 stroke-teal-50",
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    data: {
      even: "color-scheme=even",
    },
  },
  presets: [presetUno(), presetAttributify()],
});
