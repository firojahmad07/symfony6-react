const rootDir = process.cwd()
const { resolve, dirname } = require('path')
const glob = require('glob')
const { parse } = require('yamljs')
const { readFileSync, writeFileSync } = require('fs')
const deepmerge = require('deepmerge')

console.log('Updating datagrid extensions.json'.blue)

const BUNDLE_REQUIRE_PATH = resolve(rootDir, './public/js/require-paths')
const EXTENSIONS_JSON_PATH = 'public/js/extensions.json'

/**
 * Get the bundle path relative to the source folder
 *
 * @param {string} path
 */
function getRelativeBundlePath(path) {
    return path.replace(/^(.+?(?=vendor\/)|.+(?=src\/))\//gm, '')
}

/**
 * Read a file and return the contents as a string
 *
 * @param {string} path
 */
function getFileContents(path) {
    try {
        return parse(readFileSync(path, 'utf-8'))
    } catch (e) {
        console.log('Error', e)

        process.exit(1);
    }
}

/**
 * Given a list of bundles required by the app, return a list of form extension .yml files
 */
function getExtensionsFromRequiredBundles() {
    const requiredBundles = require(BUNDLE_REQUIRE_PATH);
    const bundleDirectories = requiredBundles.map(
        bundle => getRelativeBundlePath(bundle)
    )

    const formExtensions = []
    bundleDirectories.forEach(dir => {
        formExtensions.push(glob.sync(`${dir}/Resources/public/{datagrid/**/*.yaml,datagrid.yaml}`))
    })

    return [].concat.apply([], formExtensions);
}

/**
 * Get the form extension configuration from the .yml files and merge them
 *
 * Returns an object containing the attribute fields and form extensions sorted by position
 *
 * @param {string} paths
 */
function mergeExtensions(paths) {
    const config = paths.map(path => {
        return getFileContents(path) || {}
    })
    const merged = deepmerge.all(config)
    const mergedDatagrids = Object.entries(merged.datagrid).map(([code, datagrid]) => {
        return {
            ...datagrid,
            ...{ code } 
        }
    })

    return mergedDatagrids;
}

/**
 * Writes the merged form extensions to a file at public/js/extensions.json
 *
 * @param {Object} contents
 */
function writeExtensionsJSON(contents) {
    try {
        writeFileSync(EXTENSIONS_JSON_PATH, JSON.stringify(contents), {
            encoding: 'utf-8'
        })
    } catch (e) {
        console.log('Error', e)

        process.exit(1)
    }
}

const datagrids = getExtensionsFromRequiredBundles()
const mergedDatagrids = mergeExtensions(datagrids)

writeExtensionsJSON(mergedDatagrids)