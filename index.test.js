const { addTwo, add, addUser } = require('./index');

test('Should add 2', () => {
  expect(addTwo(2)).toBe(4);
});

test('Should add numbers', () => {
  expect(add(40)(2)).toBe(42);
});

test('Should add a new user', () => {
  expect(addUser('Jill', 'jill@test.com').length).toBe(2);
  expect(addUser('Jill', 'jill@test.com')).toEqual([
    {
      id: 1,
      name: 'John',
      email: 'john@test.com',
    },
    {
      id: 2,
      name: 'Jill',
      email: 'jill@test.com',
    },
  ]);
});
