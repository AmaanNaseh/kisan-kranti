import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false, // true in deployment
      },
      manifest: false, // Disable auto manifest generation
      includeAssets: ["/favicon.ico", "/Logo_192x192.png", "/Logo_512x512.png"], // Ensure icons are available
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Set the limit to 5 MiB
      },
    }),
  ],
});
