export default abstract class Token {
    abstract readonly type: string;
    protected abstract readonly _samples: IterableIterator<string> | string;
    samples(): Generator<string, void, undefined>;
}
export declare abstract class ValueToken extends Token {
    readonly value: string;
    constructor(value: string);
}
export declare class CharToken extends ValueToken {
    readonly type = "char";
    readonly _samples: string;
}
export declare class WhiteSpaceToken extends Token {
    readonly type = "whitespace";
    readonly _samples = " \t\r\n\v\f";
}
export declare class NewLineToken extends Token {
    readonly type = "newline";
    readonly _samples = "\n";
}
export declare class DigitToken extends Token {
    readonly type = "digit";
    readonly _samples = "0123456789";
}
export type ConstToken = typeof WhiteSpaceToken | typeof NewLineToken | typeof DigitToken;
