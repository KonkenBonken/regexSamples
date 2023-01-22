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
    value;
    constructor(value) {
        super('char');
        this.value = value;
    }
    *samples() {
        yield this.value;
    }
}
exports.CharToken = CharToken;
class WhiteSpaceToken extends Token {
    constructor() { super('whitespace'); }
    *samples() {
        yield ' ';
        yield '\t';
        yield '\r';
        yield '\n';
        yield '\v';
        yield '\f';
    }
}
exports.WhiteSpaceToken = WhiteSpaceToken;
class NewLineToken extends Token {
    constructor() { super('newline'); }
    *samples() {
        yield '\n';
    }
}
exports.NewLineToken = NewLineToken;
//# sourceMappingURL=Tokens.js.map