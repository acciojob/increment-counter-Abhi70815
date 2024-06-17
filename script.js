let count = 0; // Counter's initial value

document.querySelector("#incrementBtn").addEventListener('click', () => {
    alert(count); // Display the un-incremented value
    count++; // Increment the counter
    document.querySelector("#counter").innerText = count; // Update the counter display
});