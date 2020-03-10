export const IsNotEmpty = (value) => {
    if (!value && value !== 0) {
        return false;
    }
    return true;
}

export const IsPrice = (value) => {
    if ((!value && value !== 0) || isNaN(value) || parseInt(value, 10) < 0) {
        return false;
    }
    return true;
}

export default {
    IsNotEmpty,
    IsPrice
}