import { foo } from '../objects';
// jest.mock('../objects');
let mockedFoo = foo;
mockedFoo = jest.fn();

describe('Foo function ', () => {
  const person = {
    name: 'Tina',
    age: 21,
    date: Date(),
  };
  test('should ', () => {
    mockedFoo(person, 'date');
    expect(mockedFoo).toBeCalledTimes(1);
    expect(mockedFoo).toHaveBeenCalledWith(person, 'date');

    expect(foo(person, 'name')).toBe('Tina');
    expect(foo(person, 'name')).not.toBe('Boris');
    expect(foo(person, 'age')).toBe(21);

    mockedFoo(person, 'age');
    expect(mockedFoo).toBeCalledTimes(2);
  });
});
