import tokenize from './tokenize';

export default function regexSamples(regex: RegExp) {
  const tokens = tokenize(regex);
  return tokens;
}

console.log(regexSamples(/abc.\d\D\w\W\s\S\n\0\f\r\t\v /))