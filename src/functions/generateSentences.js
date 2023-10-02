import randomize from "./randomize";

const subjs = [
  "alone",
  "with your family",
  "with a group of friends",
  "amongst strangers",
  "with the love of your life",
  "with your best friends",
  "on a first date",
  "with coworkers",
  "being the main character",
];

const verbs = [
  "speeding",
  "cruising",
  "coasting",
  "racing",
  "speeding",
  "driving",
  // "strutting",
  "jogging",
  "strolling",
  // "traipsing",
  "reading",
  "painting",
  "having a picnic",
  "studying",
  // "working",
  "napping",
  "lying down",
  "sobbing",
  "crying",
  "relaxing",
  "chilling",
  "just thinking about life",
  "taking pictures",
  // "meditating",
  "hanging out",
];

const getSubj = () => {
  return subjs[Math.floor(Math.random() * subjs.length)];
};

const getVerb = () => {
  return verbs[Math.floor(Math.random() * verbs.length)];
};

const getPrep = (verb) => {
  const choices = [];

  // check would "through" work
  [
    "walking",
    "strutting",
    "jogging",
    "strolling",
    "traipsing",
    "running",
  ].includes(verb)
    ? choices.push("through")
    : null;

  // check would "in" work
  [
    "reading",
    "painting",
    "having a picnic",
    "studying",

    "working",
    "napping",
    "lying down",
    "sobbing",
    "crying",
    "relaxing",
    "chilling",
    "just thinking about life",
    "taking pictures",
    "walking",
    "jogging",
    "strolling",
    "running",
    "hanging out",
  ].includes(verb)
    ? choices.push("in")
    : null;

  // check would "down" work
  [
    "speeding",
    "cruising",
    "coasting",
    "racing",
    "speeding",
    "driving",
  ].includes(verb)
    ? choices.push("down")
    : null;

  return choices[Math.floor(Math.random() * choices.length)];
};

// [].includes(item) ? choices.push("") : null;

const getDirObj = (verb) => {
  const choices = [];

  // check, would driving locations work?
  [
    "speeding",
    "cruising",
    "coasting",
    "racing",
    "speeding",
    "driving",
  ].includes(verb)
    ? choices.push(
        ...[
          "the interstate",
          "the highway",
          "the freeway",
          "a beach",
          "a mountain road",
          "a city street",
          "a countryside route",
          "a dirt track",
          "a boulevard",
          "a mountain pass",
        ]
      )
    : null;

  [
    "jogging",
    "running",
    "walking",
    "strutting",
    "strolling",
    "traipsing",
  ].includes(verb)
    ? choices.push(...["a city square", "a mountain trail"])
    : null;

  ["walking", "strutting", "strolling", "traipsing"].includes(verb)
    ? choices.push(
        ...[
          "a garden",
          "a field of roses",
          "an abandoned building",
          "a stone temple",
          "a deluge of vibrant autumn leaves",
          "a forest",
          "a park",
        ]
      )
    : null;

  [
    "reading",
    "painting",
    "having a picnic",
    "studying",

    "working",
    "napping",
    "lying down",
    "sobbing",
    "crying",
    "relaxing",
    "chilling",
    "just thinking about life",
    "taking pictures",
    "meditating",
    "hanging out",
    "taking pictures",
  ].includes(verb)
    ? choices.push(
        ...[
          "a field of roses",
          "the shade of an oak tree",
          "an empty classroom",
          "an empty stadium",
          "a castle",
          "an oasis",
          "a park",
        ]
      )
    : null;

  return choices[Math.floor(Math.random() * choices.length)];
  // [].includes(item) ? choices.push(...[]) : null;
};

const getTime = (dirObj) => {
  // [].includes(item) ? choices.push("") : null;

  const choices = [];

  [
    "a field of roses",
    "the shade of an oak tree",
    "an oasis",
    "a garden",
    "a forest",
    "a stone temple",
    "a countryside route",
    "a mountain pass",
    "a mountain trail",
    "the freeway",
    "a beach",
    "an empty classroom",
    "an empty stadium",
    "a park",
  ].includes(dirObj)
    ? choices.push(...["sunrise", "dawn", "6 am"])
    : null;

  [
    "a field of roses",
    "the shade of an oak tree",
    "an empty stadium",
    "an oasis",
    "a garden",
    "a stone temple",
    "a deluge of vibrant autumn leaves",
    "a forest",
    "a countryside route",
    "a mountain pass",
    "a boulevard",
    "a mountain trail",
    "the highway",
    "a mountain road",
    "a dirt track",
    "a park",
  ].includes(dirObj)
    ? choices.push(...["sunset", "dusk", "dinner", "work", "school"])
    : null;

  ["a city square", "a city street", "a beach"].includes(dirObj)
    ? choices.push(...["noon", "lunch", "afternoon", "12 pm"])
    : null;

  [
    "an empty classroom",
    "an empty stadium",
    "a castle",
    "an abandoned building",
    "a stone temple",
    "a forest",
    "a mountain pass",
    "a boulevard",
    "the interstate",
    "the highway",
    "the freeway",
    "an empty classroom",
    "an empty stadium",
  ].includes(dirObj)
    ? choices.push(...["midnight", "3 am", "early-early morning"])
    : null;

  return choices[Math.floor(Math.random() * choices.length)];
};

/*

  "sunset",
  "sunrise",
  dusk",
  dawn",
  noon",
afternoon",
  "3 am",
  "midnight",
  "lunch",
  "dinner",
  "a solar eclipse",
  "christmas",
  "work",

  */

const getTimePrep = (time) => {
  const choices = [];

  ["dawn", "lunch", "dinner"].includes(time)
    ? choices.push(...["before"])
    : null;

  ["dusk", "midnight", "lunch", "dinner", "work"].includes(time)
    ? choices.push(...["after"])
    : null;

  [
    "sunset",
    "sunrise",
    "noon",
    "midnight",
    "lunch",
    "dinner",
    "christmas",
  ].includes(time)
    ? choices.push(...["just before"])
    : null;

  [
    "sunset",
    "sunrise",
    "noon",
    "midnight",
    "lunch",
    "dinner",
    "christmas",
  ].includes(time)
    ? choices.push(...["right before"])
    : null;

  [
    "sunset",
    "sunrise",
    "midnight",
    "lunch",
    "dinner",
    "a solar eclipse",
    "christmas",
    "work",
    "school",
  ].includes(time)
    ? choices.push(...["right after"])
    : null;

  [
    "sunset",
    "sunrise",
    "midnight",
    "lunch",
    "dinner",
    "a solar eclipse",
    "christmas",
    "work",
    "school",
  ].includes(time)
    ? choices.push(...["just after"])
    : null;

  ["3 am", "6 am", "12 pm", "dawn", "dusk"].includes(time)
    ? choices.push(...["at"])
    : null;

  ["afternoon", "early-early morning"].includes(time)
    ? choices.push(...["in the"])
    : null;

  return choices[Math.floor(Math.random() * choices.length)];
  // [""].includes(time) ? choices.push(...[]) : null;
};

const generateSentence = () => {
  let sentence = "";
  let sentenceArr = [];

  const subjs = Math.random() <= 0.75 ? getSubj() : "";
  // const subjs = Math.random() <= 1.0 ? getSubj() : ""; // ***use for debugging***

  const verb = getVerb();

  const prep = Math.random() <= 0.95 ? getPrep(verb) : "";
  // const prep = Math.random() <= 1.0 ? getPrep(verb) : ""; // ***use for debugging***

  const dirobj = prep != "" ? getDirObj(verb) : "";

  const time = dirobj != "" && Math.random() <= 0.65 ? getTime(dirobj) : "";
  // const time = dirobj != "" && Math.random() <= 1.0 ? getTime(dirobj) : ""; // ***use for debugging***

  const timePrep = time != "" ? getTimePrep(time) : "";

  sentenceArr = [subjs, verb + " " + prep + " " + dirobj];

  randomize(sentenceArr);

  sentenceArr.push(timePrep + " " + time);

  sentence += "you're ";

  sentence += sentenceArr.join(" ");

  sentence = sentence.replace(/\s+/g, " ").trim();

  return sentence;
};

export default generateSentence;
