# William Sonoma Coding Challenge Solution

## Submitted By

_Sunaina Udo_  
<sunainaudo@gmail.com>  
(916) 882-7465

This solution utilizes 100% Javascript with a NodeJS static delivery development server for local testing

With EcmaScript 2015 (ES6) imports there's no need to build or bundle because ES imports allow caching and thus faster delivery of your modules to remote clients!

# Framework

Using Node with ES6!

# Server

There is a dedicated Static File development server provided for testing purposes. This is due to the restrictions on script loading and CORS requests

# Bundle

There isn't one. With ES imports there is less and less reason to bundle for the front end and more and more reason to have an updated design pattern for the web

The lack of a bundle also allows for updating of individual components and bugfixes can go out incrimentally instead of requiring a brand new bundle to be pushed  
This means the next time someone visits the page they see the new version!

# Running the Server and Visiting the Site

## Requirements

- An ES6 compatible version of NodeJS

Open a command prompt and run `npm start` to launch the server. After checking the file using lint, it will run file serve up the files.

Another method of launching the app is by initiating the command `npm run server`

Check the package.json file under scripts for a comprehensive list of commands to include unit testing

## Environment Variables

- The default `PORT` number is 3000

## Visual Studio Code

Launch the server is handled b the debugger with the included `launch.json` configuration

# Tests

## Requirements

- An ES6 compatible version of NodeJS and NPM

## Linting

Theh linter is used to enforce format and errors. Run `npm test` and check if there are any errors.

## Unit Tests

Visit `\test` to see the test results

# Unit Tests Result

Testing the ListClass:

    ListClass is a class: true
    ListClass constructor takes 1 argument: true
    ListClass will crash if not given peer dependancy slideShow: true
    ListClass will crash if not given container reference when it tries to render the laoding animation: true
    ListClass will return an instance of itself: true
    ListClass will rerender when setState is called with a new state: true

# of tests: 7

# passed: 7

# failed: 0

---

Testing the Products ListModule:

    ListModule is the default export: true
    ListModule is a function: true
    ListModule accepts two arguments: true
    ListModule will throw when no arguments are passed: true
    ListModule will throw if the first argument passed is not an array: true
    listModule will throw if the second argument does not expose a setState function: true
    ListModule will return a Node: true

# of tests: 7

# passed: 7

# failed: 0

---

Testing the Products ListStyle:

    ListStyle is the default export: true
    ListStyle is a Node: true
    ListStyle is a style tag: true

# of tests: 3

# passed: 3

# failed: 0

---

Testing the Product SlideModule:

    SlideModule is the default export: true
    SlideModule is a function: true
    SlideModule requires 1 argument: true
    SlideModule requires a name property on the argument: true
    SlideModule requires a hero property with an href property: true
    SlideModule returns a Node: true

# of tests: 6

# passed: 6

# failed: 0

---

Testing the Products SlideStyle:

    SlideStyle is the default export: true
    SlideStyle is a Node: true
    SlideStyle is a style tag: true

# of tests: 3

# passed: 3

# failed: 0

---

Testing the HeaderModule:

    HeaderModule is the default export: true
    HeaderModule is a function: true
    HeaderModule requires 1 argument: true
    HeaderModule requires a name property on the argument: true
    HeaderModule requires a hero property with an href property: true
    HeaderModule returns a Node: true

# of tests: 6

# passed: 6

# failed: 0

---

Testing the LoaderModule:

    LoaderModule is the default export: true
    LoaderModule is a Node: true

# of tests: 2

# passed: 2

# failed: 0

---

Testing the SlideShow:

    The SlideShow is the default export: true
    The SlideShow is a Class: true
    The SlideShow will crash if not passed a mounting point: true
    The slideShow returns and instance of itself: true
    The SlideShow will render when state is updated: true
    The SlideShow will render when SlideShow.render is called: true
    The SlideShow will hide when SlideShow.hide is called: true

# of tests: 7

# passed: 7

# failed: 0

---

Testing the Static JSON file obtained from the provided link for challenge:

    The Static file is the default export: true
    The Static file is an Object Literal: true
    The Static file has .groups and it is an Array: true
    Each product listing in the .groups reference has a name, a hero with href: true
    Each product listing has an array of images and each image has an href: true

# of tests: 5

# passed: 5

# failed: 0

---

Total for all Tests:

    Total number of tests performed: 46
    Total number of tests passed: 46
    Total number of tests failed: 0

    Percentage of tests passed: 100%

# The Product List Page

In accessing the products list page, Cross-Origin-Resource-Sharing accessibility is taken into account

## Usage

Use cases:

1. Loading screen is displayed prior to fetching data
2. Data fetching is followed by a rerender with the list of products and associated heros  
   a. List the name and price above the hero  
   b. Hero is the same width and connected to the informational banner
3. Client clicks on a banner or hero image(even just nearby either) and gets a modal carasol
4. Client clicks on the current image to go to the next one
5. Client clicks anywhere to go back to the product list
6. Client is efficiently presented with Sonoma Williams products

# SEO

Due to time constraints, Search Engine Optimization has been taken into limited consideration. In the least, Meta-tags, keywords, and Google Analytics would go a long way to make the site discoverable.
