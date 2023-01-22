import type Token from './Token';

export default function tokenize(regex: RegExp) {

  const str = regex.toString().slice(1, -1),
    tokens: Token[] = [];

  let bs = false;
  for (const char of str) {
    if (char === '\\') {
      bs = true;
      continue;
    }

    if (bs) {
      tokens.push({
        type: 'backslashed',
        value: char
      })
      bs = false;
    } else {
      tokens.push({
        type: 'char',
        value: char
      })
    }
  }

  return tokens;
}