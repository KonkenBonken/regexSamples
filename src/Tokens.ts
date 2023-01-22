type TokenTypes =
  'char' | 'whitespace' | 'newline';

export default abstract class Token {
  constructor(readonly type: TokenTypes, readonly value?: string) { }

  abstract samples(): IterableIterator<string>
}

export class CharToken extends Token {
  constructor(readonly value: string) { super('char') }

  *samples() {
    yield this.value;
  }
}

export class WhiteSpaceToken extends Token {
  constructor() { super('whitespace') }

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
  constructor() { super('newline') }

  *samples() {
    yield '\n' as const;
  }
}

export type BackSlashedToken = typeof WhiteSpaceToken | typeof NewLineToken