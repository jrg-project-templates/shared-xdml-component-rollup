import [PackageName] from './packageName.svelte'

declare global {
    interface Window {
        shared: any;
    }
}

window.shared = { [PackageName], ...window.shared }

export default [PackageName]
