// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('btn-active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('btn-active');
    });
});
