import tokenize from './tokenize';

const { floor, ceil, round, random } = Math;

export function* regexSamples(regex: RegExp, count = 10) {
  const [samples, multipliers] = tokenize(regex);

  while (count--) {
    let str = '';
    for (let i = 0; i < samples.length; i++) {
      const sample = samples[i],
        multiplier = multipliers[i];
      let count = 1;
      if (multiplier === '?')
        count = round(random());
      if (multiplier === '+')
        count = ceil(random() * 10);

      for (let j = 0; j < count; j++)
        str += sample[floor(random() * sample.length)];
    }

    yield str;
  }
}