import isEmpty from '../src/validation/isEmpty';

describe('isEmpty: ', () => {
    it(`'' to true =>`, () => {
        const value = '';
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it(`null to true =>`, () => {
        const value = null;
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it(`undefined to true =>`, () => {
        const value = undefined;
        const result = isEmpty(value);
        expect(result).toBe(true);
    });
    it(`0 to false =>`, () => {
        const value = 0;
        const result = isEmpty(value);
        expect(result).toBe(false);
    });
});

/**
 * Spec of isEmpty
 * it can be checked value wheteher is empty, or not.
 */