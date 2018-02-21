import isContainsCapital from '../src/validation/isContainsCapital';

describe('isContainsCapital', () => {
    it('Abc to true => ', () => {
        const value = 'Abc';
        const result = isContainsCapital(value);
        expect(result).toBe(true);
    });
    it('aBc to true => ', () => {
        const value = 'aBc';
        const result = isContainsCapital(value);
        expect(result).toBe(true);
    });
    it('abc to false => ', () => {
        const value = 'abc';
        const result = isContainsCapital(value);
        expect(result).toBe(false);
    });
    it('ABC to true => ', () => {
        const value = 'ABC';
        const result = isContainsCapital(value);
        expect(result).toBe(true);
    });
    it('Xteam to true => ', () => {
        const value = 'Xteam';
        const result = isContainsCapital(value);
        expect(result).toBe(true);
    });
})

/**
 * Spec of isContainsCapital
 * it can be checked value wheteher is included Capital, or not.
 */