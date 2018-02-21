import isRepeated from '../src/validation/isRepeated';

describe('isRepeated', () => {
    it('111 to true => ', () => {
        const value = '111';
        const result = isRepeated(value);
        expect(result).toBe(true);
    });
    it('aaa to true => ', () => {
        const value = 'aaa';
        const result = isRepeated(value);
        expect(result).toBe(true);
    });
    it('___ to true => ', () => {
        const value = '___';
        const result = isRepeated(value);
        expect(result).toBe(true);
    });
    it('\'\'\' to true => ', () => {
        const value = '\'\'\'';
        const result = isRepeated(value);
        expect(result).toBe(true);
    });
    it('aaA to false => ', () => {
        const value = 'aaA';
        const result = isRepeated(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of isRepeated
 * it can be checked value wheteher is repeated by the count, or not.
 * for example: isRepeated('111', 3) to true
 */