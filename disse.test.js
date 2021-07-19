const disse = require ('./disse.js')

test('Testing example1 file. Should output:\n[cat sees me]\n[mary likes trees]', done => {
  function callback(data) {
    try {
      expect(data).toBe('[cat sees me]\n[mary likes trees]');
      done();
    } catch(error) {
      done(error);
    }
  }

  disse.returnSearch('example1', callback);
});