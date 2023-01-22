import tokenize from './tokenize';

export default function regexSamples(regex: RegExp) {
  const tokens = tokenize(regex);
  return tokens;
}

console.log(regexSamples(/abc\w/))