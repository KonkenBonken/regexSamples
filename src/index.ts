import tokenize from './tokenize';

const { floor, random } = Math;

export function* regexSamples(regex: RegExp, count = 10) {
  const tokens = tokenize(regex);

  while (count--) {
    yield tokens.map((sample, i) =>
      sample[floor(random() * sample.length)]
    ).join('');
  }
}