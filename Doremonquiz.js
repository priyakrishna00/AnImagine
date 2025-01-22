let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "Who is Doraemon's best friend?",
        choices: ["Nobi Nobita", "Shizuka", "Takeshi", "Suneo"],
        correct: "Nobi Nobita"
    },
    {
        question: "What is Nobitha's favorite food?",
        choices: ["Ice Cream", "Burgers", "Pizza", "Noodles"],
        correct: "Ice Cream"
    },
    {
        question: "Which centure doremon came from?",
        choices: ["25th", "20th", "21st", "30th"],
        correct: "20th"
    },
    {
        question: "which cake does Doremon like's?",
        choices: ["Cream cake", "Cheese cake", "Doracake", "Chocolate cake"],
        correct: "Doracake"
    }
];

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Over! Your score is: " + score);
    }
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-container').innerHTML = `
        <p>${question.question}</p>
        ${question.choices.map(choice => `<button class="choice" onclick="checkAnswer('${choice}')">${choice}</button>`).join('')}
    `;
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correct) {
        score++;
    }
    nextQuestion();
}

showQuestion(); // Show the first question when the page loads
