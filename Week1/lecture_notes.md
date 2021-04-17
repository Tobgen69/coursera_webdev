# Week 1
- Some quick intro to Git + GitHub
- Quick intro to Node.js and node package manager (NPM), the package manager for node modules
- setting up npm package
    - `npm init`
    - `npm install lite-server --save-dev`
    - edit `package.json` and add a `start` command to easily do `npm start`
- Video: "Introduction to React"
  - react is a javascript library for building UIs
  - it is component based
  - it is tech stack agnostic
- Video: "Exercise (Video): Getting Started with React"
    - gives option to use yarn instead of npm (he finds yarn 
      better suited when working with react apps)
    - execute `sudo npm install -g create-react-app`
    - in a subfolder exec `create-react-app confusion`
    - go into that subfolder and run it with `nmp start`
- Video: "React App Overview"
    - first got an overview of the files in the project folders, 
   precisely about `index.html` and `index.js` and `app.js` ?!
    - react element are the smallest building blocks of react apps
    - components are made of elements
    - in `app.js` the classnames can be found in `App.css`
- Video: "Introduction to JSX"
    - JSX is extension to JS - shorthand notation to represent JS
      function calls that evaluate to JS objects
- Video: "Exercise (Video): Configuring your React Application"
    - `npm install bootstrap`
    - `npm install reactstrap react-popper`
    - configure `index.js` to use bootstrap
    - adjusted `App.js` and included a Navbar (Navigation Bar on top)