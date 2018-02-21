import validPersonalEmail from '../src/validation/validPersonalEmail';

describe('validPersonalEmail', () => {
    it('lhg4031@gmail.com to true => ', () => {
        const value = 'lhg4031@gmail.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(true);
    });
    it('leehyunggeun@xteam.com to true => ', () => {
        const value = 'leehyunggeun@xteam.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(true);
    });
    it('Leehyunggeun@gmail.com to false => ', () => {
        const value = 'Leehyunggeun@gmail.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(false);
    });
    it('leehyunggeungmail.com to false => ', () => {
        const value = 'leehyunggeungmail.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(false);
    });
    it('12@xteam.com to true => ', () => {
        const value = '12@xteam.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(true);
    });
    it('1@xteam.com to false => ', () => {
        const value = '1@xteam.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(false);
    });
    it('a1.-_@xteam.com to true => ', () => {
        const value = 'a1.-_@xteam.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(true);
    });
    it('#!+|@xteam.com to false => ', () => {
        const value = '#!+|@xteam.com';
        const result = validPersonalEmail(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of Personal Email
 * 1. Before '@'
 * alphabet(not capital), nubmer, dot(.), underbar(_) between 1 to 40
 * 2. Total between 1 to 255
 */