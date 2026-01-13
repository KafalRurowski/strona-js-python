from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # ważne dla JS!

@app.route("/")
def home():
    return "Backend działa!"

@app.route("/api")
def api():
    return jsonify({"message": "Hello from Python backend!"})

if __name__ == "__main__":
    app.run()
