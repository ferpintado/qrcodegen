# QR Code Generator

## Highlights

This project uses React as the main framework and I decided to integrate `styled-components` as the library to style the application as I found it very helpful when creating dynamic styled components.

I decided to use the native react _context_ as state management so that I could share state across multiple components.

The design was created from scratch, I did not use a pre-built UI library to demonstrate my experience creating reusable components that can also be used by other developers.

I managed to split the `/src` folder so that we can have better organization and kept flexibility and scalability in mind. The `shared` folder contains all the components that can be used outside of the QR generator "view" in case the application grew. and `QrGenerator` lives inside `views` which ideally would contain every "page/section" of the application.

Every component has its own folder to follow atomic patterns and inside each folder we are creating a new file separating concerns. We have a styles, constant, test, validation, types file as needed.

### Install dependencies

### `yarn`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn serve`

Runs the application in the production mode
