import { initializer } from "./page_initializer";
import { showPanel } from "./tabs_builder";
import './styles.css';

let myFunction = function() {
    console.log("activated myFunction()!");
}

// waits for HTML bones to load before using DOM to add elements
window.addEventListener('load', function () {
    initializer();
    console.log('initialized..');

});

