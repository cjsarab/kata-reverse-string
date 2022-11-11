function createPhoneNumber(numbers) {
    const diallingCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const lastPart = numbers.slice(6, 10).join('');

    return `(${diallingCode}) ${firstPart}-${lastPart}`
}

module.exports = createPhoneNumber;