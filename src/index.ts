import tokenize from './tokenize';

const { floor, random } = Math;

export default function* regexSamples(regex: RegExp, count = 10) {
  const tokens = tokenize(regex);

  while (count--) {
    yield tokens.map((sample, i) =>
      sample[floor(random() * sample.length)]
    ).join('');
  }
}

console.log([...regexSamples(/abcd:w\w\w\w:d\d\d\d:D\D\D\D:W\W\W\W:...:s\s\s\s:S\S\S\S/)])