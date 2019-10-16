# React Project for Portfolio Site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sites
- [redesigningtech.com](https://redesigningtech.com)
- [berryny.github.io/redesigningtech/](https://berryny.github.io/redesigningtech/)

### Be sure to install or update
- [node.js](https://nodejs.org/en/download/current/)
- [git](https://git-scm.com/downloads)

### Using Terminal on Mac
- Open your **Applications** folder
- Open **Utilities**
- Double-click on **Terminal**
  - A small window with a white background open on your desktop

## React Installation for Mac

An error occurred when using `npm install -g react-devtools` the work around trick is:
```
cd /usr/local/lib/
sudo chmod 777 node_modules
npm install -g react-devtools
```

First, install React App using the command:
```
sudo npm install -g create-react-app
create-react-app redesigningtech
cd redesigningtech
```

Second, install React Router DOM using the command:
```
sudo npm install react-router-dom
npm install
```

It is suggested to begin the server by typing:
```
yarn start
```

## Project Setup

Include React Bootstrap in your project using `npm`

```
sudo npm install jquery --save
sudo npm install react-bootstrap bootstrap --save
sudo npm install react-datepicker --save
```

Alternatively you may use yarn:

```
yarn add bootstrap
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your **src/index.js** file:

```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap/dist/react-bootstrap.min.js';
```

Include Font Awesome in your project using `npm`
```
  sudo npm i --save @fortawesome/react-fontawesome
  sudo npm i --save @fortawesome/fontawesome
  sudo npm i --save @fortawesome/free-solid-svg-icons
  sudo npm i --save @fortawesome/fontawesome-svg-core
  sudo npm i --save @fortawesome/free-brands-svg-icons
```

```
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
    <h1>Hello World!</h1>
    <p>
      <a rel="noopener noreferrer" href="mailto:info@redesigningtech.com" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </p>
    </div>
  )
}
console.log('loaded home page');

export default Home;

```

## React Bootstrap - Carousel
```
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
console.log("Controlled Carousel");

export default ControlledCarousel;

```

## Commit to Github
```
git remote add origin https://username.github.io/project-name.git
git push -u origin master
```

## Deploying React to Github Pages
- `npm install gh-pages --save-dev` or `yarn add gh-pages`
- Open `package.json` add the line `"homepage": "link-to-your-repository",` after `"private": true,`
- In `package.json` add `"deploy": "gh-pages -d build",` in `scripts {...}`
- In the terminal, run this command `npm run deploy` OR `yarn run deploy`
  - Error Message: `Failed to compile. EACCES: permission denied, rmdir`, add **sudo** command `sudo npm run deploy` OR `sudo yarn run deploy` 

## Resources

- [Learn about React Router](https://reacttraining.com/react-router/)
- Install Atom text editor [React Snippets](http://orktes.github.io/atom-react/#snippets)
- [React Router Core](https://reacttraining.com/react-router/core/guides/quick-start)
- [React Router Web](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Router Native](https://reacttraining.com/react-router/native/guides/quick-start)
- [React FontAwesomeIcon](https://github.com/FortAwesome/react-fontawesome#installation)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
  - [The Lorem Ipsum for photos.](https://picsum.photos/images)
- [What is GitHub Pages?](https://pages.github.com/)
  - [gh-pages](https://www.npmjs.com/package/gh-pages)
  - [React Deployment for Github](https://create-react-app.dev/docs/deployment#github-pages-https-pagesgithubcom)

- [React Datepicker](https://reactdatepicker.com/)
  - [React Date Picker](https://www.npmjs.com/package/react-datepicker)
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

## Basic Router Setup

Add React and Router import in the **src/App.js** file
```
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
```

- Create a **src/components** folder
- Add filenames
  - home.js <- Contains the landing page
  - nav.js <- Contains the navigation section
  - about.js <- Contains the about page
  - footer.js <- Contains the footer section

Add to import in the components files in **src/App.js**
```
  import NavBar from './components/nav';
  import Home from './components/home';
  import About from './components/about';
  import Footer from './components/footer';
  function App() {
    return (
      <Router>
        <header className="header">
          <NavBar />
        </header>
        <main role="main" className="main">
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

          </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
    </Router>
    );
  }

  export default App;
```

Simple code for **src/components/home.js**
```
import React from 'react';

function Home() {
  return (
    <div><h1>Welcome to Home page.</h1></div>
  )
}
console.log('loaded home page');

export default Home;
```

Simple code for **src/components/nav.js**
```
import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link className="home-link" to="/">Home</Link></li>
        <li><Link className="about-link" to="/about">About</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar;
```

If you are using React Router, use this:
```
  <Link to="/files/myfile.pdf" target="_blank" download>Download</Link>
```

Where **/files/myresume.pdf** is inside your public folder.

Simple code for **src/components/about.js**
```
import React from 'react';

function About() {
  return (
    <div>
      <h1>Welcome to About page.</h1>
      <Link to="/files/myresume.pdf" target="_blank" download>Download Resume</Link>
    </div>
  )
}
console.log('loaded about page');

export default About;
```

Simple code for **src/components/footer.js**
```
import React from 'react';

function Footer() {
  return (
    <div><p>&copy; React Project</p></div>
  )
}

export default Footer;
```

### How to create a README file for github
[Basic writing and formatting syntax](https://help.github.com/en/articles/basic-writing-and-formatting-syntax#lists)

# React Generated README.md content

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
