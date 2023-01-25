# About

This project shows the simplest structure of the Front-End client user interface.
That performs the just queries to the API side without gettingany responses.
It provides the general understanding how the components are connected to each other and what are the main entities of the application.

## Steps to generate the same project

1. Choose your IDE for WEB-development
    1. Microsoft Visual Studio Code - the most popular and has a lot of plugins
    2. JetBrains WebStorm - not freesoftware
    3. Sublime text, Vim, Atom or any other text editor Notepad++, for instance
2. Angular requires an active LTS or maintenance LTS version of Node.js.
    1. This might be helpful to indentify which version you need: [Stackoverflow discussion](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js)
    2. Current project created with the latest Angular CLI 15.1.1
    3. Installed Node.js on laptop v18.13.0. To check: **node -v**
    4. Installed NPM on laptop 9.3.0To check **npm -v**
    5. Links to some software you can find on the last slides of presentation
3. Create new folder where the project would settle
    1. Open VS Code and select created folder as start point and run terminal for it
    2. **ng new my-app --skip-tests** last key alows to skip unit tests and reduce the number of project files
    3. Enter created folder with **cd my-app**
    4. Install Bootstrap **npm install bootstrap --save**
    5. Create all componets:
        1. **ng g c login** - g-generate c-component login-name of component
        2. **ng g c register**
        3. **ng g c dashboard**
    6. Create class "register":
        1. ng g class register - g-generate class register-name of class
    7. Create connection service:
        1. ng g s login - g-generate s-service login-name of service
    8. Add to app/src/styles.css "@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css")"
4. Copy all the code to the appropriate files and try to run it with **ng serve** command via terminal
5. If everything fine go to **Development server** section
6. Final look for the pages after the project is up and running:
    ![AddUser](/images/addUserPage.PNG)
    ![Login](/images/loginPage.PNG)  

## RegistryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
