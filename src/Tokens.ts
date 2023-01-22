type TokenTypes =
  'char' | 'whitespace' | 'newline';

export default abstract class Token {
  constructor(readonly type: TokenTypes, readonly value?: string) { }
}

export class CharToken extends Token {
  constructor(value: string) { super('char', value) }
}

export class WhiteSpaceToken extends Token {
  constructor() { super('whitespace') }
}

export class NewLineToken extends Token {
  constructor() { super('newline') }
}


export type BackSlashedToken = typeof WhiteSpaceToken | typeof NewLineToken