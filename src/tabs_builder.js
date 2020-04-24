// Dynamically create the tab list with JS up here so we can reuse with X number of tabs
// Reference: https://www.youtube.com/watch?v=PzSxehu4G78&t=681s

// Function for displaying tabs once the button is selected

let showPanel = function(panelIndex, colorCode) {
    let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
    let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

    console.log(tabButtons);
    console.log(tabPanels);

    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });

    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";

    tabPanels.forEach(function(node){
        node.style.display="none";
    });

    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
};

export {
    showPanel
}