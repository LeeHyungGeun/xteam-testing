import checkRange from '../src/validation/checkRange';

describe('checkRange', () => {
    it('X-Team 1 to 6 to true => ', () => {
        const value = 'X-team';
        const result = checkRange(value, 1, 6);
        expect(result).toBe(true);
    });
    it('LeeHyungGeun 2 to 20 to true => ', () => {
        const value = 'LeeHyungGeun';
        const result = checkRange(value, 2, 20);
        expect(result).toBe(true);
    });
    it('abcdefghijklmnopqrstuvXz 2 to 20 to true => ', () => {
        const value = 'abcdefghijklmnopqrstuvXz';
        const result = checkRange(value, 2, 20);
        expect(result).toBe(false);
    });
    it(`'' 2 to 20 to false => `, () => {
        const value = '';
        const result = checkRange(value, 2, 20);
        expect(result).toBe(false);
    });
    it(`'  ' 2 to 20 to true => `, () => {
        const value = '  ';
        const result = checkRange(value, 2, 20);
        expect(result).toBe(true);
    });
});

/**
 * Spec of checkRange
 * it can be checked the value whether between min to max, or not.
 * for example: checkRange('abc', 1, 3) to true
 */