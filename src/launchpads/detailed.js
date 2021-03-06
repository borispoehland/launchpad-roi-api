const { fetchCoinData } = require('../common-logic')

module.exports = async function (launchpad) {
    const coins = require(`./${launchpad}/coins.json`)

    const fetch = fetchCoinData(coins)

    return fetch()
}
