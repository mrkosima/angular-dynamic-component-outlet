// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
  '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
  '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
  '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
  '@angular/platform-browser-dynamic': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
  '@angular/http': 'vendor/@angular/http/bundles/http.umd.js',
  '@angular/router': 'vendor/@angular/router/bundles/router.umd.js',
  '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',

  // angular testing umd bundles
  '@angular/core/testing': 'vendor/@angular/core/bundles/core-testing.umd.js',
  '@angular/common/testing': 'vendor/@angular/common/bundles/common-testing.umd.js',
  '@angular/compiler/testing': 'vendor/@angular/compiler/bundles/compiler-testing.umd.js',
  '@angular/platform-browser/testing': 'vendor/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
  '@angular/platform-browser-dynamic/testing': 'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
  '@angular/http/testing': 'vendor/@angular/http/bundles/http-testing.umd.js',
  '@angular/router/testing': 'vendor/@angular/router/bundles/router-testing.umd.js',
  '@angular/forms/testing': 'vendor/@angular/forms/bundles/forms-testing.umd.js',
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  'rxjs',
  'angular2-component-outlet',

  // App specific barrels.
  'app',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'angular2-component-outlet': 'vendor/angular2-component-outlet',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
