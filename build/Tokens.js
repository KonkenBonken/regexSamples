"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const az = 'abcdefghijklmnopqrstuvwxyz';
function* all(exclude = []) {
    for (let i = 0; i <= 0xFFFF; i++)
        if (exclude.includes(String.fromCharCode(i)))
            continue;
        else
            yield String.fromCharCode(i);
}
exports.default = new (class samplesDict {
    d = '0123456789';
    w = az + az.toUpperCase() + this.d + '_';
    W = all(this.w);
    s = ' \t\r\n\v\f';
    n = '\n';
})();
//# sourceMappingURL=Tokens.js.map