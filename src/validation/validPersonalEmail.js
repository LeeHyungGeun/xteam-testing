export default function validPersonalEmail(value) {
    const regexp = /^[a-z0-9\.\-\_]{2,40}@[!#%*\-_=+|'\/.0-9a-zA-Z]{2,255}$/;
    return regexp.test(value);
}