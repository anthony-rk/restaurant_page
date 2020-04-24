// initializes the content on the page

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
    const pizzaImg = document.createElement("img");
    pizzaImg.src = "assets/all-meat-pizza.jpg";
    contentDiv.appendChild(pizzaImg);

}

export {
    initializer
}