/*
****************************************************************
IMPORTANT
****************************************************************

I CAME UP WITH A BETTER IDEA FOR HOW TO IMPLEMENT THIS STUFF

basically, instead of having a bunch of parallel arrays and nested arrays for each i guess sort of 'context' item
  (so that would be, for example, get a list of direct object for specific prepositions) use like a getter function instead of using a bunch of arrays

  this way you could like modify common things that need them like "birthday party", for example, could be mad emuch more interesting by just adding "#th" to it, i.e. "just after your birthday party" -> "just after your 18th birthday party". better, right?

*/

const gerundsold = [
  "strutting",
  "jogging",
  "strolling",
  "driving",
  "floating",
  "speeding",
  "cruising",
  "racing",
  "traipsing",
  "coasting",
];

const drivingactions = [
  "speeding",
  "cruising",
  "coasting",
  "racing",
  "speeding",
  "driving",
];

const bodyactions = ["strutting", "jogging", "strolling", "traipsing"];

const actions = [...drivingactions, ...bodyactions];

const activities = [
  "reading",
  "painting",
  "studying",
  "filming",
  "working",
  "napping",
  "lying",
  "sobbing",
  "relaxing",
  "chilling",
  "just thinking about life",
  "taking pictures",
  "meditating",
];

const preps = ["in ", "through ", "down "];

const gerunds = [[...activities], bodyactions, drivingactions];

// todo: "a rain-soaked park bench",

const inaobjs = [
  "a field of roses",
  "an empty classroom",
  "an empty stadium",
  "a medieval castle",
  "an oasis",
  "comfortable silence",
  "the bathroom at a party",
];

const throughaobjs = [
  "a blooming garden",
  "an enchanted forest",
  "a field of roses",
  "an abandoned building",
  "a bustling city square",
  "an ancient stone temple",
  "a deluge of vibrant autumn leaves",
  "a forest of majestic oak trees",
  "delicate, blooming cherry blossoms",
  "a serene mountain trail",
];

const downtheobjs = [
  "the interstate",
  "the highway",
  "the freeway",
  "a white-sand beach",
  "a winding mountain road",
  "a bustling city street",
  "a picturesque countryside route",
  "an abandoned dirt track in the middle of nowhere",
  "a vibrant neon-lit boulevard",
  "a snow-covered mountain pass",
];

const dirobjs = [inaobjs, throughaobjs, downtheobjs];

const subjs = [
  "alone",
  "with your family",
  "with a group of friends",
  "amongst strangers",
  "with the love of your life",
  "with your best friends",
  "on a first date",
  "with coworkers",
];

// wanna add: implementation for "at", "at the height of", "around"

const timepreps = [
  "right before",
  "right after",
  "just before",
  "just after",
  "before",
  "after",
];

// wanna add: on vacation, on a holiday,

const times = [
  "sunset",
  "sunrise",
  "the brink of dusk",
  "the crack of dawn",
  "the stroke of noon",
  "the height of the afternoon",
  "3 am",
  "midnight",
  "lunch",
  "dinner",
  "a solar eclipse",
  "christmas",
  "work",
];

const generateSentence = () => {
  let sentence = "";
  const prep = Math.floor(Math.random() * preps.length);
  sentence += "you're ";
  sentence += subjs[Math.floor(Math.random() * subjs.length)] + " ";
  sentence +=
    // add gerund
    gerunds[prep][Math.floor(Math.random() * gerunds[prep].length)] + " ";
  // add preposition; space following is baked into the 'prefix' of DOs for easier correct plurality of a/an
  sentence += preps[prep] + "";
  // add direct object of preposition; space preceding baked into possibilities
  sentence +=
    dirobjs[prep][Math.floor(Math.random() * dirobjs[prep].length)] + " ";
  sentence += timepreps[Math.floor(Math.random() * timepreps.length)] + " ";
  sentence += times[Math.floor(Math.random() * times.length)] + " ";
  return sentence;
};

/*
const generateSentence = () => {
  let sentence = "";
  prep = Math.floor(Math.random() * preps.length);
  sentence += "you're ";
  sentence += gerunds[Math.floor(Math.random() * gerunds.length)] + " ";
  sentence += preps[prep] + " ";
  sentence +=
    dirobjs[prep][Math.floor(Math.random() * dirobjs[prep].length)] + " ";
  sentence += timepreps[Math.floor(Math.random() * timepreps.length)] + " ";
  sentence += times[Math.floor(Math.random() * times.length)] + " ";
  return sentence;
};
*/

export default generateSentence;
