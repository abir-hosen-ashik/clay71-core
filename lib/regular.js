const isEven = (param) => {
    return param % 2 == 0;
}

const isEmpty = (param) => {
    return param.length == 0;
}

module.exports = {
    even: isEven,
    empty: isEmpty
}

