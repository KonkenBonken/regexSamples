export default abstract class Token {
  abstract readonly type: string;

  abstract samples(): IterableIterator<string>
}

export abstract class ValueToken extends Token {
  constructor(readonly value: string) { super(); }
}

export class CharToken extends ValueToken {
  readonly type = 'char';

  *samples() {
    yield this.value;
  }
}

export class WhiteSpaceToken extends Token {
  readonly type = 'whitespace';

  *samples() {
    yield ' ';
    yield '\t';
    yield '\r';
    yield '\n';
    yield '\v';
    yield '\f' as const;
  }
}

export class NewLineToken extends Token {
  readonly type = 'newline';

  *samples() {
    yield '\n' as const;
  }
}

export class DigitToken extends Token {
  readonly type = 'digit';

  *samples() {
    for (let n = 0; n < 10; n++)
      yield n.toString();
  }
}

export type ConstToken = typeof WhiteSpaceToken | typeof NewLineToken | typeof DigitToken;