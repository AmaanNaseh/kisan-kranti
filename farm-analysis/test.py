# test.py
import joblib
import pandas as pd

model = joblib.load("farm_model.joblib")
features = ["temperature", "humidity", "tds", "soil_moisture", "ph", "N", "P", "K"]

print("🌱 Enter sensor values manually:")
values = {}
for f in features:
    values[f] = float(input(f"{f}: "))

df = pd.DataFrame([values])
prediction = model.predict(df)[0]
print("\n✅ Model Recommendation:", prediction)
