"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tokenize(regex) {
    const str = regex.toString().slice(1, -1), tokens = [];
    let bs = false;
    for (const char of str) {
        if (char === '\\') {
            bs = true;
            continue;
        }
        if (bs) {
            tokens.push({
                type: 'backslashed',
                value: char
            });
            bs = false;
        }
        else {
            tokens.push({
                type: 'char',
                value: char
            });
        }
    }
    return tokens;
}
exports.default = tokenize;
//# sourceMappingURL=tokenize.js.map