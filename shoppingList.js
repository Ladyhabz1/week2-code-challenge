//select the DOM elements
const form = document.getElementById('addListForm');
const itemNameInput = document.getElementById("item_input");
const addButton = document.getElementById("add_button");
const clearButton = document.getElementById('clear_button');
const shoppingList = document.getElementById('shopping_list');

//
form.addEventListener('submit', function(e){
    e.preventDefault();//stop page reload
    const newItemName =  itemNameInput.value;// Get the input value
    if (newItemName !==""){// Check if the input is not empty
    const li = document.createElement("li");// Create a new list item
    li.textContent = newItemName;
    li.addEventListener('click', function () { // Add click event to toggle "purchased" state
        li.classList.toggle('purchased');
    });
    shoppingList.appendChild(li); // Append the new item to the shopping list
    itemNameInput.value = ""; // Clear the input field
    }
       
})
//Add event listener for clearing the list
clearButton.addEventListener('click', function(e){
    e.preventDefault();
    shoppingList.innerHTML= "";//clear all list items
})
// Add CSS to style purchased items
const style = document.createElement('style');
style.textContent =`
    .purchased {
        text-decoration: underline;
        display:list-item;
        padding: 5px;
        border-radius: 5px;
        color: #155724; /* Dark green text */
    }        
`;
document.head.appendChild(style);

//Allow users to edit existing items
li.addEventListener('dbclick', function(e){
    const newItem = prompt("Edit item name: ", li.textContent);
    if(newItem !== null & newItem.trim() !== ""){
        li.textContent= newItem;//Update the text for the list item
        saveListToLocalStorage();//save changes
    }
});


