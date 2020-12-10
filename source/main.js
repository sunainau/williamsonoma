/**
 * Main Buisiness Logic
 * Written by Sunaina Udo
 *
 * Merely loads dependancies and associated calsses with their containers and codependancies
 */

// Dependancies
import ProductsList from './modules/products/list.class.js';
import SlideShow from './modules/slideShow.class.js';
import Header from './modules/header.module.js';
import staticJSON from './modules/static';

// Initiation
const slideShow = new SlideShow({
  container: 'slideshow'
});

const main = new ProductsList({
  container: 'container',
  slideShow
});

Header({
  title: 'William Sonoma Catalog',
  container: 'header'
});

fetch(
  // If CORS is enabled
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
)
  .then(res => res.json())

  // If CORS is not enabled
  // use included reverse proxy server to serve JSON file
  .catch(() => fetch('./products').then(products => products.json())) // eslint-disable-line no-console

  // If the server has gone down for some reason
  // or the JSON file is removed
  // load static version of data file since the webpage doesn't seem to accept CORS requests
  .catch(() => staticJSON) // eslint-disable-line no-console
  .then(products => main.setState({ products }));
