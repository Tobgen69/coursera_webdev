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
- Video: "React Components"
  - component returns a set of React elements
  - enable to split UI into independent reusable pieces
  - user-defined component names must start with capital letter
- Video: "React Components Part 1"
  - first download images folder and put them into `.public/assets/`
  - add folder `components` to `src` path to store components in an organized way
  - create first component `MenuComponent.js`
- Video: "React Components: State and Props"
  - component can store its own local info in its "state" 
  - state
    -state is private and controlled by component but can be passed as props to children  
    - only class components can have a local state
    - state is declared within constructor
    - updates should be done using `setState()`
  - props
    - jsx attributes are passed into component as single object "props"
    - cannot modify props within component
  - handling events
    - use camelCase to specify events
    - pass funcition as event handler
    - `<Card onClick={() => this.opnDishSelect(dish)}`
  - sometimes several components may share the same data
  - best to move shared state to a common ancestor component
  - lists and keys
    - lists handled similar to JS
    - keys should be given to elements inside the array
- Video: Exercise (Video): React Components Part 2
  - goal is to get state/data from menu component into ancestor component e.g. `AppComponent`
  - create directory `shared` with file `dishes.js` which is a constant holding the data
  - now we can add a constructor to the `App.js` component and define the state with data `dishes` 
    being the constant
  - now we can display the Menu using the `App.js` state
  - also, we can remove the `MenuComponent.js` data, since no longer necessary
  - however, for it to work, we need to change `this.state.dishes` to `this.props.dishes` to 
    use the props of the upper component now.
  
  
  
    