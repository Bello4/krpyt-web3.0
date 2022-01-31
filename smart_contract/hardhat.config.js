//https://eth-kovan.alchemyapi.io/v2/_IR3CdsHFIa_18wuFcLVpjYij8K0wu6C

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',

  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Fy6_zD3tN0qmcGcBYWd75bIzryyZA1CF',
      accounts: ['5b274dfc048a29d1828fae844db9c3c144755adb41ff035249acbd7377478627']
    }
  }
}