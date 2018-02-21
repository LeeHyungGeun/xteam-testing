import isEmpty from './isEmpty';
import checkRange from './checkRange';
export default function validCellPhone(value) {
    const regexp = /^[0-9]{1,24}$/;
    return !isEmpty(value) && checkRange(value, 1, 24) && regexp.test(value);
}