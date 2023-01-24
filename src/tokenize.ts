import { samplesDict } from './dictionary';

export default function tokenize(regex: RegExp) {

  let backslash = false,
    currentBracket: string[][] | null = null;

  const str = regex.toString().slice(1, -1),
    samples: string[][] = [],
    push = (s: string[]) => (currentBracket || samples).push(s);

  for (const char of str) {
    switch (char) {
      case '\\':
        backslash = true;
        continue;
      case '[':
        currentBracket = [];
        continue;
      case ']':
        samples.push((currentBracket as string[][]).flat())
        currentBracket = null;
        continue;
      case '.':
        push(samplesDict['.'])
        continue;
    }

    if (backslash) {
      if (char in samplesDict)
        push(samplesDict[char])
      else
        push(eval(`"\\${char}"`))
    }
    else
      push([char])

    backslash = false;
  }

  return samples;
}