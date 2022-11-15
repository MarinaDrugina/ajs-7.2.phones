import replaceExp from '../app.js';

test('correct rus number', () => {
  const result = replaceExp('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('correct non-rus number', () => {
  const result = replaceExp('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});
