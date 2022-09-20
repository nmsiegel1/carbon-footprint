# My Carbon Footsteps

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This application is for an enviromentally-conscious user who wants to calculate their carbon footprint and learn more about how to offset it in order to positively impact the world's climate. The following were the additional requirements of the application:

* When the user loads the application, they are presented with the Home page that displays the carbon emissions of the average American.
* When the user clicks on the menu icon, they will see the option to log in to the application.
* When the user clicks on Login in the menu, they will be directed to the Login page where they can login or click to sign up.
* When the user clicks the option to sign up on the Login page, they will be redirected to the Signup page where they can sign up as a user of the application.
* When the user has logged in or signed up, they will be redirected to the Home page.
* When the logged-in user clicks on the menu, they will see the options to calculate their footprint (Calculator page), see their results (My Results page), see their pledges (My Pledges Page), or logout.
* When the logged-in user clicks on the My Results or My Pledges pages in the menu before completing the calculator, they will be prompted to visit the calculator page to calculate their carbon footprint.
* When the logged-in user clicks on Calculator in the menu, they will be directed to the Calculator page where they can fill out their information to calculate their carbon footprint.
* When the logged-in user enters their information for the calculator and clicks the button, they will be redirected to their My Results page.
* When the logged-in user is redirected to their My Results page after completing the calculator, they will see their carbon emissions listed by category, a graph to see the breakdown of their carbon footprint, and the option to add pledges.
* When the logged-in user clicks to add a pledge, the pledge they click will be removed from the My Results page, but will be listed on their My Pledges page.
* When the logged-in user clicks on the My Pledges option in the menu, they will a list of the pleges they selecte on the My Results page.
* When the logged-in user clicks the Logout option in the menu, the user will be logged out and will only see the option to login in the menu.

## Table of Contents
- [Installation](#installation)
- [Links](#links)
- [Usage](#usage)
- [Technologies](#Technologies)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation
Visit the GitHub repository, carbon-footprint (see the link below in the Links section), to fork and clone the repository. The package.json in the root directory will have the necessary dependencies. Use
````````````
npm install
````````````
in the root of the application to install the dependencies locally.

## Links
- [GitHub Repo](https://github.com/nmsiegel1/carbon-footprint)
- [Deployed Application](https://carbon-footsteps.herokuapp.com/)

## Usage
The following are screenshots of the deployed site:

Home Page:
![Home](/client/src/pages/assets/images/home.png)

Login Page:
![Login](/client/src/pages/assets/images/login.png)

Signup Page:
![Signup](/client/src/pages/assets/images/signup.png)

Calculator Page:
![Calculator](/client/src/pages/assets/images/calculator.png)

My Results Page (with Emissions, Graph, and Pledges):
![Results](/client/src/assets/images/results.png)

My Pledges Page (with Selected Pledges):
![Pledges](/client/src/assets/images/pledges.png)

The application has the React app in the client directory, which contains the public directory, the src directory, the .gitignore file, and the package.json file. The public directory contains the index.html file, where the root div (from index.js in the root of src) is rendered, along with the React icons/logos, the manifest.json, and robots.txt. The src directory contains the components directory, the pages directory, the utils directory, App.js (where all of the components are rendered), App.css (the main style sheet), and index.js (for rendering App). The components directory contains directories for each component that contains an index.js for rendering each. The pages directory contains the assets directory and the JS files for each page component (routed in App.js). The assets directory contains the css and images directories. The css directory contains the styling sheets for each page. The images directory contains the background images and the README images. The utils directory contains the JS files for authorization with JWTs, the localStorage functions, the mutations, and the queries.

The application accesses the database via the server directory, which contains the config, models, schemas, and utils directories along with the .gitignore, the package.json, and server.js files. The server file details how the application will access the back-end server and instantiates Express and Apollo. The config directory has connection.js, which details how the MongoDB database is accessed, and the seeds.js file to seed mock data. The models directory has the Mongoose schemas (User, Travel, Home, and Pledge) and the index.js file to export them. The schema directory has the typeDefs and resolvers files along with an index.js file to export them. The utils directory contains the auth.js file for authorization on the backend with JWTs. The root of the application contains the .eslintignore, the .eslintrc.json, the .gitignore, the .prettierignore, the .prettierrc.json, the package.json, and the README files.
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

## Technologies
Below are the main technologies used in the application:
* Figma
* Prettier
* ESLint
* Node and Express
* MongoDB and Mongoose
* Apollo
* BCrypt
* JSON Web Token
* GraphQL
* Iconify
* React
* React Router
* MUI
* Chart.JS
* React Dom Confetti

## Credits
The following links were used for
Site Inspiration:
* [Berkeley's CoolClimate Calculator](https://coolclimate.berkeley.edu/calculator)
* [65 Creative Green Company Names](https://thebrandboy.com/65-creative-green-company-names/)
* [Green Company Names](https://namesbee.com/green-company-names/)
* [Sustainable Web Design](https://sustainablewebdesign.org/category/design/)
* [UsTwo](https://www.ustwo.com/)

Calculations:
* [Functions for SCU's Climate Calculator](https://www.scu.edu/media/ethics-center/environmental-ethics/carbon-footprint/Math_and_Methodologies_Behind_This_Calculator.pdf)
* [The Facts on Heating Oil](https://fueloilnews.com/2008/05/01/the-facts-on-heating-oil-part-two/#:~:text=Heating%20oil%20used%20in%20homes,oil%2C%20coal%20and%20wood%20stoves.)
* [Heating and Cooling Climate Zones](https://inspectapedia.com/heat/Heating-Cooling-Climate-Zone-BTU-Requirements.php)
* [US Dept of Transportation Passenger Mile Data](https://www.bts.gov/content/us-passenger-miles)
* [US Census Growth of US by Region](https://www.census.gov/popclock/data_tables.php?component=growth)

Donations:
* [Best Charities for Climate Change](https://impactful.ninja/best-charities-for-climate-change/)
* [Clean Air Task Force](https://www.catf.us/)
* [Cool Air](https://www.coolearth.org/)
* [Carbon180](https://carbon180.org/)

Other Climate Resources:
* [Our World In Data](https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions)
* [Typical Household CO2 Emissions](https://www.zerofy.net/2022/04/04/household-co2-emissions.html)
* [Understanding Your Carbon Footprint](https://suncommon.com/understanding-your-carbon-footprint/)
* [Top 20 Ways to Reduce Your Carbon Footprint](http://www.globalstewards.org/reduce-carbon-footprint.htm)
* [GHG Reduction Programs and Strategies](https://www.epa.gov/climateleadership/ghg-reduction-programs-strategies)
* [How You Can Help Reduce Greenhouse Gas Emissions at Home](https://www.nps.gov/pore/learn/nature/climatechange_action_home.htm)

## License
The badge at the top of the page shows that this project is licensed under MIT. The link for that license is shown below.
- [License: MIT](https://opensource.org/licenses/MIT)

## How to Contribute
Please fork and clone the repository and use a pull request to add or make changes to the current repository.

## Questions
Please direct any questions to any of the team members below. To see more projects, visit the links below for each team member's respository:
- Gilina McBride: gilinamcbride@gmail.com, [GitHub Repository](https://github.com/gilinamcbride)
- Mtende Roll: rollmtende@gmail.com, [GitHub Repository](https://github.com/MtendeRoll)
- Nina Siegel: siegel.nina.m@gmail.com, [GitHub Repository](https://github.com/nmsiegel1)
- Daniel Conlon: danielcconlon@gmail.com, [GitHub Repository](https://github.com/DanielCConlon)
- Amanda Klenk: amandamklenk3@gmail.com, [GitHub Repository](https://github.com/amklenk)