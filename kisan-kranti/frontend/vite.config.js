import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: false, // Disable auto manifest generation
      includeAssets: ["/favicon.ico", "/Logo_192x192.png", "/Logo_512x512.png"], // Ensure icons are available
    }),
  ],
});
