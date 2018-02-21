import validDomainName from '../src/validation/validDomainName';

describe('validDomainName', () => {
    it('x-team.com to true => ', () => {
        const value = 'x-team.com';
        const result = validDomainName(value);
        expect(result).toBe(true);
    });
    it('x-teamcom to true => ', () => {
        const value = 'x-teamcom';
        const result = validDomainName(value);
        expect(result).toBe(false);
    });
    it('leehyunggeun.com to true => ', () => {
        const value = 'leehyunggeun.com';
        const result = validDomainName(value);
        expect(result).toBe(true);
    });
    it('-xteam.com to true => ', () => {
        const value = '-xteam.com';
        const result = validDomainName(value);
        expect(result).toBe(true);
    });
    it('_xteam.com to true => ', () => {
        const value = '_xteam.com';
        const result = validDomainName(value);
        expect(result).toBe(false);
    });
    it('xteam com to false => ', () => {
        const value = 'xteam com';
        const result = validDomainName(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of validDomainName
 * it can be checked value wheteher is valid domain name, or not. (it ruled by the partner.)
 */