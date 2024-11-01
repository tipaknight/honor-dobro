import { defineConfig } from "astro/config";
import unocss from "unocss/astro";
import { presetUno } from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [unocss({
    presets: [
      presetUno(),
      presetDaisy({
        styled: true,
        themes: ["light"],
      }),
    ],
    injectReset: true,
  }), react()],
});