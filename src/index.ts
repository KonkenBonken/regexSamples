import tokenize from './tokenize';

export default function regexSamples(regex: RegExp) {
  const tokens = tokenize(regex);
  return tokens;
}

console.log(regexSamples(/abc.\d\D\w\W\s\S\n0\f\r\t\v /).map(x => [...x]))