// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
     apiKey: "AIzaSyCgzDh7NhAQck0k75nJE2kkLtwoqAVhS4c",
    authDomain: "angular-todo-cd42d.firebaseapp.com",
    databaseURL: "https://angular-todo-cd42d.firebaseio.com",
    projectId: "angular-todo-cd42d",
    storageBucket: "angular-todo-cd42d.appspot.com",
    messagingSenderId: "233219316383"
  }
};
