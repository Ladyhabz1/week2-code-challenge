// Select the DOM elements
const form = document.getElementById('addListForm');
const itemNameInput = document.getElementById("item_input");
const clearButton = document.getElementById('clear_button');
const shoppingList = document.getElementById('shopping_list');

let shoppingListArray = []; // Array to store shopping list items

// Event listener for adding a new item
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    const newItemName = itemNameInput.value; // Get the input value
    if (newItemName !== "") { // Check if input is not empty
        // Add the new item to the array
        shoppingListArray.push(newItemName);

        // Create and append a new list item to the DOM
        const li = document.createElement("li");
        li.textContent = newItemName;
        li.addEventListener('click', function () {
            li.classList.toggle('purchased'); // Toggle "purchased" state
        });
        shoppingList.appendChild(li);

        itemNameInput.value = ""; // Clear the input field
        console.log(shoppingListArray); // Log the updated array for debugging
    }
});

// Event listener for clearing the list
clearButton.addEventListener('click', function (e) {
    e.preventDefault();
    shoppingList.innerHTML = ""; // Clear all list items from the DOM
    shoppingListArray = []; // Reset the array
    console.log("List cleared:", shoppingListArray);
});

// Add CSS to style purchased items
const style = document.createElement('style');
style.textContent = `
    .purchased {
        text-decoration: underline;
        display: list-item;
        padding: 5px;
        border-radius: 10px;
        color: #155724; /* Dark green text */
    }        
`;
document.head.appendChild(style);
