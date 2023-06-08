#!/usr/bin/env node

import { build } from "esbuild";
import { clean } from "esbuild-plugin-clean";
import esbuildPluginPino from "esbuild-plugin-pino";
import { tsconfigPathsPlugin } from "esbuild-plugin-tsconfig-paths";

const environment = process.argv.slice(2)[0];

if (!["development", "production"].includes(environment)) {
  console.error(
    "ERR: must provide a valid build environment (development, production)"
  );
  process.exit(1);
}

const envToBuildConfig = {
  production: {
    entryPoints: ["src/server.ts"],
    bundle: true,
    minify: true,
    platform: "node",
    target: "node16",
    logLevel: "error",
    outdir: "dist",
    plugins: [
      clean({ patterns: ["./dist/*"] }),
      esbuildPluginPino({ transports: ["pino-pretty"] }),
    ],
  },
  development: {
    entryPoints: ["src/server.ts"],
    bundle: true,
    packages: "external",
    platform: "node",
    target: "node16",
    logLevel: "error",
    outfile: "dist/server.js",
    plugins: [clean({ patterns: ["./dist/*"] }), tsconfigPathsPlugin()],
  },
};

build(envToBuildConfig[environment]);
