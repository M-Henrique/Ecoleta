<h1 align="center"><img alt="Logo" src="./web/src/assets/prints/EColeta-Landing.png" /></h1>

## :bookmark: Table of contents
- [About the Project](#clipboard-about-the-project)
- [Built With](#hammer-built-with)
- [Getting Started](#rocket-getting-started)
  - [Prerequisites](#heavy_check_mark-prerequisites)
  - [Installation](#gear-installation)
- [Usage](#computer-usage)
- [License](#information_source-license)
- [Contact](#email-contact)
- [Acknowledgements](#purple_heart-acknowledgments)

## :clipboard: About the Project
   <p align="justify">Recycling has become essential in modern society. With so much pollution going on and importante matters like global warmth, the correct disposal and treatment of the waste we produce is vital to keep the planet in balance.<br /><br />
   Ecoleta is a platform that hopes to establish connections between people willing to help the planet, and those who have the resources and objectives to deal with waste.</p>
   
## :hammer: Built With
  - [NodeJS](https://nodejs.org/en/)
  - [ReactJS](https://reactjs.org/)
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.io/)
  - [SQLite](https://www.sqlite.org/index.html)
  
## :rocket: Getting Started
Ecoleta is **NOT** a commercial application. The project was developed exclusively with educational intentions and, as such, haven't been published. With that im mind, if you want to run a local instance of the program for testing and curiosity purposes, please follow these steps:
### :heavy_check_mark: Prerequisites
All of those must be installed before you try to run the project:
  - [NodeJS](https://nodejs.org/en/download/)
  - [NPM](https://www.npmjs.com/get-npm) - *Auto installed with NodeJS*
  - [Expo](https://expo.io/) - **Must also be installed in your cellphone**
### :gear: Installation
After cloning or downloading the project in your local machine, navigate to `mobile\src\services\api.js`, `server\src\controllers\PointsController.ts` and `server\src\controllers\ItemsController.ts` and change all the *baseURL* and *image_url* variables to your respective IP. Once this is done, open the project's folder in your terminal and run the following commands:
  ```bash
  # Go to server folder
  $ cd server
  
  # Install all necessary dependencies
  $ npm install
  
  #Instantiate the local database
  $ npx run migrate:lastest --knexfile knefile.ts
  
  # Run the server
  $ npm start
  ```
The server will start at port :3333. **Open another terminal and leave this one open**.
  ```bash
  # Go to web folder
  $ cd web
  
  # Install all necessary dependencies
  $ npm install
  
  # Run the application
  $ npm start
  ```
Wait a moment and the application will open at port :3000. **Open another terminal and leave this one open**.
  ```bash
  # Go to mobile folder
  $ cd mobile
  
  # Install all necessary dependencies
  $ npm install
  
  # Run the app
  $ expo start
  ```
Wait a moment and an expo screen will open. Open the Expo app at your cellphone and scan the QR Code now appearing on screen. **Leave this terminal open**.

## :computer: Usage
  In the web version of the app, you may register new collection points, providing info like location, types of material collected and, of course, ways to contact the responsible directly.
  <br />
  
  <img alt="Versão web" src="web/src/assets/prints/EColeta-1.svg">
  
  In the mobile version, you will be prompted with a filter, asking you to provide the city in which you'll be searching for collection points. Once you fulfill that, select the types of material that you're looking to get rid of, and all the points interested in such materials will be presented on the map. Click on them to see details and contact them directly.
  
  <img align="left" alt="Pontos no mapa" src="web/src/assets/prints/EColeta-2.png">
  <img align="right" alt="Detalhes do ponto" src="web/src/assets/prints/EColeta-3.svg">
  
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
## :information_source: License
  This project is under the [MIT](LICENSE.md) license.
## :email: Contact
  If you like the project and have the interest in contacting me directly, please send an email to [mhenrique.silva408@gmail.com](mhenrique.silva408@gmail.com)
## :purple_heart: Acknowledgments
  This project was developed with the guidance of **Diego Fernandes**, CTO at [Rocketseat](https://rocketseat.com.br/), as product of the "Next Level Week" online event.

