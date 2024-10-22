let results = [];

export const subtract = (num1, num2) => {
    const result = num1 - num2;
    results.push({ num1, num2, result });
    return result;
};

export const getResults = () => {
    return results;
};
