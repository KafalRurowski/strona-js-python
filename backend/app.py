from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import contextlib
import traceback

app = Flask(__name__)
CORS(app)

@app.route("/run-python", methods=["POST"])
def run_python():
    code = request.json.get("code", "")

    output_buffer = io.StringIO()

    try:
        with contextlib.redirect_stdout(output_buffer):
            exec(code, {})
        return jsonify({
            "output": output_buffer.getvalue()
        })
    except Exception:
        return jsonify({
            "error": traceback.format_exc()
        })

if __name__ == "__main__":
    app.run(debug=True)