import svelte from 'rollup-plugin-svelte-hot';
import Hmr from 'rollup-plugin-hot'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { copySync, removeSync } from 'fs-extra'
import { spassr } from 'spassr'
import getConfig from '@roxi/routify/lib/utils/config'
import { injectManifest } from 'rollup-plugin-workbox'
import sveltePreprocess from "svelte-preprocess";
import json from '@rollup/plugin-json'

const { distDir } = getConfig() // use Routify's distDir for SSOT
const assetsDir = 'assets'
const buildDir = `dist/build`
const isNollup = !!process.env.NOLLUP
const production = !process.env.ROLLUP_WATCH;
import analyze from 'rollup-plugin-analyzer';

// clear previous builds
removeSync(buildDir)
removeSync(distDir)


const serve = () => ({
    writeBundle: async () => {
        const options = {
            assetsDir: [assetsDir, distDir],
            entrypoint: `${assetsDir}/__app.html`,
            script: `${buildDir}/main.js`,
        }
        spassr({ ...options, port: 5000 })
        spassr({ ...options, ssr: true, port: 5005, ssrOptions: { inlineDynamicImports: true, dev: true } })
    }
})
const copyToDist = () => ({ writeBundle() { copySync(assetsDir, distDir) } })


export default {
    preserveEntrySignatures: false,
    input: ['src/main.ts'],
    output: {
        sourcemap: true,
        format: 'esm',
        dir: buildDir,
        // for performance, disabling filename hashing in development
        chunkFileNames:`[name]${production && '-[hash]' || ''}.js`
    },
    plugins: [
        json({
            compact: true
          }),
        svelte({
            dev: !production, // run-time checks      
            // Extract component CSS — better performance
            css: css => css.write(`bundle.css`),
            hot: isNollup,
            preprocess: [
                sveltePreprocess({
                    sourceMap: !production,
                    postcss: {
                        plugins: [
                            require("tailwindcss"), 
                            require("autoprefixer"),
                        ]
                    }
                })
            ]
        }),

        // resolve matching modules from current working directory
        resolve({
            browser: true,
            dedupe: importee => !!importee.match(/svelte(\/|$)/)
        }),
        commonjs(),
		typescript({
			sourceMap: true,
			inlineSources: true
		}),

        production && terser(),
        !production && !isNollup && serve(),
        !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
        !production && isNollup && Hmr({ host: "0.0.0.0", inMemory: true, public: assetsDir }), // refresh only updated code
        {
            // provide node environment on the client
            transform: code => ({
                code: code.replace('process.env.NODE_ENV', `"${process.env.NODE_ENV}"`),
                map: { mappings: '' }
            })
        },
        injectManifest({
            globDirectory: assetsDir,
            globPatterns: ['**/*.{js,css,svg}', '__app.html'],
            swSrc: `src/sw.js`,
            swDest: `${distDir}/serviceworker.js`,
            maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
            mode: 'production'
        }),
        production && copyToDist(),
      analyze(),
    ],
    watch: {
        clearScreen: false,
        buildDelay: 100,
    }
}
