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
    if (!backslash) {
      switch (char) {
        case '\\':
          backslash = true;
          continue;
        case ']':
          if (currentBracket) {
            samples.push(currentBracket.flat())
            currentBracket = null;
            continue;
          }
      }
      if (!currentBracket)
        switch (char) {
          case '[':
            currentBracket = [];
            continue;
          case '?':
            multipliers[array().length - 1] = '?'
            continue;
          case '+':
            multipliers[array().length - 1] = '+'
            continue;
        }
    }

    if (char === '.') {
      if (backslash)
        push(['.'])
      else
        push(samplesDict['.'])
    } else if (backslash) {
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