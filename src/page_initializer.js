// initializes the content on the page
import pizzaJPG from './all-meat-pizza.jpg';
import { showPanel } from "./tabs_builder";

let initializer = function() {
    function component(newElement, newInnerHTML) {
        const element = document.createElement(newElement);
        element.innerHTML = newInnerHTML;

        return element;
    }

    // Add the H1 Title
    document.body.prepend(component("h1", "Pepperoni Toni's Pizza Emporium"));

    // Add the H2 description
    let contentDiv = document.getElementById("content"); 
    contentDiv.appendChild(component("h2", "Our pizza made daily from scratch!"));

    // Add the Pizza img
    const pizzaImg = new Image();
    pizzaImg.src = pizzaJPG;
    contentDiv.appendChild(pizzaImg);

    // Add click event listener for the Tab Buttons
    let addOnClickFnToTabButtons = function() {
        document.getElementById('btn-1').addEventListener('click', function() {
            showPanel(0, '#f44336');
        });
        document.getElementById('btn-2').addEventListener('click', function() {
            showPanel(1, '#4caf50');
        });
        document.getElementById('btn-3').addEventListener('click', function() {
            showPanel(2, '#2196f3');
        });
        document.getElementById('btn-4').addEventListener('click', function() {
            showPanel(3, '#ff5722');
        });
    }();
    showPanel(0, '#f44336');


};

export {
    initializer
}