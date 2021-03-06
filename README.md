# My Bar
**My Bar** is an application developed with **React, Express, and Firebase**.

It allows you to easily manage your bar.

The application was developed to practice with React and Firebase development workflow.

## Prerequisites
The following list of tools that must be installed locally to run app:

* NodeJS
* Yarn

## Setup

Create a new folder and run in terminal `git clone git@github.com:maschin/my-bar-react.git .`

### Firebase 
1. Create test and development database in firebase
2. Enable G+ authentication: Authentication/SIGN-IN METHODS/Google/Enable
3. Setup both test and development database rules: Database/RULES
4. Dev and Live firebase rules are in `firebaseRules.json`

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
3. Run in the terminal for development `yarn run dev-server`
4. React Dev Server runs on **localhost:8080**
#### Production Server  
3. Run in the terminal for production `yarn run build:prod` **-->** `yarn run server`
4. Your Prod Server runs on **localhost:8080**

### Tests
1. Open a terminal and run `yarn test --watch`

### Heroku Deployment
1. Login to Heroku https://www.heroku.com/
2. Install Heroku CLI https://devcenter.heroku.com/articles/heroku-cli
3. Login to Heroku `heroku login`
4. Create app `heroku create my-bar-react`
5. Setup Heroku variables for firebase
```
heroku config:set FIREBASE_API_KEY=YOUR_API_KEY
heroku config:set FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAI
heroku config:set FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
heroku config:set FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
heroku config:set FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
heroku config:set FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER
```
6. Upload & build to Heroku `git push heroku master`
7. Run app `heroku open`

## Roadmap
### Q1 2018 - 28h
* Add a new drink (resolved)
* Edit existing drinks (resolved)
* Delete existing drinks (resolved)
* View list of all drink (resolved)
* Detailed view (resolved)
* Highlight opened and emptied drinks (resolved)

### Q2 2018 - 5h
* Search by title (resolved)
* Search by categories (resolved)
* Search by state
* Liters summary (resolved)
* Cost summary (resolved)
* Sort by best before
* Confirmation on delete
* Confirmation on open
* Confirmation on emptied

