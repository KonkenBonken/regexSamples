export default abstract class Token {
  abstract readonly type: string;

  abstract samples(): Generator<string, void, unknown>
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
    yield* ' \t\r\n\v\f';
  }
}

export class NewLineToken extends Token {
  readonly type = 'newline';

  *samples() {
    yield '\n';
  }
}

export class DigitToken extends Token {
  readonly type = 'digit';

  *samples() {
    yield* '0123456789';
  }
}

export type ConstToken = typeof WhiteSpaceToken | typeof NewLineToken | typeof DigitToken;