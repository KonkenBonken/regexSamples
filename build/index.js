"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenize_1 = __importDefault(require("./tokenize"));
function regexSamples(regex) {
    const tokens = (0, tokenize_1.default)(regex);
    return tokens;
}
exports.default = regexSamples;
console.log(regexSamples(/abc.\d\D\w\W\s\S\n /).map(x => [...x]));
//# sourceMappingURL=index.js.map