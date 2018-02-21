import _ from 'lodash';
import isContainsSpecialCharacter from '../src/validation/isContainsSpecialCharacter';

describe('isContainsSpecialCharacter', () => {
    const values = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '`', '~', ',', '.', '?', '/', '\\', '|', ';', ':'
    ];
    it('!@#$%^&*()_-=+[]{}`~,.?/\\|;: by one to true', () => {
        values.map((value) => {
            expect(isContainsSpecialCharacter(value)).toBe(true);
        });
    });
    it('！ to false', () => {
        const value = '！';
        const result = isContainsSpecialCharacter('！');
        expect(result).toBe(false);
    });
    it('X가你 + one to true', () => {
        _.map(_.range(1, values.length), () => {
            expect(isContainsSpecialCharacter(getValueByOne(values))).toBe(true);
        });
    });
});

function getValueByOne(values) {
    return `X가你${values[getRandomInt(values.length)]}`;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

/**
 * Spec of isContainsCapital
 * it can be checked value wheteher is included Special Capital(of below line), or not.
 * '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '`', '~', ',', '.', '?', '/', '\\', '|', ';', ':'
 */