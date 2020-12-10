/** Static style element to be exported for use by list with all slides from slides module module */
const style = document.createElement('style');
style.textContent = `
.img__container {
  position: relative;
}

.img__image {
  display: block;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
}

.img-middle {
  text-align: center;
  height: 7rem;
}

.img__text-no-top-pad {
  background-color: #D4AF37;
  color: white;
  font-size: 1rem;
  padding-top: 0;
  padding-bottom: 1rem;
  height: 100%;
  font-family: Arial;
}

.img__text {
  background-color: #D4AF37;
  color: white;
  font-size: 1rem;
  padding: 1rem;
  font-family: Arial;
}
`;

export default style;
