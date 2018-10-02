This project is test and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

Below you wlll find the App folder structure:

```
src/
  assets/
  components/
  helpers/
  reducers/
  scenes/
  services/
  store/
  utils/
```

A brief explanation of each folder responsibility:

* `assets` is the place where all the media files are stored;
* `components` contains all components used in multiple places in the application.
* `helpers` contains classes that execute a specifi feature that can be used in multiples parts of the application.
* `reducers` contains the root reducers that exports all the state to the redux store.
* `scenes` is the folder that contain the actual domains of the application, in others folder structure patterns it can be known as `modules` or `screens`.
* `services` contains the state container (Reducers, Actions, Types) files separated by domains.
* `store` contains the redux store.
* `utils` contains utils variables and miscelaneous.

### `npm install`

If you`re cloning this project for the first time you should run this command to install all the necessaries dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
