"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = require("./Tokens");
function tokenize(regex) {
    const str = regex.toString().slice(1, -1), samples = [];
    let bs = false;
    for (const char of str) {
        if (char === '\\') {
            bs = true;
            continue;
        }
        if (bs && char in Tokens_1.samplesDict) {
            samples.push(Tokens_1.samplesDict[char]);
        }
        else if (char === '.')
            samples.push(Tokens_1.samplesDict['.']);
        else
            samples.push(char);
        bs = false;
    }
    return samples;
}
exports.default = tokenize;
//# sourceMappingURL=tokenize.js.map