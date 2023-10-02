import generateSentenceCreator from "./generateSentenceStemTemplate.js";

const getListeners = (todo) => {
  let listeners = -1;
  if (todo == 0) {
    listeners = 250000 + 50000 * Math.floor(Math.random() * 15);
  } else {
    listeners = 10000000 + 5000000 * Math.floor(Math.random() * 15);
  }

  return listeners.toLocaleString("en-US");
};

const getStarter = (core) => {
  let part = "";

  let core2 = "with less than ";
  if (core2.includes("with more than ")) {
    part = "an unknown song by an artist ";
  } else if (core2.includes("with less than ")) {
    part = "by an artist ";
  } else {
    part = "by an artist ";
  }

  return part;
};

const getSentenceCore = () => {
  const cores = [
    "with less than " + getListeners(0) + " monthly listeners",
    "with more than " + getListeners(1) + " monthly listeners",
    "who is " + getDirObj("who is "),
    "who is " + getDirObj("who is "),
    "who is " + getDirObj("who is "),
    "who is " + getDirObj("who is "),
  ];

  return cores[Math.floor(Math.random() * cores.length)];
  // return "with less than " + getListeners(0) + " monthly listeners";
};

const getDirObj = (core) => {
  let part = "";
  const choices = [];
  if (core.includes("who is ")) {
    if (Math.floor(Math.random() * 10) == 1) {
      part += "not ";
      choices.push(...["white", "american"]);
    } else {
      choices.push(
        ...[
          "asian",
          "african",
          "australian",
          "ESL",
          "now deceased",
          "over 40",
          "under 20",
        ]
      );
    }
  }

  part += choices[Math.floor(Math.random() * choices.length)];

  return part;
};

const getGenericPartArray = [(core) => ""];

const genSongArtist = () => {
  const starter = getStarter();
  const end = "";

  return generateSentenceCreator({
    sentenceStarter: starter,
    sentenceEnd: end,
    getSentenceCore: getSentenceCore,
    getGenericPartArray: getGenericPartArray,
  });
};

export default genSongArtist;
