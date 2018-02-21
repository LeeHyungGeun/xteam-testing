export default function isContainsSpecialCharacter(value) {
    const regexp = /[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\|\{\}\;\:\"\'\`\<\>\,\.\?\/\[\]]+/;
    return regexp.test(value);
}