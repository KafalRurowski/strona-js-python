const tasks = [
    {
        question: "Wypisz liczby od 1 do 5",
        expected: "1\n2\n3\n4\n5\n",
        hint: "Użyj pętli for i range"
    },
    {
        question: "Wypisz sumę liczb 2 i 3",
        expected: "5\n",
        hint: "print(2 + 3)"
    },
    {
        question: "Jeśli x = 10 i x > 5 wypisz YES, inaczej NO",
        expected: "YES\n",
        hint: "if x > 5"
    }
];

let task = tasks[Math.floor(Math.random() * tasks.length)];
document.getElementById("task").innerText = task.question;

function check() {
    const code = document.getElementById("solution").value;

    fetch("http://127.0.0.1:5000/run-python", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(data => {
        if (data.output === task.expected) {
            document.getElementById("result").innerText = "✅ Zadanie poprawne!";
        } else {
            document.getElementById("result").innerText =
                "❌ Źle\n\nOtrzymano:\n" + data.output +
                "\n\nPodpowiedź:\n" + task.hint;
        }
    });
}