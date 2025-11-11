# train.py
import pandas as pd
import joblib
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay

df = pd.read_excel("sensor_data.xlsx")

features = ["temperature", "humidity", "tds", "soil_moisture", "ph", "N", "P", "K"]
X = df[features]
y = df["recommendation"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=150, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print(f"✅ Model trained. Accuracy: {acc*100:.2f}%")

joblib.dump(model, "farm_model.joblib")
print("💾 Model saved to farm_model.joblib")

# Visualization
plt.figure(figsize=(6, 4))
plt.plot(model.oob_score_ if hasattr(model, 'oob_score_') else [acc], label="Accuracy")
plt.title("Model Accuracy")
plt.xlabel("Epochs")
plt.ylabel("Accuracy")
plt.legend()
plt.show()

cm = confusion_matrix(y_test, y_pred)
ConfusionMatrixDisplay(cm, display_labels=model.classes_).plot(cmap="Blues")
plt.title("Confusion Matrix")
plt.show()
