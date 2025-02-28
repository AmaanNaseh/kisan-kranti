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
      },
    },
    port: "5174",
  },
});
