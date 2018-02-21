import isEmpty from './isEmpty';
import checkRange from './checkRange';
export default function validCompanyName(value) {
    return !isEmpty(value) && checkRange(value, 1, 40);
}