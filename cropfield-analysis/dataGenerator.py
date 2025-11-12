# dataGenerator.py
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import os

# sensor ranges
RANGES = {
    "temperature": (0, 50),
    "humidity": (20, 80),
    "tds": (0, 1000),
    "soil_moisture": (0, 100),
    "ph": (0, 14),
    "N": (0, 1999),
    "P": (0, 1999),
    "K": (0, 1999)
}

OPTIMAL = {
    "temperature": (18, 30),
    "humidity": (40, 70),
    "soil_moisture": (40, 70),
    "ph": (6, 7.5),
    "N": (150, 350),
    "P": (30, 80),
    "K": (100, 300),
    "tds": (50, 800)
}

def compute_yield_score(row):
    score = 0
    weights = {"temperature": 1, "humidity": 1, "soil_moisture": 1.2, "ph": 1, "N": 1, "P": 0.8, "K": 0.8, "tds": 0.5}
    for k, w in weights.items():
        low, high = OPTIMAL[k]
        if low <= row[k] <= high:
            s = 1
        else:
            rng = RANGES[k][1] - RANGES[k][0]
            dist = min(abs(row[k] - (low if row[k] < low else high)) / rng, 1)
            s = max(0, 1 - dist * 1.5)
        score += s * w
    return round(score / sum(weights.values()), 3)

def recommend_actions(row):
    recs = []
    if row["soil_moisture"] < 40: recs.append("Irrigate")
    if row["ph"] < 5.8: recs.append("Raise pH")
    if row["ph"] > 7.8: recs.append("Lower pH")
    if row["N"] < 150: recs.append("Add N")
    if row["P"] < 30: recs.append("Add P")
    if row["K"] < 100: recs.append("Add K")
    if not recs: recs.append("OK")
    return ", ".join(recs)

def generate_data(n=1000):
    data = []
    now = datetime.now()
    for i in range(n):
        sample = {k: np.random.uniform(v[0], v[1]) for k, v in RANGES.items()}
        sample["timestamp"] = now - timedelta(minutes=i)
        sample["yield_score"] = compute_yield_score(sample)
        sample["recommendation"] = recommend_actions(sample)
        data.append(sample)
    df = pd.DataFrame(data)
    df.to_excel("sensor_data.xlsx", index=False)
    print("sensor_data.xlsx generated with", len(df), "rows")

if __name__ == "__main__":
    if os.path.exists("sensor_data.xlsx"):
        print("✔ Dataset already exists. Delete if you want to regenerate.")
    else:
        generate_data(1500)
