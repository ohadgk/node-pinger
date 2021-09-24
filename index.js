var Web3 = require('web3');
var ethers = require("ethers");

var customWsProvider1 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.defibit.io/");
var customWsProvider2 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed2.ninicoin.io/");
var customWsProvider1 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed2.defibit.io/")
var customWsProvider2 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed3.defibit.io/")
var customWsProvider3 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.defibit.io/")
var customWsProvider4 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed2.ninicoin.io/")
var customWsProvider5 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed3.ninicoin.io/")
var customWsProvider6 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.ninicoin.io/")
var customWsProvider7 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/")
var customWsProvider8 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed2.binance.org/")
var customWsProvider9 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed3.binance.org/")
var customWsProvider10 = new ethers.providers.JsonRpcProvider("https://bsc-dataseed4.binance.org/")

var data = {}
setInterval(() => {
    customWsProvider1.getBlock().then(x => data["https://bsc-dataseed2.defibit.io/:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider2.getBlock().then(x => data["https://bsc-dataseed3.defibit.io/:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider3.getBlock().then(x => data["https://bsc-dataseed4.defibit.io/:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider4.getBlock().then(x => data["https://bsc-dataseed2.ninicoin.io:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider5.getBlock().then(x => data["https://bsc-dataseed3.ninicoin.io:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider6.getBlock().then(x => data["https://bsc-dataseed4.ninicoin.io:"] ={blockNumber: x.number, date: new Date()})
    customWsProvider7.getBlock().then(x => data["https://bsc-dataseed1.binance.org/"] ={blockNumber: x.number, date: new Date()})
    customWsProvider8.getBlock().then(x => data["https://bsc-dataseed2.binance.org/"] ={blockNumber: x.number, date: new Date()})
    customWsProvider9.getBlock().then(x => data["https://bsc-dataseed3.binance.org/"] ={blockNumber: x.number, date: new Date()})
    customWsProvider10.getBlock().then(x => data["https://bsc-dataseed4.binance.org/"] ={blockNumber: x.number, date: new Date()})
console.clear()
console.table(data)
},100)
