# website
 
Source for TJHRC's website built with Sanity and React.

#### Table of contents

- [Setup](#Setup)
    - [Troubleshooting setup](#troubleshooting-setup)
- [Running](#running)
- [Developing](#developing)
    - [Color palette](#color-palette)
    - [Making changes](#making-changes)
    - [Pushing changes](#pushing-your-changes)
- [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)

# Setup
When setting this project up for the first time, first download Node.js if you haven't already from here: https://nodejs.org/en/download/, and install yarn:

```
npm install -g yarn
```

Then clone the project and run:
```
cd website
npm install
yarn install
```
### Troubleshooting setup
If you are getting engine errors when you run ```yarn install``` a simple fix for that is:
```
yarn install --ignore-engines
```

# Running
After you've set up the project for the first time, simply run:
```
yarn start
```
And you should see the website load and show up in your browser, at the address ```https://http://localhost:3000/```. 

# Developing
There are some things to remember when developing for the website. The first thing is to never push changes to the master branch and instead you should always pull request the changes.

### Color palette
Below is the color palette we are using

https://coolors.co/3d5a80-98c1d9-e0fbfc-ee6c4d-293241
##
The hex values are #3D5A80, #98C1D9, #E0FBFC, #EE6C4D, and #293241.

### Making changes
These are the steps to remember when adding features and changing the website.
Here are the steps: 
1. Find an issue from ```https://github.com/PotentiaRobotics/website/issues``` and comment if you want to work on it. Later someone will assign you to the issue, so everyone else knows not to work on it.
2. Once you have been assigned to the issue you can start working on it.
3. In your local project make sure to create a different branch pertinent to the issue. Below is an example of creating a branch for ```https://github.com/PotentiaRobotics/website/issues/4```.
```
git checkout -b fix-documentation
git push --set-upstream origin fix-documentation
```
4. Make sure to also replace

```
"start": "serve -s build/"
```
 with these four lines:     
```
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
``` 
in `package.json`. This is the only way to open up localhost and have it reload with your changes.

Once you are done with your changes you can move onto [the next step](#pushing-your-changes).

### Pushing your changes
Here are the steps to push your changes:
1. Run the command `yarn run build`.
2. Make sure to change
```
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
```
 with this one line:     
```
"start": "serve -s build/"
``` 
in `package.json` or else your pull request will not be accepted.

3. Delete the `package-lock.json` file if you have one.
4. Now you need to create a pull request to the master branch so your changes get merged. Go to ```https://github.com/PotentiaRobotics/website/pulls``` and create a new pull request.
5. Have your `base` as master and `compare` to the relevant branch. In the example's case it would be `fix-documentation`.
6. Now click the ```Compare & pull request``` button, title it something relevant to the issue you are fixing, and lastly you do not need to include a description, but you must include ```Closes #<issue number>```. In the example's case it would be ```Closes #4``` (this will automatically close the pertinent issue).

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
