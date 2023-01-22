"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLineToken = exports.WhiteSpaceToken = exports.CharToken = void 0;
class Token {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
exports.default = Token;
class CharToken extends Token {
    constructor(value) { super('char', value); }
}
exports.CharToken = CharToken;
class WhiteSpaceToken extends Token {
    constructor() { super('whitespace'); }
}
exports.WhiteSpaceToken = WhiteSpaceToken;
class NewLineToken extends Token {
    constructor() { super('newline'); }
}
exports.NewLineToken = NewLineToken;
//# sourceMappingURL=Tokens.js.map