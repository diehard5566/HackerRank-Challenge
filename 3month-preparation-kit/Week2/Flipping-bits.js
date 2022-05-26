const n = 3

const flippingBits = n => {
    const x = ~n >>> 0
    x

    //  return ((2**32)-1) - n;
}

flippingBits(n)

function flippingBitsStringBased(n) {
    // String solution
    const flipped = parseInt(n)
        .toString(2)
        .padStart(32, '0') // Convert to 32-bit binary string
        .split('')
        .map(bit => (bit === '0' ? '1' : '0'))
        .join('') // Flip bits

    return parseInt(flipped, 2) // Convert back to decimal
}
