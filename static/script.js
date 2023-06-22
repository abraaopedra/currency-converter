document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var amount = document.querySelector("#amount").value;
    var from = document.querySelector("#from").value;
    var to = document.querySelector("#to").value;

    // Use fetch to send a GET request to the API
    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[to];
            var result = amount * rate;

            // Update the result text with the conversion result
            document.querySelector("#result").textContent = `Result: ${result.toFixed(2)}`;
        })
        .catch(error => {
            document.querySelector("#result").textContent = `Error: ${error.message}`;
        });
});
