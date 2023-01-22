"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens_1 = __importDefault(require("./Tokens"));
function tokenize(regex) {
    const str = regex.toString().slice(1, -1), samples = [];
    let bs = false;
    for (const char of str) {
        if (char === '\\') {
            bs = true;
            continue;
        }
        if (bs && char in Tokens_1.default) {
            samples.push(Tokens_1.default[char]);
        }
        else
            samples.push(char);
        bs = false;
    }
    return samples;
}
exports.default = tokenize;
//# sourceMappingURL=tokenize.js.map