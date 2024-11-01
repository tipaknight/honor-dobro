import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  theme: {
    // ...
    colors: {
      veryCool: "#0000ff", // класс="text-very-cool"
    },
  },

  presets: [presetAttributify(), presetUno()],
});
