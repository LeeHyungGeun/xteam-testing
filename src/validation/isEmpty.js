import _ from 'lodash';
export default function isEmpty(value) {
    return value === undefined || value === null || _.trim(value) === '';
}