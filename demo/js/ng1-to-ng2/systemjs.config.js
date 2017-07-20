/**
 * WEB ANGULAR VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */

/** Add Transpiler for Typescript */
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    packages: {
        'src': {
            defaultExtension: 'ts'
        },
        'vendor': {
            defaultExtension: 'js'
        }
    }
});

System.config({
    map: {
        'main': 'main.js',

        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
        // other libraries
        'rxjs': 'npm:rxjs@5.0.1',
        'ts': 'npm:plugin-typescript@5.2.7/lib/plugin.js',
        'typescript': 'npm:typescript@2.3.2/lib/typescript.js',
    },
    packages: {
        // Thirdparty barrels.
        'rxjs': { main: 'index' },
    }
});
