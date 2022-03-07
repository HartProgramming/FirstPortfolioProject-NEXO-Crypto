/* QuerySelector for buttons of coins */
const btc = document.querySelector("#bitcoin");
const eth = document.querySelector("#ethereum");
const ada = document.querySelector("#cardano");
const avax = document.querySelector("#avalanche");
const sol = document.querySelector("#solana");
const terra = document.querySelector("#terra");
const usdc = document.querySelector("#usdc");
const btcCash = document.querySelector("#btccash");
const nexo = document.querySelector("#nexo");
const ltc = document.querySelector("#litecoin");
const dot = document.querySelector("#polkadot");
const matic = document.querySelector("#polygon");
const axie = document.querySelector("#axie");
const ftm = document.querySelector("#fantom");
const kus = document.querySelector("#kusama");
const xlm = document.querySelector("#stellar");
const xrp = document.querySelector("#xrp");
const tUSD = document.querySelector("#trueusd");
const ust = document.querySelector("#tether");
const link = document.querySelector("#chainlink");
const tron = document.querySelector("#tron");
const pxg = document.querySelector("#paxgold");
const pxu = document.querySelector("#paxus");
const eos = document.querySelector("#eos");
const doge = document.querySelector("#dogecoin");
const atom = document.querySelector("#cosmos");
const bnb = document.querySelector("#bnb");
const dai = document.querySelector("#dai");

/* Queryselector of Total Portfolio Values */
const portValue = document.querySelector("#port-val")
const snapValue = document.querySelector("#snap-val")
const percentPL = document.querySelector("#gain-loss")

/* Date Object that finds the current date of the snapshot and creates two UNIX timestamps to pass into coingecko api */
let date = new Date();
let year = date.getFullYear();
let hour = 05;
let day = date.getDate();
let minute1 = 10;
let second = 0;
let month = date.getMonth();
let minute2 = 57;

let dateOne = Date.UTC(year, month, day, hour, minute1).toString();
let dateTwo = Date.UTC(year, month, day, hour, minute2).toString();

/* Query selector for header class */
let port = document.querySelector(".header");

/* Query selector for tbody - used to insert rows */
const row = document.querySelector("#token-row");

/* Array for the sum of the portfolio current value - array indexes represent each individual current value cell in the table 
STILL NEED TO FIGURE OUT ACCURATE PUSH AND POP */
let portArr = []

/* CRYPTO CLASS - This allows for each crypto button to inherit the CRYPTO object attributes - image, name, edit & delete button, amt of crypto input, current & snaphshot value functions, p/l % function */
class Crypto {
    constructor(pic, name) {
        this.pic = pic;
        this.name = name;
    }

    /* Function for amount of crypto owned - allows for edit */
    createAmntEl(x) {
        x.setAttribute("contenteditable", false)
        x.textContent = "500"
        return x.value = "Click Edit"
    }
    /* Function for the type of state the money is in creidt or loan*/
    createTypeEl(y) {

        y.setAttribute("contenteditable", false)
        y.textContent = "Loan"
        return y.value = "Loan"
    }
    /* Function for determining Current Value */
    currentValue(c, d, e) {
        return c.textContent = parseFloat(e.textContent * d.textContent).toFixed(2)
    }
    /* Function for determing Snapshot Value */
    snapshotValue(h, g, f) {
        return h.textContent = parseFloat(f.textContent * g.textContent)
    }
    /* P/L % function */
    gainLoss() {
        return parseFloat(this.currentValue() / this.snapshotValue()).toFixed(2) + "%"
    }
    /* Edit button created */
    createEditButton(x) {
        x.classList.add("btn")
        x.classList.add("btn-outline-primary")
        x.setAttribute("width", "50%")
        return x.textContent = "Edit";
    }
    /* Delete buttion created */
    createDeleteButton(a) {
        a.classList.add("btn")
        a.classList.add("btn-outline-primary")
        a.setAttribute("width", "100%")
        a.setAttribute("margin-left", "20px")
        return a.textContent = "Delete"
    }
}

/* Declare Crypto Coin classes */

const bitcoin = new Crypto("bitcoin-btc-logo.png", "bitcoin")
const ethereum = new Crypto("ethereum-eth-logo.png", "ethereum")
const cardano = new Crypto("cardano-ada-logo.png", "cardano")
const solana = new Crypto("solana-sol-logo.png", "solana")
const cosmos = new Crypto("cosmos-atom-logo.png", "cosmos")
const polkadot = new Crypto("polkadot-new-dot-logo.png", "polkadot")
const polygon = new Crypto("polygon-matic-logo.png", "matic-network")
const avalanche = new Crypto("avalanche-avax-logo.png", "avalanche-2")
const paxGold = new Crypto("pax-gold-paxg-logo.png", "pax-gold")
const paxUS = new Crypto("paxos-standard-usdp-logo.png", "paxos-standard")
const tronTron = new Crypto("tron-trx-logo.png", "tron")
const nexoNexo = new Crypto("nexo-nexo-logo.png", "nexo")
const chainLink = new Crypto("chainlink-link-logo.png", "chainlink")
const terraLuna = new Crypto("terra-luna-luna-logo.png", "terra-luna")
const dogecoin = new Crypto("dogecoin-doge-logo.png", "dogecoin")
const fantom = new Crypto("fantom-ftm-logo.png", "fantom")
const stableDollar = new Crypto("usd-coin-usdc-logo.png", "usd-coin")
const bitcoinCash = new Crypto("bitcoin-cash-bch-logo.png", "bitcoin-cash")
const trueUSD = new Crypto("trueusd-tusd-logo.png", "true-usd")
const axieFinity = new Crypto("axie-infinity-axs-logo.png", "axie-infinity")
const stellarLumens = new Crypto("stellar-xlm-logo.png", "stellar")
const daiMulti = new Crypto("multi-collateral-dai-dai-logo.png", "dai")
const tetherUSD = new Crypto("tether-usdt-logo.png", "tether")
const litecoin = new Crypto("litecoin-ltc-logo.png", "litecoin")
const rippleLabs = new Crypto("xrp-xrp-logo.png", "ripple")
const binanceBNB = new Crypto("bnb-bnb-logo.png", "binancecoin")
const eosCoin = new Crypto("eos-eos-logo.png", "eos")
const kusamaCoin = new Crypto("kusama-logo.png", "kusama")

/* Declare count variable to use to count number of rows and create an array */
let count = 0;
let sum = 0;
let add = 0;

/* Function to insert row upon each button click */
function insRow(name, count) {
    /* tokenImage enables appending of Crypto Logo */
    let tokenImage = document.createElement("img")
    tokenImage.src = name.pic
    tokenImage.height = 45;
    let rowInsert = row.insertRow(count);
    rowInsert.id = count;
    rowInsert.classList.add("row-insert")
    const cell0 = rowInsert.insertCell(-1);
    const cell1 = rowInsert.insertCell(1);
    cell1.setAttribute("style", "text-transform: capitalize;")
    const cell2 = rowInsert.insertCell(2);
    const cell3 = rowInsert.insertCell(3);
    const cell4 = rowInsert.insertCell(4);
    const cell5 = rowInsert.insertCell(5);
    const cell6 = rowInsert.insertCell(6);
    const cell7 = rowInsert.insertCell(7);
    const cell8 = rowInsert.insertCell(8);
    const cell9 = rowInsert.insertCell(9);
    cell9.setAttribute("type", "button")
    cell9.setAttribute("style", "background-image: linear-gradient(to bottom right,rgb(25, 25, 196),rgb(107, 29, 107))")
    cell9.classList.add("edit-btn")
    const cell10 = rowInsert.insertCell(10);
    cell10.setAttribute("type", "button")
    cell10.setAttribute("style", "background-image: linear-gradient(to bottom right,rgb(255, 205, 136),rgb(107, 29, 107))")
    cell10.classList.add("delete-btn")
    /* Gets the current price of the crypto */

    async function fetchCP(crypto, currentPrice, updateCV, amnt) {
        setInterval(async function () {
            const config = { headers: { Accept: "application/json" } }
            const cool = "usd"
            const params = {
                ids: crypto,
                vs_currencies: cool
            }
            const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(params.ids)}&vs_currencies=${encodeURIComponent(params.vs_currencies)}`, config)
            currentPrice.textContent = res.data[crypto][cool].toFixed(2)
            updateCV.textContent = parseFloat(currentPrice.textContent * amnt.textContent).toFixed(2)

        }, 10000);

    }

    async function collectCP(price, x) {
        const config = { headers: { Accept: "application/json" } }
        const params = {
            ids: price
        }
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(params.ids)}&vs_currencies=usd`, config)
        x.textContent = res.data[price].usd.toFixed(2)
    };

    async function collectSP(price, spText, svText, amnt, time1, time2) {
        let firstSlice = time1.slice(0, 10)
        let secondSlice = time2.slice(0, 10)
        const config = { headers: { Accept: "application/json" } }
        const cool = "usd"
        const params = {
            ids: price,
            vs_currencies: cool,
            firstUNIX: firstSlice,
            secondUNIX: secondSlice
        }
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${encodeURIComponent(params.ids)}/market_chart/range?vs_currency=usd&from=${encodeURIComponent(params.firstUNIX)}&to=${encodeURIComponent(params.secondUNIX)}`, config)
        spText.textContent = res.data.prices[0][1].toFixed(2);
        svText.textContent = parseFloat(spText.textContent * amnt.textContent).toFixed(2);
    };


    cell9.addEventListener("click", function () {
        cell4.setAttribute("contenteditable", true);
        cell4.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                cell4.setAttribute("contenteditable", false)
                cell5.textContent = name.currentValue(cell5, cell4, cell2);
                cell6.textContent = name.snapshotValue(cell6, cell4, cell3);
                cell7.textContent = Math.floor(((cell5.textContent / cell6.textContent) * 100) - 100).toFixed(2) + "%";
            }
        })
    })
    cell10.addEventListener("click", function () {
        rowInsert.remove()

        console.log(count)
    })


    cell0.appendChild(tokenImage);
    cell1.append(name.name)
    cell2.textContent = collectCP(cell1.textContent, cell2)
    cell2.textContent = fetchCP(cell1.textContent, cell2, cell5, cell4);
    cell3.textContent = collectSP(cell1.textContent, cell3, cell6, cell4, dateOne, dateTwo);
    cell4.textContent = name.createAmntEl(cell4);
    console.log(cell5.textContent)
    cell8.textContent = name.createTypeEl(cell8);
    cell9.textContent = "Edit"
    cell10.textContent = "Delete";
}

function addSum(sum, count) {
    setInterval(() => {
            let total = 0;
            sum = parseFloat(document.getElementById(`0`).cells[5].innerText)
            total += sum
        if (count > 0) {
            total += parseFloat(document.getElementById(`${count}`).cells[5].innerText)
            portValue.textContent = total
        }
    }, 3000);
}

function snapSum(add, count){
    setInterval(() => {
        let total = 0;
        add = parseFloat(document.getElementById(`0`).cells[6].innerText)
        total += add
        if (count > 0) {
            total += parseFloat(document.getElementById(`${count}`).cells[6].innerText)
            snapValue.textContent = total
        }
    }, 3000);
    
}

function percentPort(port, snap, percent){
    setInterval(() => {
       percent.textContent = Math.floor(((port.textContent / snap.textContent) * 100) - 100).toFixed(2);
    }, 3000);
}



/* Button functions that insert a row via the Crypto Class */
eth.addEventListener("click", function () {
    insRow(ethereum, count, sum);
    addSum(sum, count)
    snapSum(add, count)
    count += 1;
})

doge.addEventListener("click", function () {
    insRow(dogecoin, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

btc.addEventListener("click", function () {
    insRow(bitcoin, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

atom.addEventListener("click", function () {
    insRow(cosmos, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

link.addEventListener("click", function () {
    insRow(chainLink, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

eos.addEventListener("click", function () {
    insRow(eosCoin, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

kus.addEventListener("click", function () {
    insRow(kusamaCoin, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

dot.addEventListener("click", function () {
    insRow(polkadot, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

matic.addEventListener("click", function () {
    insRow(polygon, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

btcCash.addEventListener("click", function () {
    insRow(bitcoinCash, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

tUSD.addEventListener("click", function () {
    insRow(trueUSD, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

pxu.addEventListener("click", function () {
    insRow(paxUS, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

pxg.addEventListener("click", function () {
    insRow(paxGold, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

usdc.addEventListener("click", function () {
    insRow(stableDollar, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

terra.addEventListener("click", function () {
    insRow(terraLuna, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

avax.addEventListener("click", function () {
    insRow(avalanche, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

ada.addEventListener("click", function () {
    insRow(cardano, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

sol.addEventListener("click", function () {
    insRow(solana, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

bnb.addEventListener("click", function () {
    insRow(binanceBNB, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

dai.addEventListener("click", function () {
    insRow(daiMulti, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

tron.addEventListener("click", function () {
    insRow(tronTron, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

ust.addEventListener("click", function () {
    insRow(tetherUSD, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

xrp.addEventListener("click", function () {
    insRow(rippleLabs, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

xlm.addEventListener("click", function () {
    insRow(stellarLumens, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

axie.addEventListener("click", function () {
    insRow(axieFinity, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

ftm.addEventListener("click", function () {
    insRow(fantom, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

nexo.addEventListener("click", function () {
    insRow(nexoNexo, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

ltc.addEventListener("click", function () {
    insRow(litecoin, count);
    addSum(sum, count)
    snapSum(add, count)

    count += 1;
})

percentPort(portValue, snapValue, percentPL)