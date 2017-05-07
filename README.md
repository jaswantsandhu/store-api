#  Store API
 Store API is the layer of api's required to run  Store to mobile and web. This is created using NodeJS and ExpressJS

### Tech Stack
 Store API uses a number of open source projects to work properly:

- [NodeJS] - Running javascript as language for backed.
- [Express] - Lightweight routing and view management.

### API Specifications
API specifications are available at swaggerhub @ https://app.swaggerhub.com/apis/jaswantsandhu/LittleStore/1.0.0

### Setup
-  store uses various NPM script commands for Installation, Testing, Packaging and Deployment. 

#### Installation
Install NodeJS v6+ and run command 
```sh
$ npm install
```
This will install all the required packages.

#### Development

Run the below command to start the development server.

```sh
$ npm run development
```

Verify the development server start by navigating to your server address (0.0.0.0:8080) in your preferred browser.


#### Production Builds

```sh
$ npm run build
```
If required to test the code before building deployment package run command

```sh
$ npm run testAndBuild
```

#### Testing

Testing is done using Mocha and Chai. Tests script are stored in the test folder.

```sh
$ npm run test
```

#### Deployment

To deploy the latest codebase to Production Server (Heroku) commit the code to the Heroku git repo or run the command 
```sh
$ npm run deploy
```
this will automatically commit the code to the heroku repo (if git remote is configured).

If deployment is done on non heroku instance you are required to run the commands 
```sh
$ npm install
```
and setup PM2 to manage the API server.

License
----
Closed