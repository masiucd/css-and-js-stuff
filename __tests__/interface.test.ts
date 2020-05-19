/* eslint-disable import/no-unresolved */
import { mike, Person } from '../interface';

describe('Person is correct', () => {
  test('should return correct value', () => {
    expect(mike).toEqual({
      name: 'Mike',
      age: 22,
      cool: true,
      friends: ['Tina', 'Stina', 'Boris'],
    });
  });
});
