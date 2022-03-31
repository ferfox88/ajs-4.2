import sortingLife from '../app';

const can1 = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const can2 = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
describe('test sortingLife', () => {
  test('have all the same properties', () => {
    expect(sortingLife(can1)).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(sortingLife(can1)).not.toBe(can2);
  });
});
