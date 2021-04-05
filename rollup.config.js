import pluginTypescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
    sourcemap: "inline",
  },
  plugins: [pluginTypescript()],
};
