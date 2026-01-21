const quizzes = [
    {
        code: `print(2 + 3)`,
        answers: ["23", "5", "2+3", "Błąd"],
        correct: 1
    },
    {
        code: `
for i in range(2):
    print(i)
`,
        answers: [
            "0 1",
            "1 2",
            "0\n1",
            "Błąd"
        ],
        correct: 2
    },
    {
        code: `
x = 5
if x > 10:
    print("A")
else:
    print("B")
`,
        answers: ["A", "B", "Nic", "Błąd"],
        correct: 1
    }
];

const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
document.getElementById("code").innerText = quiz.code;

const form = document.getElementById("answers");
quiz.answers.forEach((ans, i) => {
    form.innerHTML += `
        <label>
            <input type="radio" name="answer" value="${i}">
            ${String.fromCharCode(65+i)}. ${ans}
        </label><br>
    `;
});

function check() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        document.getElementById("result").innerText = "Wybierz odpowiedź!";
        return;
    }

    if (parseInt(selected.value) === quiz.correct) {
        document.getElementById("result").innerText = "✅ Poprawna odpowiedź";
    } else {
        document.getElementById("result").innerText =
            "❌ Zła odpowiedź\nPoprawna: " +
            String.fromCharCode(65 + quiz.correct);
    }
}