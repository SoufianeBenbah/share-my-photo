# Share my photos

This file's purpose is to show to install the app. To know more about the framworks used in this project go to [Stack tech](Stack_teck.md)

## Front-end

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Back-end

### Installation

Navigate to directory `server/` and run ``` npm install ``` to install the dependecies needed for the server to function.

```bash
cd server
npm install
```

### Developement server

Run `node server.js` or `nodemon server.js` in the `server/` directory for a dev server. The app will automatically reload if you change any of the source files.

## Database

A MongoDB database is used in this project, the url of this DB is hard coded in the server. Please change that to an `.env` file for production.
The databse's collenctions look like somthing like this, 
|_id| picture  | comment  |  
|---|---|---|
| ObjectId  | Array of string  | The comment of post  | 


