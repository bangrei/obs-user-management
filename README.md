## Live Demo: 
https://obs-users-management.netlify.app/

## Install dependencies:
Run command `npm install @mui/material @emotion/react @emotion/styled @reduxjs/toolkit react-redux axios`
## Install ESLint and Prettier:
Run command `npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks`
## Initialize ESLint:
Run command `npx eslint --init`
## Create `.prettierrc` in the root directory:
```json { "singleQuote": true, "trailingComma": "es5", "printWidth": 80 }```
## TypeScript Models
File `src/models.ts`
## API Service to interact with REST API
File `src/api.ts`

## REDUX State Management

### Redux Setup
File `src/redux/userSlice.ts`
### Setting Up the Store
File `src/redux/store.ts`
### Define the Root State and App Dispatch. 
Check out `src/redux/store.ts` file.
### Update `index.tsx`. 
Use the store from the new `src/redux/store.ts` file
### Use Typed Hooks in Components. 
- By creating typed hooks and using them in your components, we able to eliminate the type error regarding `AsyncThunkAction`. This approach also improves type safety across Redux implementation.
- Update Components to Use Typed Hooks. Check files  `src/components/UserList.tsx` and `src/components/UserForm.tsx`

## Perform Unit Testing

### Install Testing Dependencies
```npm install --save-dev @testing-library/react @testing-library/jest-dom```
### Create Test File
File: `src/components/UserList.test.tsx`
### Run testing
Add a script to your package.json to run the tests:
```json "scripts": {"test": "react-scripts test  --transformIgnorePatterns \"node_modules/(?!axios)/\""}```
Make sure in `tsconfig.json` you added this:
```json "module": "commonjs",```
To run unit testing, simply run command below: 
```npm test```

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
