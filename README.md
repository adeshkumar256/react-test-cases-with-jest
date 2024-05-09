# React Test Cases using Jest by Adesh Kumar

This project is created as an pratice project by Adesh. It contains several topics related to react testing library. Also Eslint and prettier along with Husky pre-commit is set up for static testing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

This will test all the linting errors and show them on the terminal.

### `npm run format`

This will look for the prettier error like unnecessory spaces etc

### Husky

I gave configured Husky pre-commit which will run `npm run lint` and `npm run format` before comitting the changes to git.
