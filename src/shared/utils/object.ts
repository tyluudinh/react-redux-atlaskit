export const ObjectIsNull = (object: {}) => {
    return Object.values(object).filter(x => !x).length ===
        Object.keys(object).length;
};
