import isNumber from '../src/validation/isNumber';

describe('isNumber', () => {
    it('123 to true => ', () => {
        const value = 123;
        const result = isNumber(value);
        expect(result).toBe(true);
    });
    it('abc to false => ', () => {
        const value = 'abc';
        const result = isNumber(value);
        expect(result).toBe(false);
    });
    it('_#@! to false => ', () => {
        const value = '_#@!';
        const result = isNumber(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of isNumber
 * it can be checked value wheteher is number, or not.
 */