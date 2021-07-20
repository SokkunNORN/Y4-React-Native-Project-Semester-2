export const phoneFormatter855 = (value) => {
    let phone = ''
    for (let i = 0; i < value.length; i++) {
        if (i == 4 || i == 6 || i == 9) {
            phone += ' '
        }
        phone += value[i]
    }
    return phone
}