import { initializer } from "./page_initializer";

// index.js file
console.log("Test 123...");

// waits for HTML bones to load before using DOM to add elements
window.addEventListener('load', function () {
    initializer();
});

