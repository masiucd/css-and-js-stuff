import { ActionChar } from '../classes';

const spiderMan = new ActionChar('spiderMan', 100, 50, 21, 1000);

describe('testng classes', () => {
  test('spiderman should have correct values', () => {
    expect(spiderMan.alias).toBe('spiderMan');
    expect(spiderMan.health).toBe(100);
    expect(spiderMan.health).toBeGreaterThan(1);
    expect(spiderMan.stamina).toBeGreaterThan(1);
    expect(spiderMan.strength).toBeGreaterThan(1);
  });
});
