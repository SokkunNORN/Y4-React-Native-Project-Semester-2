
import { format } from 'date-fns'

export const phoneFormatter855 = value => {
    let phone = ''
    for (let i = 0; i < value.length; i++) {
        if (i == 4 || i == 6 || i == 9) {
            phone += ' '
        }
        phone += value[i]
    }
    return phone
}

export const dateFormat = value => {
    let date = value.toDate()
	let mm = date.getMonth()
	let dd = date.getDate()
	let yyyy = date.getFullYear()

	date = dd + '/' + mm + '/' + yyyy

	return date
}