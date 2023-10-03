// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDv79SAmyBoHXFnFZ33dC5CrN7KX1ltDbI",
    authDomain: "yoga-webapp.firebaseapp.com",
    projectId: "yoga-webapp",
    storageBucket: "yoga-webapp.appspot.com",
    messagingSenderId: "913856739164",
    appId: "1:913856739164:web:7e94cfa1237779e1af3399",
    measurementId: "G-DVMR91MVXD"
  },
  baseUrl : `https://yoga-webapp-default-rtdb.firebaseio.com`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
