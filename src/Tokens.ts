export default abstract class Token {
  abstract readonly type: string;

  protected abstract readonly _samples: IterableIterator<string> | string;

  *samples() { yield* this._samples }
}

export abstract class ValueToken extends Token {
  constructor(readonly value: string) { super(); }
}


export class CharToken extends ValueToken {
  readonly type = 'char';
  readonly _samples = this.value;
}

export class WhiteSpaceToken extends Token {
  readonly type = 'whitespace';
  readonly _samples = ' \t\r\n\v\f';
}

export class NewLineToken extends Token {
  readonly type = 'newline';
  readonly _samples = '\n';
}

export class DigitToken extends Token {
  readonly type = 'digit';
  readonly _samples = '0123456789';
}

export type ConstToken = typeof WhiteSpaceToken | typeof NewLineToken | typeof DigitToken;