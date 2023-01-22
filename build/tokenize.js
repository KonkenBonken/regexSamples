"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("./Tokens");
const bsDict = {
    s: Tokens_1.WhiteSpaceToken,
    n: Tokens_1.NewLineToken,
    d: Tokens_1.NewLineToken,
};
function tokenize(regex) {
    const str = regex.toString().slice(1, -1), tokens = [];
    let bs = false;
    for (const char of str) {
        if (char === '\\') {
            bs = true;
            continue;
        }
        if (bs) {
            if (!(char in bsDict))
                throw 'unknown ConstToken: ' + char;
            tokens.push(new (bsDict[char]));
            bs = false;
        }
        else {
            tokens.push(new Tokens_1.CharToken(char));
        }
    }
    return tokens;
}
exports.default = tokenize;
//# sourceMappingURL=tokenize.js.map