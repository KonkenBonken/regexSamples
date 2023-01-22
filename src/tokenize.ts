import samplesDict from './Tokens';

export default function tokenize(regex: RegExp) {

  const str = regex.toString().slice(1, -1),
    samples: string[] = [];

  let bs = false;

  for (const char of str) {
    if (char === '\\') {
      bs = true;
      continue;
    }

    if (bs && char in samplesDict) {
      samples.push(samplesDict[char as keyof typeof samplesDict])
    } else
      samples.push(char)

    bs = false;
  }

  return samples;
}