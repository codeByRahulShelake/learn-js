document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    let isValid = true;

    // Name validation
    const nameInput = document.getElementById('nameInput');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[A-Za-z\s'-]+$/;
    if (!namePattern.test(nameInput.value)) {
        nameError.textContent = 'Name should only contain letters, spaces, hyphens, or apostrophes.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Email validation
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email address (e.g., example@gmail.com).';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Password validation
    const passwordInput = document.getElementById('passwordInput');
    const passwordError = document.getElementById('passwordError');
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // Confirm Password validation
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (passwordInput.value !== confirmPasswordInput.value ) {
        confirmPasswordError.textContent = 'Passwords do not match. Please make sure both fields are identical.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
        confirmPasswordError.style.display = 'none';
    }

    // Phone validation (Indian number)
    const phoneInput = document.getElementById('phoneInput');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\+?[1-9]\d{1,4}[-\s]?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = 'Enter a valid phone number (e.g., 9876543210).';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
    }

    // gender validation
    const genderRadios = document.getElementsByName("gender");
    const genderError = document.getElementById('genderError')

    const genderSelected = Array.from(genderRadios).some(radio => radio.checked);
    if (!genderSelected) {
        genderError.textContent = 'Select a gender';
        genderError.style.display = 'block';
        isValid = false;
    } else {
        genderError.textContent = '';
        genderError.style.display = 'none'; // Hide error if gender is selected
    }

    // country validation
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
        "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
        "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
        "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
        "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau",
        "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
        "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
        "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
        "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
        "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
        "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    
    const countrySearch = document.getElementById("countrySearch");
    const countryList = document.getElementById("countryList");
    
    let selectedCountry = null;
    
    // Filter countries based on search input
    function filterCountries(query) {
        const filtered = countries.filter(country =>
            country.toLowerCase().includes(query.toLowerCase())
        );
        countryList.innerHTML = ""; // Clear previous results
        if (filtered.length > 0) {
            filtered.forEach(country => {
                const li = document.createElement("li");
                li.textContent = country;
                li.addEventListener("click", () => {
                    countrySearch.value = country; // Set selected value in input
                    selectedCountry = country; // Store selected country
                    countryList.style.display = "none"; // Hide dropdown
                });
                countryList.appendChild(li);
            });
            countryList.style.display = "block"; // Show dropdown
        } else {
            countryList.style.display = "none"; // Hide dropdown if no matches
        }
    }
    
    // Add event listener for user input
    countrySearch.addEventListener("input", (e) => {
        const query = e.target.value;
        if (query) {
            filterCountries(query);
        } else {
            countryList.style.display = "none"; // Hide dropdown if input is empty
        }
    });
    
    // Restrict input to valid countries only
    countrySearch.addEventListener("blur", () => {
        if (!countries.includes(countrySearch.value)) {
            countrySearch.value = ''; // Clear the input if it's invalid
            selectedCountry = null; // Reset selected country
        }
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            countryList.style.display = "none";
        }
    });
    
    if (!countries.includes(countrySearch.value)) {
        countryError.textContent = 'Please select a valid country from the list.';
        countryError.style.display = 'block';
        isValid = false;
    } else {
        countryError.textContent = '';
        countryError.style.display = 'none';
    }

    const termsCheckbox = document.getElementById("terms");
    const termsError = document.getElementById("termsError");

    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms and conditions.';
        termsError.style.display = 'block';
        isValid = false; // Show error if terms are not checked
    } else {
        termsError.textContent = '';
        termsError.style.display = 'none'; // Hide error if terms are checked
    }

    // If all fields are valid, submit the form
    if (isValid) {
        this.submit(); // Submit the form
    }
});
