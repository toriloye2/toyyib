document.addEventListener("DOMContentLoaded", function () {
    const phoneNumberInput = document.getElementById("phoneNumberInput");

    phoneNumberInput.addEventListener("input", function () {
        let inputValue = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (inputValue.length > 10) {
            inputValue = inputValue.slice(0, 10); // Limit to 10 digits
        }

        if (inputValue.length >= 1) {
            inputValue = "(" + inputValue;
        }

        if (inputValue.length >= 4) {
            inputValue = inputValue.slice(0, 4) + ") " + inputValue.slice(4);
        }

        if (inputValue.length >= 9) {
            inputValue = inputValue.slice(0, 9) + "-" + inputValue.slice(9);
        }

        phoneNumberInput.value = inputValue;
    });
});
