const form = document.getElementById("imgForm");
const avoidReload = (e) => {
  e.preventDefault();
};
form.addEventListener("submit", avoidReload);

var imageIndex = 0;

const changePreviewImage = () => {
  var allPreviewImages = [
    "../static/assets/leaf/dataset/banana/banana_healthy.jpg",
    "../static/assets/leaf/dataset/banana/banana_black_sigatoka.jpg",
    "../static/assets/leaf/dataset/banana/banana_bract_mosaic_virus.jpg",
    "../static/assets/leaf/dataset/banana/banana_moko.jpg",
    "../static/assets/leaf/dataset/banana/banana_panama.jpg",
    "../static/assets/leaf/dataset/banana/banana_yellow_sigatoka.jpg",
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
    res = await fetch("/leaf/banana", {
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

var count = 0;
const speak = (descId) => {
  var text = document.querySelector(`.${descId}`).textContent;

  var utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];
  speechSynthesis.speak(utterance);

  speakInHindi(text);

  count = count + 1;
  console.log(count);

  if (count % 2 === 0) {
    speechSynthesis.cancel();
    utterance = new SpeechSynthesisUtterance("Stopped");
    speechSynthesis.speak(utterance);
  }
};

const speakInHindi = (text) => {
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "hi-IN";
  const voices = speechSynthesis.getVoices();
  const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
  if (hindiVoice) {
    utterance.voice = hindiVoice;
    speechSynthesis.speak(utterance);
  }
};
