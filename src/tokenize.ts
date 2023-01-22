import Token, { ConstToken, WhiteSpaceToken, NewLineToken, CharToken } from './Tokens';

const bsDict: Record<string, ConstToken> = {
  s: WhiteSpaceToken,
  n: NewLineToken
}

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
      tokens.push(new (bsDict[char])())
      bs = false;
    } else {
      tokens.push(new CharToken(char))
    }
  }

  return tokens;
}