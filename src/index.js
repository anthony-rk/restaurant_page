import { initializer } from "./page_initializer";
import './styles.css';

// waits for HTML bones to load before using DOM to add elements
window.addEventListener('load', function () {
    initializer();
    console.log('Page initialized..');

});

// document.getElementById('btn-1').innerHTML = "About Us";

