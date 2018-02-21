import validCellPhone from '../src/validation/validCellPhone';

describe('validCellPhone', () => {
    it('8664001234 to true => ', () => {
        const value = '8664001234';
        const result = validCellPhone(value);
        expect(result).toBe(true);
    });
    it('1111x1111 to false => ', () => {
        const value = '1111x1111';
        const result = validCellPhone(value);
        expect(result).toBe(false);
    });
    it(`'' to false => `, () => {
        const value = '';
        const result = validCellPhone(value);
        expect(result).toBe(false);
    });
    it(`1234567890123456789012345 to false => `, () => {
        const value = '1234567890123456789012345';
        const result = validCellPhone(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of validCellPhone
 * it can be checked value wheteher is valid phone number, or not. (it ruled by the partner.)
 */