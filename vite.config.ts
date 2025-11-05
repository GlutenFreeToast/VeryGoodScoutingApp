import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { execSync } from "child_process";

// Run your script
execSync("node ./makeBuildInfo.js", { stdio: "inherit" });

export default defineConfig({
  plugins: [preact()],
});
