import isKorean from '../src/validation/isKorean';

describe('isKorean', () => {
    it('가나다 to true => ', () => {
        const value = '가나다';
        const result = isKorean(value);
        expect(result).toBe(true);
    });
    it('ABC to fase => ', () => {
        const value = 'ABC';
        const result = isKorean(value);
        expect(result).toBe(false);
    });
    it('123 to false => ', () => {
        const value = 123;
        const result = isKorean(value);
        expect(result).toBe(false);
    });
    it('你好 to false => ', () => {
        const value = '你好';
        const result = isKorean(value);
        expect(result).toBe(false);
    });
    it('_#@!@# to false => ', () => {
        const value = '_#@!@#';
        const result = isKorean(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of isKorean
 * it can be checked value wheteher is only Korean, or not.
 */