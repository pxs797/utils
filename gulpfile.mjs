import gulp from "gulp"
import { fileURLToPath } from "url"
import path from "path"
import fsExtra from "fs-extra"
import chalk from "chalk"
import { rollup } from "rollup"
import rollupConfig from "./rollup.config.mjs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const paths = {
  root: path.join(__dirname, "/"),
  lib: path.join(__dirname, "/lib")
}

const log = {
  success(text) {
    console.log(chalk.green(text));
  },
  error(text) {
    console.log(chalk.red(text));
  }
}

const start = (cb) => {
  log.success("---- start ----")
  cb()
}

const clearLib = async (cb) => {
  // TODO clear lib
  fsExtra.removeSync(paths.lib)
  log.success("fs-extra delete lib directory success")
  cb()
}

const buildByRollup = async (cb) => {
  // TODO rollup build
  const inputOptions = {
    input: rollupConfig.input,
    external: rollupConfig.external,
    plugins: rollupConfig.plugins
  }
  const outputOptions = rollupConfig.output
  const bundle = await rollup(inputOptions)
  outputOptions.forEach(async outputOption => {
    await bundle.write(outputOption)
  })
  cb()
  log.success("rollup build lib directory success")
}

const end = (cb) => {
  log.success("---- end ----")
  cb()
}

export const build = gulp.series(start, clearLib, buildByRollup, end)
