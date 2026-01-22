
function runCode() {
    const code = document.getElementById("code").value;

    fetch("https://strona-js-python.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("output").innerText =
            data.result || data.error;
    });
}
