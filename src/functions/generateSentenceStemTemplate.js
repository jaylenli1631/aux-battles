import randomize from "./randomize";

const generateSentenceCreator = ({
  sentenceStarter = "GENERIC_START",
  sentenceEnd = "GENERIC_END",
  getSentenceCore,
  getGenericPartArray,
}) => {
  let sentence = "";

  const core = getSentenceCore();

  let partArray = [];

  getGenericPartArray.forEach((getGenericPart) => {
    const genPart = getGenericPart(core);
    // console.log(genPart);
    // partArray.push(genPart);
    genPart ? partArray.push(genPart) : null;
  });

  partArray = [core, ...partArray];

  randomize(partArray);

  partArray.unshift(sentenceStarter);

  partArray.push(sentenceEnd);

  //   sentence += sentenceStarter; commented to test array prepending

  sentence = partArray.join(" ");

  sentence = sentence.replace(/\s+/g, " ").trim();

  return sentence;
};

export default generateSentenceCreator;
