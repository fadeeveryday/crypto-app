export function percentDifference(buyPrice, actualPrice) {
  return +(100 * Math.abs((buyPrice - actualPrice) / ((buyPrice + actualPrice) / 2))).toFixed(2)
}

export function capitalise (str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}