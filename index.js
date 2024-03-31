// Create a variable in the global scope

var customerName = 'bob';

// function that accessed a global declared variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; 
}