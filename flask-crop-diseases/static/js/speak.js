var count = 0;
const speakInEnglish = () => {
  var text =
    "Please upload image of crop, preferably similar to example provided alongside then click CHECK DISEASE button to predict crop health status.";

  var utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0];
  speechSynthesis.speak(utterance);

  count = count + 1;

  if (count % 2 === 0) {
    speechSynthesis.cancel();
    utterance = new SpeechSynthesisUtterance("Stopped");
    speechSynthesis.speak(utterance);
  }
};

const speakInHindi = (text) => {
  var text =
    "कृपया फसल की छवि अपलोड करें, अधिमानतः साथ में दिए गए उदाहरण के समान, फिर फसल की स्वास्थ्य स्थिति का अनुमान लगाने के लिए रोग की जांच करें बटन पर क्लिक करें।";

  var utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "hi-IN";
  const voices = speechSynthesis.getVoices();

  const hindiVoice = voices.find((voice) => voice.lang === "hi-IN");
  if (hindiVoice) {
    utterance.voice = hindiVoice;
    speechSynthesis.speak(utterance);
  }

  count = count + 1;

  if (count % 2 === 0) {
    speechSynthesis.cancel();
    utterance = new SpeechSynthesisUtterance("Stopped");
    speechSynthesis.speak(utterance);
  }
};
