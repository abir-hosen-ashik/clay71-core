const linear = (param, value) => {
    let index = [];
    param.forEach((element, key) => {
        element == value ? index.push(key) : {}
    });
    return { position: index, found: index.length ? true : false };
}

module.exports = {
    linear: linear,
}