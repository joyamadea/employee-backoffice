Application can be run in [https://employee-backoffice.vercel.app/](https://employee-backoffice.vercel.app/)

First, there is a login page with **Username**: admin **Password**: admin123. You cannot access other pages before logging in.

After you have logged in, there will be the employee list with pagination, filter, and search available. Filter on the top right is a global filter.
It is possible to filter per column, although it is not yet optimized for cross platform views.

To add employees, there is a + button on the top left of the table. You will be redirected to the add employee page. In this page,
all fields are required before saving, but it is possible to click on 'Save' first and get hit with a validation error. After clicking 'Save' with
correct input, will be redirected to employee list page with newest addition first on the table.

To see detail of employee, click on the row. To get redirected back to the list, click on 'OK'.

This application was made with Angular 16.2.0 with PrimeNG 16.7.1 UI components (along with Primeflex for grids).

# EmployeeBackoffice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
