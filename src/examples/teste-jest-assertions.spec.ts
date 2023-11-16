describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeCloseTo(10);

    expect(number).toHaveProperty('toString');
  });
});
describe('Primitive values', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Pedro', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
  });
});
