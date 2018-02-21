export default function isRepeated(value, count = 1) {
    // const regexp = new RegExp(`(${value}){${count + 1}`)
    const regexp = new RegExp('(.)\\1{' + (count + 1) + '}');
    return regexp.test(value);
}