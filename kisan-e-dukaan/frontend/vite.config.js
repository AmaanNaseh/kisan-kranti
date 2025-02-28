import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { E_Dukaan_Backend_API } from "./Config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: E_Dukaan_Backend_API,
        changeOrigin: true, // Ensures the host header is correctly set for the API
        secure: true, // Ensures SSL certificates are validated (use false only for dev purposes)
      },
    },
    port: "5174",
  },
});
