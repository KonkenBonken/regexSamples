import { samplesDict } from './dictionary';

export default function tokenize(regex: RegExp) {

  let backslash = false,
    currentBracket: string[][] | null = null;

  const str = regex.toString().slice(1, -1),
    multipliers: Record<number, '+' | '?'> = {},
    samples: string[][] = [],
    array = () => currentBracket || samples,
    push = (s: string[]) => array().push(s);

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
      case '?':
        multipliers[array().length - 1] = '?'
        continue;
      case '+':
        multipliers[array().length - 1] = '+'
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

  return [samples, multipliers] as const;
}