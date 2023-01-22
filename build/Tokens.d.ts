type TokenTypes = 'char' | 'whitespace' | 'newline';
export default abstract class Token {
    readonly type: TokenTypes;
    readonly value?: string | undefined;
    constructor(type: TokenTypes, value?: string | undefined);
}
export declare class CharToken extends Token {
    constructor(value: string);
}
export declare class WhiteSpaceToken extends Token {
    constructor();
}
export declare class NewLineToken extends Token {
    constructor();
}
export type BackSlashedToken = typeof WhiteSpaceToken | typeof NewLineToken;
export {};
