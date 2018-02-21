import isEmpty from './isEmpty';
import checkRange from './checkRange';
import isKorean from './isKorean';
export default function validName(value) {
    return !isEmpty(value) && checkRange(value, 1, 100) && isKorean(value);
}