export default function isKorean(value) {
    const regexp = /^[가-힣]+$/;
    return regexp.test(value);
}