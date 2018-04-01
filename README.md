# My Bar
**My Bar** is a applications developed with **React, Express and Firebase**. 

It allows you to easily manage your bar.

Application was developed to practise with React and Firebase development workflow.

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
3. Run in terminal for production `yarn run build:prod` **-->** `yarn run server`
4. Your Prod Server runs on **localhost:8080**

### Tests
1. Open a terminal and run `yarn test --watch`

### Heroku Deployment
1. Login to heroku https://www.heroku.com/
2. Install heroku CLI https://devcenter.heroku.com/articles/heroku-cli
3. Login to heroku `heroku login`
4. Create app `heroku create my-bar-react`
5. Setup heroku varialbles for firebase
```
heroku config:set FIREBASE_API_KEY=YOUR_API_KEY
heroku config:set FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAI
heroku config:set FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
heroku config:set FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
heroku config:set FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
heroku config:set FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER
```
6. Upload & build to heroku `git push heroku master`
7. Run app `heroku open`

## Roadmap
### Q1 2018
* Add new drink (resolved)
* Edit existing drinks (resolved)
* Delete existing drinks (resolved)
* View list of all drink (resolved)
* Detailed view (resolved)
* Confirmation on delete
### Q2 2018
* Sort by categories
* Sort by best before 