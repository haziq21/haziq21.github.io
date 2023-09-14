import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  presets: [presetUno(), presetAttributify()],
});
