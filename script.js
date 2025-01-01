document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converter-form");
    const resultDiv = document.getElementById("result");

    function convertTemperature() {
        const temperature = parseFloat(document.getElementById("temperature").value);
        const fromUnit = document.getElementById("from-unit").value;
        const toUnit = document.getElementById("to-unit").value;

        if (isNaN(temperature)) {
            resultDiv.textContent = "Please enter a valid number.";
            return;
        }

        let result;

        if (fromUnit === toUnit) {
            result = temperature;
        } else if (fromUnit === "C" && toUnit === "F") {
            result = (temperature * 9/5) + 32;
        } else if (fromUnit === "C" && toUnit === "K") {
            result = temperature + 273.15;
        } else if (fromUnit === "F" && toUnit === "C") {
            result = (temperature - 32) * 5/9;
        } else if (fromUnit === "F" && toUnit === "K") {
            result = ((temperature - 32) * 5/9) + 273.15;
        } else if (fromUnit === "K" && toUnit === "C") {
            result = temperature - 273.15;
        } else if (fromUnit === "K" && toUnit === "F") {
            result = ((temperature - 273.15) * 9/5) + 32;
        }

        resultDiv.textContent = `Result: ${result.toFixed(2)}° ${toUnit}`;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        convertTemperature();
    });
});
