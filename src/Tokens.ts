const az = 'abcdefghijklmnopqrstuvwxyz';

function* all(...exclude: string[]) {
  for (let i = 0; i <= 0xFFFF; i++)
    if (exclude.includes(String.fromCharCode(i)))
      continue
    else
      yield String.fromCharCode(i);
}

export const samplesDict = {
  '.': all(),
  d: '0123456789',
  get w() { return az + az.toUpperCase() + this.d + '_' },
  get W() { return all(this.w as string) },
  s: ' \t\r\n\v\f',
  n: '\n',
} as Record<string, string | ReturnType<typeof all>>