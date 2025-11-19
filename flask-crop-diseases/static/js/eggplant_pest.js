const form = document.getElementById("imgForm");
const avoidReload = (e) => {
  e.preventDefault();
};
form.addEventListener("submit", avoidReload);

var imageIndex = 0;

const changePreviewImage = () => {
  var allPreviewImages = [
    "../static/assets/pest/dataset/eggplant/eggplant_healthy.jpg",
    "../static/assets/pest/dataset/eggplant/eggplant_pest.jpg",
  ];

  var previewImage = document.getElementById("previewImg");
  previewImage.src = allPreviewImages[imageIndex];
  console.log(previewImage.src);

  if (imageIndex === allPreviewImages.length - 1) {
    imageIndex = 0;
    console.log(imageIndex);
  } else {
    imageIndex = imageIndex + 1;
    console.log(imageIndex);
  }
};

setInterval(changePreviewImage, 1000);

const getAns = () => {
  const imgElem = document.getElementById("imgId");
  const file = document.querySelector("input[type=file]").files[0];
  console.log(file);
  var fileReader = new FileReader();
  fileReader.onloadend = function () {
    var reportImageUrl = fileReader.result;
    imgElem.src = reportImageUrl;
  };
  if (file) {
    fileReader.readAsDataURL(file);
  } else {
    imgElem.src = "";
  }
};

async function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("resultContainer").style.display = "flex";
  document.getElementById("loaderImg").style.display = "block";

  const inpFile = document.getElementById("imgData");
  const formData = new FormData();
  formData.append("file", inpFile.files[0]);

  var res, data, outputElem;

  try {
    res = await fetch("/pest/eggplant", {
      method: "POST",
      body: formData,
    });
    data = await res.text();
    outputElem = document.querySelector(".prediction__result");
    outputElem.textContent = data;
    // console.log(data);

    if (data.includes("Healthy")) {
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").style.color = "red";
    }

    document.getElementById("dCard").style.display = "flex";
  } catch (err) {
    console.error("Error:", err);
  }

  document.getElementById("loaderImg").style.display = "none";
  document.getElementById("result").load();
}
