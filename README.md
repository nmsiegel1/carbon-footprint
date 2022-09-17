# My Carbon Footsteps

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is for an avid reader who wants to search for new books to read so that they can keep a list of books that they want to purchase. The following were the additional requirements of the application:

* When the user loads the search engine, they are presented with a menu with the options Search for Books and Login/Signup, and an input field to search for books and a submit button.
* When the user clicks on the Search for Books menu option, then they are presented with an input field to search for books and a submit button.
* When the user is not logged in and enters a search term in the input field and clicks the submit button, then they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site.
* When the user clicks on the Login/Signup menu option, then a modal appears on the screen with a toggle between the option to log in or sign up.
* When the toggle is set to Signup, then the user is presented with three inputs for a username, an email address, and a password, and a signup button.
* When the toggle is set to Login, the user is presented with two inputs for an email address and a password and login button.
* When the user enters a valid email address, creates a password and clicks on the signup button, then their user account is created and they are logged in to the site.
* When the user enters their account’s email address and password and clicks on the login button, then the modal closes and they are logged in to the site.
* When the user is logged in to the site, the menu options change to Search for Books, an option to see their saved books, and Logout.
* When the user is logged in and enters a search term in the input field and clicks the submit button, they are presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to their account.
* When the user clicks on the Save button on a book, then that book’s information is saved to their account.
* When the user clicks on the option to see their saved books, they are presented with all of the books they have saved to their account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from their account.
* When the user clicks on the Remove button on a book, then that book is deleted from their saved books list.
* When the user clicks the Logout button, then they are logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button.

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, AK-Book-Search-Engine (see the link below in the Links section), to fork and clone the repository. The package.json in the root directory will have the necessary dependencies. Use
````````````
npm install
````````````
in the root of the application to install the dependencies locally.

## Links
- [GitHub Repo](https://github.com/amklenk/AK-Book-Search-Engine)
- [Deployed Application](https://ak-book-search-engine.herokuapp.com/)

## Usage
The following are screenshots of the deployed site:

Home:
![Home](/client/src/assets/home.png)

Home (With Search and Logged In):
![Home Search](/client/src/assets/search.png)

Modal (Login/Signup)
![Modal](/client/src/assets/log-sign.png)

Saved Books:
![Saved Books](/client/src/assets/saved.png)

The application has the React app in the client directory, which contains the public directory, the src directory, the .gitignore file, the package.json file, and the README. The public directory contains the index.html file, where the root div (from index.js in the root of src) is rendered, along with the manifest.json and robots.txt. The src folder contains the assets directory, the components directory, the pages directory, the utils directory, App.js (where all of the components are rendered), index.css (the main style sheet), and index.js (for rendering App). The assets directory contains the README images. The components directory contains directories for each component that contains an index.js for rendering each. The pages directory contains the JS files for each page component (routed in App.js). The utils directory contains the JS files for the API functions, the authorization with JWTs, the localStorage functions, the mutations, and the queries.

The application accesses the database via the server directory, which contains the config, models, schemas, and utils directories along with the .gitignore, the package.json, and server.js files. The server file details how the application will access the back-end server and instantiates Express and Apollo. The config directory has connection.js, which details how the MongoDB database is accessed. The models directory has the Mongoose schemas (User and Book) and the index.js file to export them. The utils folder has the typeDefs and resolvers files along with an index.js file to export them.
The entire app is run in the terminal with the concurrent server in the root directory by typing
````````````````
npm run develop
````````````````
into the command line. This will turn on the server at localhost:3001 for both the React app and GraphQL/Apollo Studio (with /graphql). The app can also be run by visiting the live site, see the link in the Links section. To just run the React application, cd into the client directory and type
``````````
npm start
``````````
into the terminal. To just run Apollo Studio, cd into the server directory and type
``````````````
npm run watch
``````````````
into the terminal.

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)

## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to amandamklenk3@gmail.com. To see more projects, visit the link below for amklenk's respository:
- [Amanda Klenk's GitHub Repository](https://github.com/amklenk)