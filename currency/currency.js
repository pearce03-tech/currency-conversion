const conversionRates = {
    USD: 1,
    EUR: 0.92,  // Example conversion rate: 1 USD = 0.92 EUR
    GBP: 0.82   // Example conversion rate: 1 USD = 0.82 GBP
};

document.getElementById("convert-btn").addEventListener("click", function() {
    // Get the amount entered by the user
    const amountInUSD = parseFloat(document.getElementById("amount").value);
    
    // Get the selected currency
    const selectedCurrency = document.getElementById("currency-select").value;
    
    // Calculate the converted amount
    if (!isNaN(amountInUSD) && amountInUSD > 0) {
        const convertedAmount = amountInUSD * conversionRates[selectedCurrency];
        
        // Display the converted amount and currency symbol
        document.getElementById("converted-value").textContent = convertedAmount.toFixed(2);
        document.getElementById("currency-symbol").textContent = selectedCurrency;
    } else {
        alert("Please enter a valid amount in USD.");
    }
});