import generateSentenceCreator from "./generateSentenceStemTemplate.js";

const getSentenceCore = () => {
  const cores = ["__CORE__", "__CORE2__", "__CORE3__"];

  return cores[Math.floor(Math.random() * cores.length)];
};

const getGenericPartArray = [
  (core) => {
    let part = "";
    if (core == "__CORE__") {
      part = "PART__ONE__A";
    } else if (core == "__CORE2__") {
      part = "PART__ONE__B";
    } else {
      part = "PART__ONE__C";
    }
    return part;
  },
  (core) => {
    return "PART__TWO";
  },
  (core) => {
    return "PART__THREE";
  },
  (core) => {
    return "PART__FOUR";
  },
];

const generateSentenceTest = () => {
  const starter = "START__SENTENCE";
  const end = "END__SENTENCE";

  return generateSentenceCreator({
    sentenceStarter: starter,
    sentenceEnd: end,
    getSentenceCore: getSentenceCore,
    getGenericPartArray: getGenericPartArray,
  });
};

export default generateSentenceTest;
