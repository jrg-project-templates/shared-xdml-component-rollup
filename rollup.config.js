import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import {scss} from 'svelte-preprocess'
import {terser} from "rollup-plugin-terser";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/main.js',
  output: [
    {file: `dist/${pkg.name}-${pkg.version}.mjs`, 'format': 'esm', name},
    {file: `dist/${pkg.name}-${pkg.version}.js`, 'format': 'umd', name}
  ],
  plugins: [
    svelte({
			preprocess: [
				scss({})
			],
      // customElement: true,
      accessors: true
		}),
    resolve(),
    terser()
  ]
}
