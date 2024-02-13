# Project Create Using React App: Project Name - se_project_react

## General Specifications

Infrastructural project files was created using CRA.

The project was built and ran without errors.
HTML, CSS, and JS files are stored in the src folder using one of the following approaches:
JS and CSS files are located together inside folders, grouped by component.
File were grouped by type (components, blocks).

Stylesheets are connected.

### The project contains the following:

The index.css and index.js files
The index.html file, stored in the public folder
An images folder
CSS files with styles for corresponding components

### A components directory, which contains the following components:

App.js
Footer.js
Header.js
ItemCard.js
ItemModal.js
Main.js
ModalWithForm.js
WeatherCard.js
Profile.js
AddItemModal.js
SideBar.js
ClothesSection.js
AddItemModal.js
ToggleSwitch.js

A vendor directory with normalize.css, fonts.css files and a fonts directory stored inside it The utils directory, containing the files described in the brief
The contexts directory, which contains CurrentTemperatureUnitContext.js
A README.md file
A .prettierignore file, which tells Prettier to ignore normalize.css
The .gitignore file, which tells Git to ignore node_modules, dist, and .DS_Store.

### The project complies with the following code style requirements:

camelCase were used for function and variable names.
Only nouns were used as variable names.

Variable names clearly describe what is stored in them. Variables with similar data - those variables have unique but descriptive names.

Descriptive names were used for functions which reflect what they do.
Function names start with a verb.

JS classes and functional components were named using nouns and start with a capital letter. Names include appropriate or clear abbreviations.

## React

### The markup has been ported to JSX and:

Is included within ( ).
Has been moved to the corresponding components.

### Components:

Hooks are not used inside conditional statements.
Hooks are called in a component's main function.
Class components - the effects are described inside the component lifecycle methods.

All state variables from the brief have been created and defined within the components specified in the brief.

The initial state of state variables contains the correct data type.

## All of the features listed in the brief have been implemented and are functioning properly:

### Across all components:

Contain all the items listed in the brief
Accepted required props mentioned in the brief

### The CurrentTemperatureUnitContext context should meet the following requirements:

Exported from a separate file in the contexts directory.
Imported in Main, ToggleSwitch, and WeatherCard components.
Embedded in the App component via CurrentTemperatureUnitContext.Provider.
Has currentTemperatureUnit and handleToggleSwitchChange values for the provider.

### The App component

Includes Header, Main, Footer, ModalWithForm, and ItemModal components.
Makes an API request for the weather data (only once — on mounting).
Saves default clothing items in the state.
Makes API requests for the mock server.
Saves the current temperature unit and handles the toggle switch change.
Saves the added clothing item.

### The Header component

Calculates the current date.
Includes ToggleSwitch (which renders a checkbox with the state saved in the context).
Includes a button for opening AddItemModal (which renders a modal for adding a clothing item and uses the ModalWithForm).
Includes navigation links to the main and profile pages.

The Main component includes WeatherCard (which displays temperature in Fahrenheit), and an array of ItemCard (which renders an image and title of a clothing item) components.

The Profile component includes SideBar (which displays user name) and ClothesSection (which displays all the clothing items) components.

The ModalWithForm component renders a modal with a form.

The ItemModal component renders the modal with item image, title, and delete button.

### The utils files contain

Coordinates object with latitude and longitude fields
The API key for the Weather API
Weather API fetch and filter methods
Logic for defining temperature
Mock API fetch methods

## Routing

The components <Routes /> and <Route /> are used correctly.
Clicking the logo leads to the main page (/)
Clicking the profile info leads to the profile page (/profile)

## API interaction

The api.js and weatherApi.js files, in which requests to the server were described, and created.

Each method which enables making requests to the server contains return fetch, e.g. returns a Promise object.

Server responses always checks for correctness.

Each promise contains code for processing errors after making a request to the server.

## Weather API:

There is one GET request for fetching the forecasted weather.

## Mock API:

There is the db.json file with a database with some cards placed in the root folder of the project.
There are three API calls: GET /items, POST /items, and DELETE /items/:id.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
