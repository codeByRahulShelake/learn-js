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

// Populate dropdown list based on search input
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

// Restrict to predefined countries only
countrySearch.addEventListener("blur", () => {
    // Check if the entered value matches a predefined country
    if (!countries.includes(countrySearch.value)) {
        countrySearch.value = ''; // Clear the input if it's invalid
        selectedCountry = null; // Reset the selected country
    }
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        countryList.style.display = "none";
    }
});


// validation for name 
document.getElementById('nameInput').addEventListener('input', function () {
    const nameInput = this.value;
    const namePattern = /^[A-Za-z\s'-]+$/;

    if (!namePattern.test(nameInput)) {
        this.setCustomValidity('Name should only contain letters, spaces, hyphens, or apostrophes.');
    } else {
        this.setCustomValidity('');
    }
});


// validation for email
document.getElementById('emailInput').addEventListener('input', function () {
    const emailInput = this.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;


    if (!emailPattern.test(emailInput)) {
        this.setCustomValidity('Enter valid email address');
    } else {
        this.setCustomValidity('');
    }
});

// validation for password
let firstPassword;
document.getElementById('passwordInput').addEventListener('input', function () {
    const passwordInput = this.value;
    firstPassword = passwordInput;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordPattern.test(passwordInput)) {
        this.setCustomValidity('Password must be at least 8 characters long, contain at least one uppercase letter, '
                               + 'one lowercase letter, one digit, and one special character.');
    } else {
        this.setCustomValidity('');
    }
});

// validation for confirm password
let secondPassword;
document.getElementById('confirmPasswordInput').addEventListener('input', function () {
    const confirmPasswordInput = this.value;
    secondPassword = confirmPasswordInput;
    if (firstPassword !== secondPassword) {  
        this.setCustomValidity('Passwords do not match. Please make sure both fields are identical.');
    } else {
        this.setCustomValidity('');
    }
});

// validation for phone no
document.getElementById('phoneInput').addEventListener('input', function () {
    const phoneInput = this.value;
    const phonePattern = /^\+?[1-9]\d{1,4}[-\s]?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}$/;


    if (!phonePattern.test(phoneInput)) {
        this.setCustomValidity('Enter valid phone no.');
    } else {
        this.setCustomValidity('');
    }
});



