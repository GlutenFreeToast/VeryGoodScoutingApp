import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { execSync } from "child_process";
import { viteSingleFile } from "vite-plugin-singlefile";

//Increment Build Number
execSync("node ./makeBuildInfo.js", { stdio: "inherit" });

export default defineConfig({
  plugins: [
    preact(),
    viteSingleFile(), //Puts EVERYTHING into a single HTML, disable later?
  ],
  build: {
    assetsInlineLimit: Infinity, // Inline assets
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
});
