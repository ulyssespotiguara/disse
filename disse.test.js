const disse = require('./disse.js');

test('Testing example1 file. Should output two lines: [cat sees me] and [mary likes trees]', () => {
  expect("disse example 1").toBe('[cat sees me] and [mary likes trees]');
});
