# NGX-ProjBase

NGX ProjBase is a base project designed to support building a new
Angular Application based on Material Angular with high produtivity.

Its code is open under the GNU Lesser General Public License, version 3.0 (LGPL-3.0), an OSI Approved License.
LGPL-3.0 is a set of additional permissions added to version 3 of the GNU General Public License.

It's designed to work with any kind of REST API and offers, mainly:

 * A lot of Rich and Ready-to-Use UI standardized components;
 * Fast-way to develop CRUDs based on writing screen metadatas;
 * Base layout with top navbar, sidbar,  breadcrumb, footer, etc.;
 * Module organization goals;
 * User and Login (SSO) ready patterns.


## How to Start:

Start this project as an Angular Application. 
The base project is an application depending on NGX-ProjBase (lib folder).

It's a mix of the componnents showcase and documentation at the same time.
You will understante how to use it, reading its docs pages.

To see how to build the lib, see the next topic below.

## Build to Production:

- Adjust the lib's version to be published in package.json in `projects/projbase`;
- Run the command: `ng build --configuration production`


## Project Architecture

 * This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.
 * Angular.io v11 and Angular-Material v11.
 * @angular/core: ~11.2.11
 * @angular/material: ^11.2.13

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
