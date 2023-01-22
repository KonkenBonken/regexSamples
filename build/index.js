"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenize_1 = __importDefault(require("./tokenize"));
const { floor, random } = Math;
function* regexSamples(regex, count = 10) {
    const tokens = (0, tokenize_1.default)(regex);
    while (count--) {
        yield tokens.map((sample, i) => sample[floor(random() * sample.length)]).join('');
    }
}
exports.default = regexSamples;
console.log([...regexSamples(/w\w\w\w:d\d\d\d:D\D\D\D:W\W\W\W:...:s\s\s\s:S\S\S\S/)]);
//# sourceMappingURL=index.js.map