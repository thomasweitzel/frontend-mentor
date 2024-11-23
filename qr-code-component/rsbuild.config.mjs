import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    template: "./index.html",
  },
  source: {
    entry: {
      index: "./src/index.jsx",
    },
    alias: {
      // This has to be synchronized with jsconfig.json for the IDE to pick it up
      "@": "./src",
    },
  },
  output: {
    assetPrefix: './'
  },
  plugins: [pluginReact()],
  jsx: "react-jsx",
});
