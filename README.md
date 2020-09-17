# Match EU

[![Build Status](https://travis-ci.org/ron-huberfeld/Match-EU-FrontEnd.svg?branch=master)](https://travis-ci.org/ron-huberfeld/Match-EU-FrontEnd)


## Creating development environment

1. Clone this repo
2. Install dependencies by running:
    <blockquote>
    npm install
    </blockquote>
3. Run the frontend application: </br>
    option 1:
    <blockquote>
    npm start
    </blockquote>
    option 2 - using docker-compose:
    <blockquote>
    docker-compose up -d --build
    </blockquote>
    
    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Modify the code

### Running tests
<blockquote>
npm test
</blockquote>

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


Test for linting and prettier issues, as a precaution, use before pushing any commit to make sure build succeeds on Github Actions.
<blockquote>
    npm run lint-tests
</blockquote>

### Fixing tests
To fix linting and prettier issues use:
<blockquote>
    npm run lint-fixes
</blockquote>

### Modify CSS

<blockquote>
npm run css-build
</blockquote>

Using the last command compiles the scss file App.scss into its processed form i.e. App.css.
Learn more about scss at:

[https://sass-lang.com/documentation/syntax](https://sass-lang.com/documentation/syntax)

#### `NOTE : This will over ride any changes done in App.css and not contained in App.scss, hence, always use App.scss and then compile it into App.css before pushing changes.`
One possibility is adding a watcher node package that automatically compiles the scss file into css whenever a change is made.

## Deployment
<blockquote>
npm run build
</blockquote>

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
