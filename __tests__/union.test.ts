import { meterToUnit, Unit } from '../union_type';

describe('testing union types with TS', () => {
  test('meterTounit', () => {
    expect(meterToUnit(2, 'KM')).toEqual(0.002);
    expect(meterToUnit(2, 'KM')).not.toEqual(21.002);
  });
});
