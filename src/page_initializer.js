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
    
    // Initialize view to the first Tab
    showPanel(0, '#f44336');

    let fillTabInnerHTML = function() {
        document.getElementById('btn-1').innerHTML = "About Us";
        document.getElementById('panel-1').innerHTML = "We have been serving the community with our gourmet Pizzas since 1995.";

        document.getElementById('btn-2').innerHTML = "Our Pizza";
        document.getElementById('panel-2').innerHTML = "Our Pizza uses freshly grated Mozzarella, homemade tomato sauce and hand tossed dough.";

        document.getElementById('btn-3').innerHTML = "Business Information";
        document.getElementById('panel-3').innerHTML = "Open everyday 11am - 1am";

        document.getElementById('btn-4').innerHTML = "Reviews";
        document.getElementById('panel-4').innerHTML = '"Best pizza the 99% can afford!"-Bernie Sanders' + "<br /> <br />" + '"Doesn\'t get better than this!" -Barack Obama';
    }();





};

export {
    initializer
}