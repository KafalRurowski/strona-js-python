
function runCode() {
    const code = document.getElementById("code").value;

    fetch("http://127.0.0.1:5000/run-python", {
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
