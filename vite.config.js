import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
    port: 3000,
  },
  plugins: [
    {
      name: "wasm-mime",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith(".wasm")) {
            res.setHeader("Content-Type", "application/wasm");
          }
          next();
        });
      },
    },

    react(),
  ],

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
    // Exclude all Innovatrics DOT components from optimization
    exclude: [
      "@innovatrics/dot-smile-liveness",
      "@innovatrics/dot-document-auto-capture",
      "@innovatrics/dot-auto-capture-ui",
    ],
  },

  // Include WASM files as assets
  assetsInclude: ["**/*.wasm"],

  // Configure build to preserve WASM files for all DOT components
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Preserve WASM filenames and paths for all DOT components
          // Use 'names' array instead of deprecated 'name' property
          const fileName =
            assetInfo.names?.[0] || assetInfo.originalFileName || "";
          if (fileName.endsWith(".wasm")) {
            return "dot-assets/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
