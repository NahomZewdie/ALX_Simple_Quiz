// Ensure the script runs only after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary DOM elements for the quiz.
    // The questionElement is not directly used in this version but kept for context.
    const questionElement = document.getElementById('quiz-question');
    const submitButton = document.getElementById('submit-answer');
    const feedbackElement = document.getElementById('feedback');

    /**
     * Checks the user's selected answer against the correct answer
     * and displays appropriate feedback.
     */
    function checkAnswer() {
        // Define the correct answer for the current quiz question.
        const correctAnswer = '4';

        // Retrieve the user's selected answer by finding the checked radio button
        // with the name "quiz" and getting its value.
        const selectedRadio = document.querySelector('input[name="quiz"]:checked');

        // Check if an answer was selected. If not, provide feedback.
        if (!selectedRadio) {
            feedbackElement.textContent = 'Please select an answer!';
            feedbackElement.style.color = '#dc3545'; // Red color for error.
            return; // Exit the function if no answer is selected.
        }

        const userAnswer = selectedRadio.value;

        // Compare the user's answer with the correct answer and provide feedback.
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = 'Correct! Well done.';
            feedbackElement.style.color = '#28a745'; // Green color for success.
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = '#dc3545'; // Red color for incorrect answer.
        }
    }

    // Add a click event listener to the submit button.
    // When the button is clicked, the checkAnswer function will be executed.
    submitButton.addEventListener('click', checkAnswer);
});
