const az = 'abcdefghijklmnopqrstuvwxyz',
  all: string[] = [];

for (let i = 32; i <= 126; i++)
  all.push(String.fromCharCode(i));

const rawDict = {
  '.': all,
  d: '0123456789',
  get D() { return all.filter(c => !this.d.includes(c)) },
  get w() { return az + az.toUpperCase() + this.d + '_' },
  get W() { return all.filter(c => !this.w.includes(c)) },
  s: ' \t\r\n\v\f',
  get S() { return all.filter(c => !this.s.includes(c)) },
  // b:,
  // B:,
} as Record<string, string | string[]>


export const samplesDict: Record<string, string[]> = {};

for (const key in rawDict)
  samplesDict[key] = [...rawDict[key]];
