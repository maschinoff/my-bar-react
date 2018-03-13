# My Bar
**My Bar** is a applications developed with **React, Express and Firebase**. 

It allows to manage your bar.

## Prerequisites
The following list of tools that must be installed localy to run Portal:

* NodeJS
* Yarn

## Setup

Create new folder and run in terminal `git clone git@github.com:maschin/my-bar-react.git .`

### Firebase 
1. Create test and development database in firebase
2. Enable G+ authentication: Authentication/SIGN-IN METHODS/Google/Enable
3. Setup both test and development database rules: Database/RULES

```
TODO
```

### Client
1. Open a terminal and run `yarn install`
2. In the root directory, create a file `.env.developmet` and `.env.test` as follows, replacing values with your own settings to firebase:

```
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAI
FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER 
```
#### Dev Server
3. Run in terminal for development `yarn run dev-server`
4. React Dev Server runs on **localhost:8080**
#### Production Server  
4. Run in terminal for production `yarn run build:prod` **-->** `yarn run server`
4. Your Prod Server runs on **localhost:8080**

### Tests
1. Open a terminal and run `yarn test --watch`

### Heroku Deployment

## Roadmap
###Q1 2018
* Add new drink
* Edit existing drinks
* Delete existing drinks
* View list of all drink
* Sort by categories
* Sort by best before 