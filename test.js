const { regexSamples } = require('./build/index.js')

console.log([
  ...regexSamples(/abcd:w\w\w\w:d\d\d\d:D\D\D\D:W\W\W\W:...:s\s\s\s:S\S\S\S/),
])

console.log([...regexSamples(/\d\d:\d\d/, 50)])

console.log([...regexSamples(/[abcd]\d/)])
console.log([...regexSamples(/[\d\w\s]/)])
