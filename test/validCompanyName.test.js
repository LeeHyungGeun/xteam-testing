import validCompanyName from '../src/validation/validCompanyName';

describe('validCompanyName', () => {
    it('X-Team to true => ', () => {
        const value = 'X-Team';
        const result = validCompanyName(value);
        expect(result).toBe(true);
    });
    it(`'' to false => `, () => {
        const value = '';
        const result = validCompanyName(value);
        expect(result).toBe(false);
    });
    it('1234567890123456789012345678901234567890 to true => ', () => {
        const value = '1234567890123456789012345678901234567890';
        const result = validCompanyName(value);
        expect(result).toBe(true);
    });
    it('12345678901234567890123456789012345678901 to false => ', () => {
        const value = '12345678901234567890123456789012345678901';
        const result = validCompanyName(value);
        expect(result).toBe(false);
    });
    it('!@#$%^&*() to true => ', () => {
        const value = '!@#$%^&*()';
        const result = validCompanyName(value);
        expect(result).toBe(true);
    });
});

/**
 * Spec of validCompanyName
 * it can be checked value wheteher is valid company name, or not. (it ruled by the partner.)
 */