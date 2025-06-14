const select = document.getElementById('marital');

function mySelect() {

    const lastOption = select.options[4];

    if (lastOption) {
        lastOption.disabled = true;
    }
}

document.getElementById('registrationForm').onsubmit = function (event) {
    event.preventDefault(); 

    
    document.getElementById('nameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('ageError').textContent = '';

    
    const name = document.getElementById('name').value.trim();
            const namePattern = /^(?! )[A-Za-z]+( [A-Za-z]+)?$/; 
            if (name.length === 0) {
                document.getElementById('nameError').textContent = 'Name is required.';
                return;
            } else if (!namePattern.test(name)) {
                document.getElementById('nameError').textContent = 'Only letters and one space allowed.';
                return;
            }

    
            const phone = document.getElementById('phone').value.trim();
            const phonePattern = /^[6-9]{1}[0-9]{9}$/; // Ensure valid phone format
            if (!phonePattern.test(phone)) {
                document.getElementById('phoneError').textContent = 'Invalid phone number. Must start with 6-9 and have 10 digits.';
                return;
            }

   
    const age = document.getElementById('age').value;
    if (age < 18 || age > 99) 
        {
            document.getElementById('ageError').textContent = 'Age must be between 18 and 99.';
            return;
        }

    window.location.href = './home.html'
}