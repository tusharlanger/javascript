const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * 0.25
    } else {
        throw Error('Argument must be a number!')
    }
}

try {
    const result = getTip('amount')
} catch (e) {
    console.log(e)
}