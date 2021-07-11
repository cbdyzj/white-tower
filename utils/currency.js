export function getCurrency(balance) {
    const pound = Math.trunc(balance / 12 / 20)
    const soli = Math.trunc((balance / 12) - (pound * 20))
    const penny = balance - soli * 12 - pound * 12 * 20

    return {
        pound,
        soli,
        penny,
    }
}