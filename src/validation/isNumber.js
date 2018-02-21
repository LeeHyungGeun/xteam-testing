export default function isNumber(value) {
    const regexp = /^[0-9]+$/;
    return regexp.test(value);
}