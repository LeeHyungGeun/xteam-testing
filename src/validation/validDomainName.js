export default function validDomainName(value) {
    const domainCharacterRegExp = /([^0-9A-Za-z\-\.]+)+/; // validate a domain name whether is just with string, number, '-' and '.', or not.
    var allDomainRegExp = /^([0-9A-Za-z\-\.]+)+(\.[a-zA-Z]{2,10})+$/;   // validate a management domain(ex:.com), which is just with two to ten by english, or not.
    return !domainCharacterRegExp.test(value) && allDomainRegExp.test(value);
}