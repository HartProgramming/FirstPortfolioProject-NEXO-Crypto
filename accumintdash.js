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
let port = document.querySelector(".header");
let portArr = []
class Crypto {
    constructor(pic, name, price, snap) {
        this.pic = pic;
        this.name = name;
        this.price = price;
        this.snap = snap;
    }
    createAmntEl(x){
        x.setAttribute("style", "background-color: red;")
        x.setAttribute("contenteditable", false)
        x.textContent = "500"
        return x.value = "Insert Amount"
    }
    createTypeEl(y){
        y.setAttribute("style", "background-color: red;")
        y.setAttribute("contenteditable", false)
        y.textContent = "Loan"
        return y.value = "Loan"
    }
    /* Function for determining Current Value */

    currentValue(c, d, e) {
        c.setAttribute("contenteditable", false)
        return c.textContent = parseFloat(e.price * d.textContent)
    }/* Function for determing Snapshot Value */

    snapshotValue(h, g, f) {
        h.setAttribute("contenteditable", false);
        return h.textContent = parseFloat(f.snap * g.textContent)
}
    gainLoss(){
        return parseFloat(this.currentValue() / this.snapshotValue()).toFixed(2) +"%"
    }
    createEditButton(b){
        b.setAttribute("type", "button")
        b.setAttribute("style", "background-color: orange;")
        return b.textContent = "Edit";
    }
    createDeleteButton(a){
        a.setAttribute("type", "button")
        a.setAttribute("style", "background-color: red;")
        a.setAttribute("textContent", "delete")
        return a.textContent = "Delete"
    }
}
const bitcoin = new Crypto("bitcoin-btc-logo.png", "Bitcoin", 30, 40)
const ethereum = new Crypto("ethereum-eth-logo.png", "Ethereum", 50, 40)

function insRow(name){
    
    let tokenImage = document.createElement("img")
    tokenImage.src = name.pic
    tokenImage.height = 25;
    let rowInsert = row.insertRow();
    const cell0 = rowInsert.insertCell(-1);
    const cell1 = rowInsert.insertCell(1);
    const cell2 = rowInsert.insertCell(2);
    const cell3 = rowInsert.insertCell(3);
    const cell4 = rowInsert.insertCell(4);
    const cell5 = rowInsert.insertCell(5);
    const cell6 = rowInsert.insertCell(6);
    const cell7 = rowInsert.insertCell(7);
    const cell8 = rowInsert.insertCell(8);
    const cell9 = rowInsert.insertCell(9);
    
    cell9.addEventListener("click", function(){
        cell4.setAttribute("contenteditable", true);
        cell4.addEventListener("keydown",function(event){
            if(event.keyCode === 13){
                cell4.setAttribute("contenteditable", false)
                cell5.textContent = name.currentValue(cell5, cell4, name);
                cell6.textContent = name.snapshotValue(cell6, cell4, name);
                cell7.textContent = Math.floor((cell5.textContent / cell6.textContent) * 100) - 100 + "%";

            }
        })
    })
    portArr.push(cell5.textContent)
    console.log(portArr)
    const cell10 = rowInsert.insertCell(10);
    cell10.addEventListener("click", function(){
        rowInsert.remove()
        portArr.pop(cell5.textContent)
    })
    cell0.appendChild(tokenImage);
    cell1.append(name.name);
    cell2.textContent = name.price;
    cell3.textContent = name.snap;
    cell4.value = name.createAmntEl(cell4);
    cell8.textContent = name.createTypeEl(cell8);
    cell9.textContent = name.createEditButton(cell9);
    cell10.textContent = name.createDeleteButton(cell10);
}





eth.addEventListener("click", function () {
    insRow(ethereum)
})

btcImg.addEventListener("click",function(){
    insRow(bitcoin) 
})

cosmos.addEventListener("click",function(){
    insRow(count, cosmos) 
})

/*
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
*/