import path from "path"
import { eslint } from "rollup-plugin-eslint"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import rollupTypescript from "rollup-plugin-typescript2"
import babel from "rollup-plugin-babel"
import { DEFAULT_EXTENSIONS } from "@babel/core"
import { fileURLToPath } from "url"
import pkg from "./package.json" assert { type: "json" }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const paths = {
  input: path.join(__dirname, "/src/index.ts"),
  output: path.join(__dirname, "/lib")
}

export default {
  input: paths.input,
  output: [
    {
      file: path.join(paths.output, "index.js"),
      format: "cjs",
      name: pkg.name
    },
    {
      file: path.join(paths.output, "index.esm.js"),
      format: "es",
      name: pkg.name
    }
  ],
  external: [],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ["src/**/*.ts"],
      exclude: ["node_modules/**", "lib/**", "*.js"]
    }),
    commonjs(),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    rollupTypescript(),
    babel({
      runtimeHelpers: true,
      exclude: "node_modules/**",
      extensions: [
        ...DEFAULT_EXTENSIONS,
        ".ts"
      ]
    })
  ]
}