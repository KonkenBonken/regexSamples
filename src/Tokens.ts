const az = 'abcdefghijklmnopqrstuvwxyz';

function* all(exclude: string[] | string = []) {
  for (let i = 0; i <= 0xFFFF; i++)
    if (exclude.includes(String.fromCharCode(i)))
      continue
    else
      yield String.fromCharCode(i);
}

export default new (class samplesDict {
  readonly d = '0123456789'
  readonly w = az + az.toUpperCase() + this.d + '_'
  readonly W = all(this.w)
  readonly s = ' \t\r\n\v\f'
  readonly n = '\n'
})()