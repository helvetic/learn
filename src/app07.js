import prepend from './modules/prepend';
import deleteTextNodes from './modules/deleteTextNodes';
import scanDOM from './modules/scanDOM';


let container = document.querySelector('.container');
let newElement = document.querySelector('.newElement');
let textNodes = document.querySelector('.textNodes');

scanDOM();

prepend (container,newElement);

deleteTextNodes(textNodes);
