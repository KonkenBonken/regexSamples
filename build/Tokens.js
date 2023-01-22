"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.samplesDict = void 0;
const az = 'abcdefghijklmnopqrstuvwxyz';
function* all(...exclude) {
    for (let i = 0; i <= 0xFFFF; i++)
        if (exclude.includes(String.fromCharCode(i)))
            continue;
        else
            yield String.fromCharCode(i);
}
exports.samplesDict = {
    '.': all(),
    d: '0123456789',
    get D() { return all(...this.d); },
    get w() { return az + az.toUpperCase() + this.d + '_'; },
    get W() { return all(...this.w); },
    s: ' \t\r\n\v\f',
    get S() { return all(...this.s); },
    n: '\n',
};
//# sourceMappingURL=Tokens.js.map