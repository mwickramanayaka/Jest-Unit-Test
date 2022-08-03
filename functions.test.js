const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test('User should be Brad Pitt Object ', () => {
    expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName:'Pitt'
    });
});

//Less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//RegEx
test('There is no H in manul', () => {
//    expect('manul').not.toMatch(/H/);//case insensitive
    expect('manul').not.toMatch(/H/h);//case sensitive
});