export default function checkRange(value, min, max) {
    const _min = min !== undefined && min !== null && min !== '' && typeof min === 'number' && min > 0 ? min : '0';
    const _max = max !== undefined && max !== null && min !== '' && typeof max === 'number' && max > 0 ? max : '';
    let regexp = new RegExp('^.' + '{' + _min + ',' + _max + '}$');
    return regexp.test(value);
}