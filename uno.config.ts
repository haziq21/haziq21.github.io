import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  shortcuts: {
    "nav-odd": "bg-teal-900 text-amber-50 fill-amber-50",
    "nav-even": "bg-amber-50 text-teal-900 fill-teal-900",
    "mosaic-img": "bg-teal-700 rounded-lg shadow-lg",
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  presets: [presetUno(), presetAttributify()],
});
