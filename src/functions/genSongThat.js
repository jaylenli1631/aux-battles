import generateSentenceCreator from "./generateSentenceStemTemplate.js";

const cores = ["for", "that", "from"];

const getSentenceCore = () => {
  return cores[Math.floor(Math.random() * cores.length)];
};

const getDirObj = (core) => {
  let part = "";
  const choices = [];
  switch (core) {
    case "by":
      part += "an artist ";
      choices.push(
        ...[
          "with less than " +
            (250000 + Math.floor(Math.random() * 15) * 50000) +
            " monthly listeners",
          "who is now deceased",
          "before they were famous",
        ]
      );
      break;
    case "for":
      break;
    case "that":
      break;
  }
};

const getDirObjModifier = (dirObj) => {};

const getNotAbout = (core) => {
  let part = "";

  const commonChoices = ["love"];
  const choices = [
    ...commonChoices,
    "growing up",
    "falling in love",
    "heartbreak",
    "something political",
    "a place",
    "childhood",
  ];

  if (Math.floor(Math.random() * 2) == 0) {
    part = "not about " + commonChoices[Math.random() * commonChoices.length];
  } else {
    part = "about " + choices[Math.random() * choices.length];
  }
};

const getGenericPartArray = [];

const genSongThat = () => {
  const starter = "a song ";
  const end = "";

  return generateSentenceCreator({
    sentenceStarter: starter,
    sentenceEnd: end,
    getSentenceCore: getSentenceCore,
    getGenericPartArray: getGenericPartArray,
  });
};

export default genSongThat;
