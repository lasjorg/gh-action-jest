const addTwo = (num) => {
  return num + 4;
};

const add = (num1) => {
  return (num2) => num1 + num2;
};

const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@test.com',
  },
];

const addUser = (name, email) => {
  return [...users, { id: 2, name, email }];
};

module.exports = { addTwo, add, addUser };
