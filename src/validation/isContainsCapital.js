export default function isContainsCapital(value) {
    const regexp = /[A-Z]{1,}/;
    return regexp.test(value);
}