import cows from 'cows';

const cowsList = cows();

const randomInt = max => Math.floor(Math.random() * Math.floor(max));

export const someFunc = something =>
  `
${something} is awesome!
${cowsList[randomInt(cowsList.length - 1)]}
  `;
