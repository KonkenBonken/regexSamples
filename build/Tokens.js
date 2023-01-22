"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitToken = exports.NewLineToken = exports.WhiteSpaceToken = exports.CharToken = exports.ValueToken = void 0;
class Token {
}
exports.default = Token;
class ValueToken extends Token {
    value;
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.ValueToken = ValueToken;
class CharToken extends ValueToken {
    type = 'char';
    *samples() {
        yield this.value;
    }
}
exports.CharToken = CharToken;
class WhiteSpaceToken extends Token {
    type = 'whitespace';
    *samples() {
        yield* ' \t\r\n\v\f';
    }
}
exports.WhiteSpaceToken = WhiteSpaceToken;
class NewLineToken extends Token {
    type = 'newline';
    *samples() {
        yield '\n';
    }
}
exports.NewLineToken = NewLineToken;
class DigitToken extends Token {
    type = 'digit';
    *samples() {
        yield* '0123456789';
    }
}
exports.DigitToken = DigitToken;
//# sourceMappingURL=Tokens.js.map