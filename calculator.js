// Ensure the script runs only after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Select the input elements for the two numbers.
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');

    // Select the calculation result display element.
    const calculationResultSpan = document.getElementById('calculation-result');

    // Select all the operation buttons.
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    /**
     * Adds two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of the two numbers.
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The difference between the two numbers.
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * Multiplies two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of the two numbers.
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides the first number by the second.
     * Handles division by zero.
     * @param {number} num1 - The numerator.
     * @param {number} num2 - The denominator.
     * @returns {number|string} The quotient or an error message if dividing by zero.
     */
    function divide(num1, num2) {
        if (num2 === 0) {
            return 'Cannot divide by zero.';
        }
        return num1 / num2;
    }

    // Add event listener for the addition button.
    addButton.addEventListener('click', function() {
        // Get input values and convert them to floating-point numbers.
        // Use 0 as a default if the input is empty or not a valid number.
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = add(number1, number2);
        // Display the result in the span.
        calculationResultSpan.textContent = result;
    });

    // Add event listener for the subtraction button.
    subtractButton.addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = subtract(number1, number2);
        calculationResultSpan.textContent = result;
    });

    // Add event listener for the multiplication button.
    multiplyButton.addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = multiply(number1, number2);
        calculationResultSpan.textContent = result;
    });

    // Add event listener for the division button.
    divideButton.addEventListener('click', function() {
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        const result = divide(number1, number2); // The divide function handles the 'cannot divide by zero' message.
        calculationResultSpan.textContent = result;
    });
});
