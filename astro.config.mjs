import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

import pdf from "astro-pdf";

// https://astro.build/config
export default defineConfig({
  site: "https://marincarroll.com",
  integrations: [
    alpinejs(),
    pdf({
      baseOptions: {
        pdf: {
          printBackground: true,
        },
      },
      pages: {
        "/": "MarinCarroll-Resume.pdf",
      },
    }),
  ],
});
