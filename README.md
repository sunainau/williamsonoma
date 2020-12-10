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
