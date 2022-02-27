const btcImg = document.querySelector("#bitcoin");
const eth = document.querySelector("#ethereum");
const ada = document.querySelector("#cardano");
const avax = document.querySelector("#avalanche")
const sol = document.querySelector("#solana")
const terra = document.querySelector("#terra")
const usdc = document.querySelector("#usdc")
const btcCash = document.querySelector("#btccash")
const nexo = document.querySelector("#nexo")
const litecoin = document.querySelector("#litecoin")
const dot = document.querySelector("#polkadot")
const matic = document.querySelector("#polygon")
const axie = document.querySelector("#axie")
const fantom = document.querySelector("#fantom")
const kusama = document.querySelector("#kusama")
const stellar = document.querySelector("#stellar")
const xrp = document.querySelector("#xrp")
const trueUSD = document.querySelector("#trueusd")
const tether = document.querySelector("#tether")
const chainlink = document.querySelector("#chainlink")
const tron = document.querySelector("#tron")
const paxGold = document.querySelector("#paxgold")
const paxUS = document.querySelector("#paxus")
const eos = document.querySelector("#eos")
const doge = document.querySelector("#doge")
const cosmos = document.querySelector("#cosmos")
const row = document.querySelector("#token-row");
const bnb = document.querySelector("#bnb");
const dai = document.querySelector("#dai");
let count = 0;
let port = document.querySelector(".header")
const cryptoAmntInput = document.createElement("input");
const cryptoTypeInput = document.createElement("input");


class Crypto {
    constructor(pic, name, price, snap, amount, type) {
        this.pic = pic;
        this.name = name;
        this.price = price;
        this.snap = snap;
        this.amount = amount;
        this.type = type;
    }
    creatEl(){
       let input =  document.createElement("input")
       input.value = 400
    }
    
    /* Function for determining Current Value */

    currentValue() {
    return parseFloat(this.price * this.amount.value)
    }/* Function for determing Snapshot Value */

    snapshotValue() {
    return parseFloat(this.snap * this.amount.value)
}
    gainLoss(){
        return parseFloat(this.currentValue() / this.snapshotValue()).toFixed(2) +"%"
    }
}

const bitcoin = new Crypto("bitcoin-btc-logo.png", "Bitcoin", 50, 40, cryptoTypeInput)
const ethereum = new Crypto("ethereum-eth-logo.png", "Ethereum", 50, 40, cryptoAmntInput,cryptoTypeInput)

function insRow(x, name){
    let tokenImage = document.createElement("img")
    tokenImage.src = name.pic
    tokenImage.height = 25;
    let rowInsert = row.insertRow(x);
    const cell0 = rowInsert.insertCell(-1);
    const cell1 = rowInsert.insertCell(1);
    const cell2 = rowInsert.insertCell(2);
    const cell3 = rowInsert.insertCell(3);
    const cell4 = rowInsert.insertCell(4);
    const cell5 = rowInsert.insertCell(5);
    const cell6 = rowInsert.insertCell(6);
    const cell7 = rowInsert.insertCell(7);
    const cell8 = rowInsert.insertCell(8);
    cell0.appendChild(tokenImage);
    cell1.innerHTML = name.name;
    cell2.innerHTML = name.price;
    cell3.innerHTML = name.snap;
    cell4.append(name.creatEl());
    cell5.innerHTML = name.currentValue();
    cell6.innerHTML = name.snapshotValue();
    cell7.innerHTML = name.gainLoss();
    cell8.append(name.type);
}

eth.addEventListener("click", function () {
    insRow(count, ethereum)
    count += 1;
})

btcImg.addEventListener("click",function(){
    insRow(count, bitcoin) 
    count += 1;   
})

cosmos.addEventListener("click",function(){
    insRow(count, cosmos) 
})

eos.addEventListener("click", function () {
    insRow(count, eos)
})

kusama.addEventListener("click", function () {
    insRow(count, kusama)
})

doge.addEventListener("click", function () {
    insRow(count, dogecoin)
})

dot.addEventListener("click", function () {
    insRow(count, polkadot)
})

matic.addEventListener("click", function () {
    insRow(count, polygon)
})

btcCash.addEventListener("click", function () {
    insRow(count, btcCash)
})

trueUSD.addEventListener("click", function () {
    insRow(count, trueUSD)
})

paxUS.addEventListener("click", function () {
    insRow(count, paxUS)
})

paxGold.addEventListener("click", function () {
    insRow(count, paxGold)
})

usdc.addEventListener("click", function () {
    insRow(count, usdc)
})

terra.addEventListener("click", function () {
    insRow(count, terraluna)
})

avax.addEventListener("click", function () {
    insRow(count, avalanche)
})

ada.addEventListener("click", function () {
    insRow(count, cardano)
})

sol.addEventListener("click", function () {
    insRow(count, solana)
})

bnb.addEventListener("click", function () {
    insRow(count, binance)
})

dai.addEventListener("click", function () {
    insRow(count, daiDai)
})

tron.addEventListener("click", function () {
    insRow(count, tronTron)
})

tether.addEventListener("click", function () {
    insRow(count, ustd)
})

link.addEventListener("click", function () {
    insRow(count, chainlink)
})

xrp.addEventListener("click", function () {
    insRow(count, ripple)
})

xlm.addEventListener("click", function () {
    insRow(count, stellar)
})

axie.addEventListener("click", function () {
    insRow(count, axieFinity)
})

ftm.addEventListener("click", function () {
    insRow(count, fantom)
})

nexo.addEventListener("click", function () {
    insRow(count, nexoNexo)
})