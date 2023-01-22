export default abstract class Token {
    abstract readonly type: string;
    abstract samples(): Generator<string, void, unknown>;
}
export declare abstract class ValueToken extends Token {
    readonly value: string;
    constructor(value: string);
}
export declare class CharToken extends ValueToken {
    readonly type = "char";
    samples(): Generator<string, void, unknown>;
}
export declare class WhiteSpaceToken extends Token {
    readonly type = "whitespace";
    samples(): Generator<string, void, undefined>;
}
export declare class NewLineToken extends Token {
    readonly type = "newline";
    samples(): Generator<string, void, unknown>;
}
export declare class DigitToken extends Token {
    readonly type = "digit";
    samples(): Generator<string, void, undefined>;
}
export type ConstToken = typeof WhiteSpaceToken | typeof NewLineToken | typeof DigitToken;
