function number(num) {
    if (num === null || num === undefined) {
        return 'unknow'
    }

    return num.toLocaleString()
}

export default {
    number
}