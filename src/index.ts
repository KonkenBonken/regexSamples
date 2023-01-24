import tokenize from './tokenize';
import { defaultOptions } from './options';

const { floor, ceil, round, random } = Math;

export function regexSamples(regex: RegExp): Generator<string, void, unknown>
export function regexSamples(regex: RegExp, optionsOverride: Partial<typeof defaultOptions>): Generator<string, void, unknown>
export function* regexSamples(regex: RegExp, _optionsOverride?: Partial<typeof defaultOptions>) {
  const options = { ...defaultOptions, ..._optionsOverride },
    [samples, multipliers] = tokenize(regex);

  let { resultCount: count, maxCountPlus } = options;

  while (count--) {
    let str = '';
    for (let i = 0; i < samples.length; i++) {
      const sample = samples[i],
        multiplier = multipliers[i];
      let count = 1;
      if (multiplier === '?')
        count = round(random());
      if (multiplier === '+')
        count = ceil(random() * maxCountPlus);

      for (let j = 0; j < count; j++)
        str += sample[floor(random() * sample.length)];
    }

    yield str;
  }
}