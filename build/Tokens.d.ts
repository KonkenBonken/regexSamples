type TokenTypes = 'char' | 'whitespace' | 'newline';
export default abstract class Token {
    readonly type: TokenTypes;
    readonly value?: string | undefined;
    constructor(type: TokenTypes, value?: string | undefined);
    abstract samples(): IterableIterator<string>;
}
export declare class CharToken extends Token {
    readonly value: string;
    constructor(value: string);
    samples(): Generator<string, void, unknown>;
}
export declare class WhiteSpaceToken extends Token {
    constructor();
    samples(): Generator<" " | "\t" | "\r" | "\n" | "\v" | "\f", void, unknown>;
}
export declare class NewLineToken extends Token {
    constructor();
    samples(): Generator<"\n", void, unknown>;
}
export type BackSlashedToken = typeof WhiteSpaceToken | typeof NewLineToken;
export {};
