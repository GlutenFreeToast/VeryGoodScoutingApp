import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { execSync } from "child_process";
import { viteSingleFile } from "vite-plugin-singlefile";

// Increment Build Number
execSync("node ./makeBuildInfo.js", { stdio: "inherit" });

export default defineConfig({
  plugins: [
    preact(),
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      // Make React imports resolve to Preact compatibility layer
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  build: {
    assetsInlineLimit: Infinity,
  },
  assetsInclude: [
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
  ],
});
