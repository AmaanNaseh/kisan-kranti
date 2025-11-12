from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

MODEL_PATH = "farm_model.joblib"
FEATURES = ["temperature", "humidity", "tds", "soil_moisture", "ph", "N", "P", "K"]

model = joblib.load(MODEL_PATH)

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data"}), 400

    try:
        df = pd.DataFrame([data])
        pred = model.predict(df)[0]
        return jsonify({"prediction": pred})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/manual", methods=["GET"])
def manual():
    html = """
    <h2>Manual Sensor Input</h2>
    <form action="/api/predict" method="post" enctype="application/json">
      <p>Send POST request from frontend with JSON:</p>
      <code>{
        "temperature": 25, "humidity": 50, "tds": 300,
        "soil_moisture": 60, "ph": 6.5, "N": 200, "P": 50, "K": 150
      }</code>
    </form>
    """
    return html

if __name__ == "__main__":
    print("Application started running")
    app.run(port=8080, host="0.0.0.0", debug=False)
