# Poke Dittobase

## Table of Contents
- [User Story](#user-story)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Features](#features)
- [Contribution](#contribution)
- [Heroku](#link-to-deployed-heroku-application)

## User Story
 * As a user,
 * I want to be able to create an account and search for my favorite pokemon
 * So that I can save them to my favorite pokemon list and compare with friends
 
## Description
 This is an interactive full-stack application that features Node.js and Express.js to create RESTful API's, Handlebars.js as the template engine, and    MYSQL2 and Sequelize for the database.

## Installation
 * Step 1 - `npm install` to install required npm packages.
 * Step 2 - Login to mysql and source the database.
 * Step 3 - Exit mysql then enter `node seeds/seed.js` to seed data.
 * Step 4 - Users will then enter `node server.js` to initialize the app.
 * Step 5 - Navigate to localhost:3001/login to access Poke DittoBase
 
## Usage
 * Users will be able to login or create an account.
 * Users will then be redirected to their homepage where they will be able to search for their favorite pokemon.
 * Upon searching, users will be presented with a card that displays the pokemon's image, description, ability and original game.
 * Users will then be able to add it to their favorites.
 * Users can view their favorite pokemon under the favorites link and delete from favorites if they wish to.
 * Users will also be able to search for their friends, and add them to view their favorite pokemon.
 * If a user wishes to delete a friend, they may do so by navigating to the friends link and clicking on delete friend.
 * When a user is done viewing their favorite pokemon, they can click on logout to return them to the login page.
 
## Screenshot

<img width="1485" alt="Screen Shot 2022-10-06 at 3 05 18 PM" src="https://user-images.githubusercontent.com/105673031/194427264-02f66388-48fb-4070-ada9-00d037a2d760.png">

## Features
 * Javascript
 * Node.js
 * npm
 * Express.js
    * handlebars
    * session
 * MYSQL2
 * Sequelize
 * dotenv
 * bcrypt
 * Pokemon promise v2
 * Sass
 * Font-awesome

## Contribution
 * [Anthony Slaviero](https://www.github.com/Aslaviero)
 * [Marion Sy](https://github.com/marionsy)
 * [Sharon Lamanda](https://github.com/Sharon-Lamanda)

## Link to deployed heroku application:

https://pokedittobase.herokuapp.com/

