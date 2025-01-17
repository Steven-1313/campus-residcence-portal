document.getElementById("registrationForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Prevent the default form submission

    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        role: document.getElementById('role').value
    };

    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json(); // This must be within try block and await should succeed

        if (response.ok) {
            messageElement.textContent = 'Registration successful!';
            messageElement.style.color = 'green'; // Change color for success message
            console.log('Success:', result);
        } else {
            messageElement.textContent = 'Error: ' + result.message;
            messageElement.style.color = 'red'; 
        }
    } catch (error) {
        messageElement.textContent = 'Failed to register. ' + (error.message || 'Please try with new username.');
        messageElement.style.color = 'red';
    }
});
