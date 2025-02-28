import shutil
import os
import numpy as np

from flask import Flask, render_template,request,jsonify
from werkzeug.utils import secure_filename

from keras.utils import load_img, img_to_array
from keras.models import load_model

################################################################# LEAF #################################################################

model_apple_leaf = load_model("./models/apple_leaf.h5")
class_label_apple_leaf = ["Apple Black Rot", "Apple Cedar Rust", "Apple Healthy", "Apple Scab"]


model_banana_leaf = load_model("./models/banana_leaf.h5")
class_label_banana_leaf = ["Banana Black Sigatoka", "Banana Bract Mosaic Virus", "Banana Healthy", "Banana Moko", 
                           "Banana Panama", "Banana Yellow Sigatoka"]


model_cassava_leaf = load_model("./models/cassava_leaf.h5")
class_label_cassava_leaf = ["Cassava Bacterial Blight", "Cassava Brown Spot", "Cassava Green Mite", "Cassava Healthy",
                            "Cassava Mosaic Virus"]


model_cherry_leaf = load_model("./models/cherry_leaf.h5")
class_label_cherry_leaf = ["Cherry Healthy", "Cherry Powdery Mildew"]


model_corn_leaf = load_model("./models/corn_leaf.h5")
class_label_corn_leaf = ["Corn Common Rust", "Corn Gray Leaf Spot", "Corn Healthy", "Corn Northern Leaf Blight"]



model_cucumber_leaf = load_model("./models/cucumber_leaf.h5")
class_label_cucumber_leaf = ["Cucumber Downey Mildew", "Cucumber Healthy", "Cucumber Powdery Mildew"]


model_eggplant_leaf = load_model("./models/eggplant_leaf.h5")
class_label_eggplant_leaf = ["Eggplant Healthy", "Eggplant Leaf Spot", "Eggplant Mosaic Virus",  "Eggplant Small Leaf",
                             "Eggplant White Mold", "Eggplant Wilt"]


model_grapes_leaf = load_model("./models/grapes_leaf.h5")
class_label_grapes_leaf = ["Grapes Black Measles", "Grapes Cedar Rust", "Grapes Healthy", "Grapes Leaf Spot"]


model_moneyplant_leaf = load_model("./models/moneyplant_leaf.h5")
class_label_moneyplant_leaf = ["Moneyplant Bacterial Wilt", "Moneyplant Healthy", "Moneyplant Manganese Toxicity"]


model_peach_leaf = load_model("./models/peach_leaf.h5")
class_label_peach_leaf = ["Peach Bacterial Spot", "Peach Healthy"]


model_pepper_leaf = load_model("./models/pepper_leaf.h5")
class_label_pepper_leaf = ["Pepper Bacterial Spot", "Pepper Healthy"]


model_potato_leaf = load_model("./models/potato_leaf.h5")
class_label_potato_leaf = ["Potato Early Blight", "Potato Healthy", "Potato Late Blight"]


model_strawberry_leaf = load_model("./models/strawberry_leaf.h5")
class_label_strawberry_leaf = ["Strawberry Healthy", "Strawberry Leaf Scorch"]


model_sugarcane_leaf = load_model("./models/sugarcane_leaf.h5")
class_label_sugarcane_leaf = ["Sugarcane Bacterial Blight", "Sugarcane Healthy", "Sugarcane Mosaic Virus",
                               "Sugarcane Red Rot", "Sugarcane Rust", "Sugarcane Yellow Rot"]


model_tomato_leaf = load_model("./models/tomato_leaf.h5")
class_label_tomato_leaf = ["Tomato Bacterial Spot", "Tomato Early Blight", "Tomato Healthy", "Tomato Late Blight",
                      "Tomato Leaf Mold", "Tomato Leaf Spot", "Tomato Mosaic Virus", "Tomato Spider Mite",
                      "Tomato Target Spot", "Tomato Yellow Leaf Curl Virus"]


model_watermelon_leaf = load_model("./models/watermelon_leaf.h5")
class_label_watermelon_leaf = ["Watermelon Downey Mildew", "Watermelon Healthy", "Watermelon Mosaic Virus"]



model_wheat_leaf = load_model("./models/wheat_leaf.h5")
class_label_wheat_leaf = ["Wheat Black Rust", "Wheat Brown Rust", "Wheat Healthy", "Wheat Leaf Blight", 
                          "Wheat Powdery Mildew", "Wheat Scab", "Wheat Yellow Rust"]

################################################################# PEST #################################################################

model_banana_pest = load_model("./models/banana_pest.h5")
class_label_banana_pest = ["Banana Healthy", "Banana Pest"]

model_cashew_pest = load_model("./models/cashew_pest.h5")
class_label_cashew_pest = ["Cashew Anthracnose", "Cashew Healthy", "Cashew Leaf Miner"]


model_corn_pest = load_model("./models/corn_pest.h5")
class_label_corn_pest = ["Corn Fall Armyworm", "Corn Grasshopper", "Corn Healthy", "Corn Leaf Beetle"]


model_cotton_pest = load_model("./models/cotton_pest.h5")
class_label_cotton_pest = ["Cotton American Bollworm", "Cotton Anthracnose", "Cotton Aphid", "Cotton Bollrot",
                           "Cotton Bollworm", "Cotton Healthy", "Cotton Mealy Bug", "Cotton Pink Bollworm",
                           "Cotton Red Bug", "Cotton Thrips", "Cotton Whitefly"]


model_eggplant_pest = load_model("./models/eggplant_pest.h5")
class_label_eggplant_pest = ["Eggplant Healthy", "Eggplant Pest"]


model_potato_pest = load_model("./models/potato_pest.h5")
class_label_potato_pest = ["Potato Healthy", "Potato Nematode", "Potato Pest"]


model_wheat_pest = load_model("./models/wheat_pest.h5")
class_label_wheat_pest = ["Wheat Aphid", "Wheat Healthy", "Wheat Mite", "Wheat Stemfly"]

################################################################# SEED #################################################################

model_corn_seed = load_model("./models/corn_seed.h5")
class_label_corn_seed = ["Broken Seed", "Discolored Seed", "Healthy Seed", "Discolored Seed"]


model_soybean_seed = load_model("./models/soybean_seed.h5")
class_label_soybean_seed = ["Broken Seed", "Damaged Skin Seed", "Healthy Seed", "Immature Seed", "Spotted Seed"]

##################################################################################################################################


def load_image(img_path):
    img = load_img(img_path, target_size=(224, 224))
    img_tensor = img_to_array(img)
    img_tensor = np.expand_dims(img_tensor,axis=0)
    img_tensor = img_tensor/255
    return img_tensor

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def main():
    save_path = 'user_uploads'
    if not os.path.exists(save_path):
        os.makedirs(save_path)


    apple_leaf_file = ".\\user_uploads\\apple_leaf.jpg"
    if not os.path.exists(apple_leaf_file):
        src = ".\\models\\apple_leaf.jpg"
        dst = ".\\user_uploads\\apple_leaf.jpg"
        shutil.copy(src, dst)
        print("apple Copy done")

    banana_leaf_file = ".\\user_uploads\\banana_leaf.jpg"
    if not os.path.exists(banana_leaf_file):
        src = ".\\models\\banana_leaf.jpg"
        dst = ".\\user_uploads\\banana_leaf.jpg"
        shutil.copy(src, dst)
        print("banana Copy done")

    cassava_leaf_file = ".\\user_uploads\\cassava_leaf.jpg"
    if not os.path.exists(cassava_leaf_file):
        src = ".\\models\\cassava_leaf.jpg"
        dst = ".\\user_uploads\\cassava_leaf.jpg"
        shutil.copy(src, dst)
        print("cassava Copy done")

    cherry_leaf_file = ".\\user_uploads\\cherry_leaf.jpg"
    if not os.path.exists(cherry_leaf_file):
        src = ".\\models\\cherry_leaf.jpg"
        dst = ".\\user_uploads\\cherry_leaf.jpg"
        shutil.copy(src, dst)
        print("cherry Copy done")

    corn_leaf_file = ".\\user_uploads\\corn_leaf.jpg"
    if not os.path.exists(corn_leaf_file):
        src = ".\\models\\corn_leaf.jpg"
        dst = ".\\user_uploads\\corn_leaf.jpg"
        shutil.copy(src, dst)
        print("corn Copy done")

    cucumber_leaf_file = ".\\user_uploads\\cucumber_leaf.jpg"
    if not os.path.exists(cucumber_leaf_file):
        src = ".\\models\\cucumber_leaf.jpg"
        dst = ".\\user_uploads\\cucumber_leaf.jpg"
        shutil.copy(src, dst)
        print("cucumber Copy done")
    
    eggplant_leaf_file = ".\\user_uploads\\eggplant_leaf.jpg"
    if not os.path.exists(eggplant_leaf_file):
        src = ".\\models\\eggplant_leaf.jpg"
        dst = ".\\user_uploads\\eggplant_leaf.jpg"
        shutil.copy(src, dst)
        print("eggplant Copy done")

    grapes_leaf_file = ".\\user_uploads\\grapes_leaf.jpg"
    if not os.path.exists(grapes_leaf_file):
        src = ".\\models\\grapes_leaf.jpg"
        dst = ".\\user_uploads\\grapes_leaf.jpg"
        shutil.copy(src, dst)
        print("grapes Copy done")
    
    moneyplant_leaf_file = ".\\user_uploads\\moneyplant_leaf.jpg"
    if not os.path.exists(moneyplant_leaf_file):
        src = ".\\models\\moneyplant_leaf.jpg"
        dst = ".\\user_uploads\\moneyplant_leaf.jpg"
        shutil.copy(src, dst)
        print("moneyplant Copy done")

    peach_leaf_file = ".\\user_uploads\\peach_leaf.jpg"
    if not os.path.exists(peach_leaf_file):
        src = ".\\models\\peach_leaf.jpg"
        dst = ".\\user_uploads\\peach_leaf.jpg"
        shutil.copy(src, dst)
        print("peach Copy done")
       
    pepper_leaf_file = ".\\user_uploads\\pepper_leaf.jpg"
    if not os.path.exists(pepper_leaf_file):
        src = ".\\models\\pepper_leaf.jpg"
        dst = ".\\user_uploads\\pepper_leaf.jpg"
        shutil.copy(src, dst)
        print("pepper Copy done")
    
    potato_leaf_file = ".\\user_uploads\\potato_leaf.jpg"
    if not os.path.exists(potato_leaf_file):
        src = ".\\models\\potato_leaf.jpg"
        dst = ".\\user_uploads\\potato_leaf.jpg"
        shutil.copy(src, dst)
        print("potato Copy done")

    strawberry_leaf_file = ".\\user_uploads\\strawberry_leaf.jpg"
    if not os.path.exists(strawberry_leaf_file):
        src = ".\\models\\strawberry_leaf.jpg"
        dst = ".\\user_uploads\\strawberry_leaf.jpg"
        shutil.copy(src, dst)
        print("strawberry Copy done")
    
    sugarcane_leaf_file = ".\\user_uploads\\sugarcane_leaf.jpg"
    if not os.path.exists(sugarcane_leaf_file):
        src = ".\\models\\sugarcane_leaf.jpg"
        dst = ".\\user_uploads\\sugarcane_leaf.jpg"
        shutil.copy(src, dst)
        print("sugarcane Copy done")

    tomato_leaf_file = ".\\user_uploads\\tomato_leaf.jpg"
    if not os.path.exists(tomato_leaf_file):
        src = ".\\models\\tomato_leaf.jpg"
        dst = ".\\user_uploads\\tomato_leaf.jpg"
        shutil.copy(src, dst)
        print("tomato Copy done")

    watermelon_leaf_file = ".\\user_uploads\\watermelon_leaf.jpg"
    if not os.path.exists(watermelon_leaf_file):
        src = ".\\models\\watermelon_leaf.jpg"
        dst = ".\\user_uploads\\watermelon_leaf.jpg"
        shutil.copy(src, dst)
        print("watermelon Copy done")

    wheat_leaf_file = ".\\user_uploads\\wheat_leaf.jpg"
    if not os.path.exists(wheat_leaf_file):
        src = ".\\models\\wheat_leaf.jpg"
        dst = ".\\user_uploads\\wheat_leaf.jpg"
        shutil.copy(src, dst)
        print("wheat Copy done")

    
    ###########################################################################################

    banana_pest_file = ".\\user_uploads\\banana_pest.jpg"
    if not os.path.exists(banana_pest_file):
        src = ".\\models\\banana_pest.jpg"
        dst = ".\\user_uploads\\banana_pest.jpg"
        shutil.copy(src, dst)
        print("banana Copy done")

    cashew_pest_file = ".\\user_uploads\\cashew_pest.jpg"
    if not os.path.exists(cashew_pest_file):
        src = ".\\models\\cashew_pest.jpg"
        dst = ".\\user_uploads\\cashew_pest.jpg"
        shutil.copy(src, dst)
        print("cashew Copy done")

    corn_pest_file = ".\\user_uploads\\corn_pest.jpg"
    if not os.path.exists(corn_pest_file):
        src = ".\\models\\corn_pest.jpg"
        dst = ".\\user_uploads\\corn_pest.jpg"
        shutil.copy(src, dst)
        print("corn Copy done")

    cotton_pest_file = ".\\user_uploads\\cotton_pest.jpg"
    if not os.path.exists(cotton_pest_file):
        src = ".\\models\\cotton_pest.jpg"
        dst = ".\\user_uploads\\cotton_pest.jpg"
        shutil.copy(src, dst)
        print("cotton Copy done")

    eggplant_pest_file = ".\\user_uploads\\eggplant_pest.jpg"
    if not os.path.exists(eggplant_pest_file):
        src = ".\\models\\eggplant_pest.jpg"
        dst = ".\\user_uploads\\eggplant_pest.jpg"
        shutil.copy(src, dst)
        print("eggplant Copy done")

    potato_pest_file = ".\\user_uploads\\potato_pest.jpg"
    if not os.path.exists(potato_pest_file):
        src = ".\\models\\potato_pest.jpg"
        dst = ".\\user_uploads\\potato_pest.jpg"
        shutil.copy(src, dst)
        print("potato Copy done")

    wheat_pest_file = ".\\user_uploads\\wheat_pest.jpg"
    if not os.path.exists(wheat_pest_file):
        src = ".\\models\\wheat_pest.jpg"
        dst = ".\\user_uploads\\wheat_pest.jpg"
        shutil.copy(src, dst)
        print("wheat Copy done")

    ###########################################################################################

    corn_seed_file = ".\\user_uploads\\corn_seed.jpg"
    if not os.path.exists(corn_seed_file):
        src = ".\\models\\corn_seed.jpg"
        dst = ".\\user_uploads\\corn_seed.jpg"
        shutil.copy(src, dst)
        print("corn Copy done")

    soybean_seed_file = ".\\user_uploads\\soybean_seed.jpg"
    if not os.path.exists(soybean_seed_file):
        src = ".\\models\\soybean_seed.jpg"
        dst = ".\\user_uploads\\soybean_seed.jpg"
        shutil.copy(src, dst)
        print("soybean Copy done")

    return render_template("index.html")

@app.route("/leaf/apple", methods=["GET", "POST"])
def apple_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("apple_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_apple_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_apple_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\apple_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_apple_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_apple_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("apple_leaf.html", result=final_ans)


@app.route("/leaf/banana", methods=["GET", "POST"])
def banana_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("banana_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_banana_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_banana_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\banana_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_banana_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_banana_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("banana_leaf.html", result=final_ans)


@app.route("/leaf/cassava", methods=["GET", "POST"])
def cassava_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("cassava_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_cassava_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_cassava_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\cassava_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_cassava_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_cassava_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("cassava_leaf.html", result=final_ans)


@app.route("/leaf/cherry", methods=["GET", "POST"])
def cherry_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("cherry_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_cherry_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_cherry_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\cherry_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_cherry_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_cherry_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("cherry_leaf.html", result=final_ans)


@app.route("/leaf/corn", methods=["GET", "POST"])
def corn_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("corn_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_corn_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_corn_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\corn_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_corn_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_corn_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("corn_leaf.html", result=final_ans)


@app.route("/leaf/cucumber", methods=["GET", "POST"])
def cucumber_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("cucumber_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_cucumber_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_cucumber_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\cucumber_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_cucumber_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_cucumber_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("cucumber_leaf.html", result=final_ans)


@app.route("/leaf/eggplant", methods=["GET", "POST"])
def eggplant_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("eggplant_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_eggplant_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_eggplant_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\eggplant_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_eggplant_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_eggplant_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("eggplant_leaf.html", result=final_ans)


@app.route("/leaf/grapes", methods=["GET", "POST"])
def grapes_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("grapes_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_grapes_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_grapes_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\grapes_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_grapes_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_grapes_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("grapes_leaf.html", result=final_ans)


@app.route("/leaf/moneyplant", methods=["GET", "POST"])
def moneyplant_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("moneyplant_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_moneyplant_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_moneyplant_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\moneyplant_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_moneyplant_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_moneyplant_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("moneyplant_leaf.html", result=final_ans)


@app.route("/leaf/peach", methods=["GET", "POST"])
def peach_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("peach_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_peach_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_peach_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\peach_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_peach_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_peach_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("peach_leaf.html", result=final_ans)


@app.route("/leaf/pepper", methods=["GET", "POST"])
def pepper_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("pepper_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_pepper_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_pepper_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\pepper_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_pepper_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_pepper_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("pepper_leaf.html", result=final_ans)


@app.route("/leaf/potato", methods=["GET", "POST"])
def potato_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("potato_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_potato_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_potato_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\potato_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_potato_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_potato_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("potato_leaf.html", result=final_ans)


@app.route("/leaf/strawberry", methods=["GET", "POST"])
def strawberry_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("strawberry_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_strawberry_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_strawberry_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\strawberry_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_strawberry_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_strawberry_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("strawberry_leaf.html", result=final_ans)


@app.route("/leaf/sugarcane", methods=["GET", "POST"])
def sugarcane_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("sugarcane_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_sugarcane_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_sugarcane_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\sugarcane_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_sugarcane_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_sugarcane_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("sugarcane_leaf.html", result=final_ans)


@app.route("/leaf/tomato", methods=["GET", "POST"])
def tomato_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("tomato_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_tomato_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_tomato_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\tomato_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_tomato_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_tomato_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("tomato_leaf.html", result=final_ans)


@app.route("/leaf/watermelon", methods=["GET", "POST"])
def watermelon_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("watermelon_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_watermelon_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_watermelon_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\watermelon_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_watermelon_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_watermelon_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("watermelon_leaf.html", result=final_ans)


@app.route("/leaf/wheat", methods=["GET", "POST"])
def wheat_leaf():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("wheat_leaf.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_wheat_leaf.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_wheat_leaf[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\wheat_leaf.jpg"
    loaded_image = load_image(file)
    prediction = model_wheat_leaf.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_wheat_leaf[int(class_id)]
    print(final_ans)
    
    return render_template("wheat_leaf.html", result=final_ans)


###################################################################################################################################


@app.route("/pest/banana", methods=["GET", "POST"])
def banana_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("banana_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_banana_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_banana_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\banana_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_banana_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_banana_pest[int(class_id)]
    print(final_ans)
    
    return render_template("banana_pest.html", result=final_ans)


@app.route("/pest/cashew", methods=["GET", "POST"])
def cashew_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("cashew_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_cashew_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_cashew_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\cashew_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_cashew_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_cashew_pest[int(class_id)]
    print(final_ans)
    
    return render_template("cashew_pest.html", result=final_ans)


@app.route("/pest/corn", methods=["GET", "POST"])
def corn_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("corn_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_corn_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_corn_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\corn_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_corn_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_corn_pest[int(class_id)]
    print(final_ans)
    
    return render_template("corn_pest.html", result=final_ans)


@app.route("/pest/cotton", methods=["GET", "POST"])
def cotton_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("cotton_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_cotton_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_cotton_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\cotton_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_cotton_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_cotton_pest[int(class_id)]
    print(final_ans)
    
    return render_template("cotton_pest.html", result=final_ans)


@app.route("/pest/eggplant", methods=["GET", "POST"])
def eggplant_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("eggplant_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_eggplant_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_eggplant_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\eggplant_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_eggplant_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_eggplant_pest[int(class_id)]
    print(final_ans)
    
    return render_template("eggplant_pest.html", result=final_ans)


@app.route("/pest/potato", methods=["GET", "POST"])
def potato_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("potato_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_potato_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_potato_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\potato_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_potato_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_potato_pest[int(class_id)]
    print(final_ans)
    
    return render_template("potato_pest.html", result=final_ans)


@app.route("/pest/wheat", methods=["GET", "POST"])
def wheat_pest():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("wheat_pest.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_wheat_pest.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_wheat_pest[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\wheat_pest.jpg"
    loaded_image = load_image(file)
    prediction = model_wheat_pest.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_wheat_pest[int(class_id)]
    print(final_ans)
    
    return render_template("wheat_pest.html", result=final_ans)


###################################################################################################################################


@app.route("/seed/corn", methods=["GET", "POST"])
def corn_seed():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("corn_seed.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_corn_seed.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_corn_seed[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\corn_seed.jpg"
    loaded_image = load_image(file)
    prediction = model_corn_seed.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_corn_seed[int(class_id)]
    print(final_ans)
    
    return render_template("corn_seed.html", result=final_ans)



@app.route("/seed/soybean", methods=["GET", "POST"])
def soybean_seed():
    if request.method == 'POST':
        print(request.files)

        if 'file' not  in request.files:
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        save_path = 'user_uploads'

        filename = secure_filename("soybean_seed.jpg")
        file_path = os.path.join(save_path, filename)
        file.save(file_path)
        
        loaded_image = load_image(file_path)
        prediction = model_soybean_seed.predict(loaded_image)
        class_id = np.argmax(prediction, axis=1)
        final_ans = class_label_soybean_seed[int(class_id)]
        print(final_ans)
        return final_ans

    file = ".\\user_uploads\\soybean_seed.jpg"
    loaded_image = load_image(file)
    prediction = model_soybean_seed.predict(loaded_image)
    class_id = np.argmax(prediction, axis=1)
    final_ans = class_label_soybean_seed[int(class_id)]
    print(final_ans)
    
    return render_template("soybean_seed.html", result=final_ans)

###################################################################################################################################

if __name__ == "__main__":
    app.run(debug=True, port=8000)