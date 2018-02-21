import validName from '../src/validation/validName';

describe('validName', () => {
    it('엑스팀 to true => ', () => {
        const value = '엑스팀';
        const result = validName(value);
        expect(result).toBe(true);
    });
    it('X-Team to false => ', () => {
        const value = 'X-Team';
        const result = validName(value);
        expect(result).toBe(false);
    });
    it(`'' to false => `, () => {
        const value = '';
        const result = validName(value);
        expect(result).toBe(false);
    });
    it(`100 characters to true => `, () => {
        const value = '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차';
        const result = validName(value);
        expect(result).toBe(true);
    });
    it(`101 characters to false => `, () => {
        const value = '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차가';
        const result = validName(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of validName
 * it can be checked value wheteher is valid name(:not empty, 1 to 100, only Korean), or not. (it ruled by the partner.)
 */