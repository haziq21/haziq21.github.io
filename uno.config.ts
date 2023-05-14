import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["IBM Plex Sans", "sans-serif"],
    },
  },
  presets: [presetUno(), presetAttributify()],
});
