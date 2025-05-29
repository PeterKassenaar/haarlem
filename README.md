# haarlem

Slides and example code on the the training Angular - Gemeente Haarlem, spring 2025.
This repository will be deleted on 1 July 2025. Please update your code beforehande.

## Slides

- Find the slides in the folder `/slides`.

## Links

- TypeScript Configuration options: https://www.typescriptlang.org/tsconfig/
- Angular CLI: https://cli.angular.io/
- Angular Router: https://angular.io/guide/router
- NVM (Node Version Manager) for windows: https://github.com/coreybutler/nvm-windows
- Angular Architects, Manfred Steyer: https://www.angulararchitects.io/en/
- TypeScript compiler becomes 10x as fast: https://devblogs.microsoft.com/typescript/typescript-native-port/

## RxJS

- Small example project with some RxJS Operators: https://github.com/PeterKassenaar/ngx-rxjs-operators
- Documentation on RxJS Operators: https://rxjs.dev/api, or https://www.learnrxjs.io/
- RxMarbles, interactive diagrams for RxJS operators: https://rxmarbles.com/

## Forms

- Formly - create your form, based on a (json) model:https://formly.dev/
- A small sample project, using formly: https://github.com/PeterKassenaar/ngx-formly-demo. Old, but still working. Note
  however, newer/additional options might be available.

## Sample code

There are various sample projects in the folder:

- `sample app` - a simple app with a single page. Example components available containing the topics discussed.
- `examples/100-basic-routing` - a simple app with routing as a first step.
- `examples/110-routing-guards` - an app with a canActivate guard.
- `examples/120-canDeactivate-guard` - an app with a canDeactivate guard.
- `examples/150-reactive-forms` - example of reactive forms.
- `examples/160-dynamic-formarray` - example with a dynamic `FormArray` creating a 'playlist' with an unlimited number
  of songs.
- `examples/200-i18n-example-app` - a simple internationalization example - you need a reload to change translation
  files.
- `examples/210-ngx-translate` - a simple translation example with translation on the fly.
- `examples/250-ngrx-simple-store` - an example of `@ngrx/store` usage. Please note: This uses and OLDER VERSION of
  Node.js and Angular.
- `examples/260-ngrx-effects` - an example of `@ngrx/effects` usage to talk to a dummy API. Please note: This uses and
  OLDER VERSION of Node.js and Angular.
    - During the training: added the loading effect to show/hide a spinner or loading message while busy loading.

Questions? Email me at info@kassenaar.com - thanks!
Cheers, Peter.
