# CRA Todo #

Just another throwaway todo app, written to use React.

## Why? ##

For fun and learning. The idea was to get more comfortable with React's API and parts
of ES6. I learnt new stuff about Promise handling, Arrow functions, Async CRUD, Context and
how to synch app state with the browser.

## What's it do? ##

* CRUD for todos.
* Allow todos to be marked complete/incomplete.
* Filter todos on whether they're complete/incomplete.
* Handle moving back and forward in the browser.

## How do I start? ##

First checkout the code, install (```yarn install``` or ```npm install```) and run the local ```create-react-app``` development server:

**With Yarn:** ```yarn start```

**With NPM:** ```npm start```

Then run the json server: ```json-server -p 8080 --watch db.json```

Now open http://localhost:3000 in your browser and you should now see the app.

## Dependencies ##

Besides what CRA brings in:

* Material-UI/Material UI Icons
* Prop-types
* Json-server
* Prettier
