import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import {componentTagger} from "lovable-tagger";

export default defineConfig({
     server: {
        host: "::",
        port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./src/test/setup.ts"],
        include: ["src/**/*.{test,spec}.{ts,tsx}"],
    },
    resolve: {
        alias: {"@": path.resolve(__dirname, "./src")},
    },
    base: "/valentineday/",
});
