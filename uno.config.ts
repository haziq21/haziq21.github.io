import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  shortcuts: {
    "mosaic-img": "bg-teal-700 rounded-lg shadow-lg",
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  presets: [presetUno(), presetAttributify()],
});
