/* QuerySelector for buttons of coins */
const btc = document.querySelector("#btc");
const eth = document.querySelector("#eth");
const ada = document.querySelector("#ada");
const avax = document.querySelector("#avax");
const sol = document.querySelector("#sol");
const terra = document.querySelector("#terra");
const usdc = document.querySelector("#usdc");
const btcCash = document.querySelector("#btccash");
const nexo = document.querySelector("#nexo-nexo");
const ltc = document.querySelector("#ltc");
const dot = document.querySelector("#dot");
const matic = document.querySelector("#polygon");
const axie = document.querySelector("#axie");
const ftm = document.querySelector("#ftm");
const kus = document.querySelector("#kus");
const xlm = document.querySelector("#xlm");
const xrp = document.querySelector("#xrp");
const tUSD = document.querySelector("#tusd");
const ust = document.querySelector("#ust");
const link = document.querySelector("#link");
const tron = document.querySelector("#tron-tron");
const pxg = document.querySelector("#paxgold");
const pxu = document.querySelector("#paxus");
const eos = document.querySelector("#eos-eos");
const doge = document.querySelector("#doge");
const atom = document.querySelector("#atom");
const bnb = document.querySelector("#bnb");
const dai = document.querySelector("#dai-dai");

/* Queryselector of Total Portfolio Values */
const portValue = document.querySelector("#port-val")
const snapValue = document.querySelector("#snap-val")
const percentPL = document.querySelector("#gain-loss")
const refreshBtn = document.querySelector("#refresh")
const recPic = document.querySelector("#pic-rec");
const loyalty = document.querySelector("#loyalty");
const tick = document.querySelector("#tick")

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
let row = document.querySelector("#token-row");

/* Array for the sum of the portfolio current value - array indexes represent each individual current value cell in the table 
STILL NEED TO FIGURE OUT ACCURATE PUSH AND POP */
let portArr = []

/* CRYPTO CLASS - This allows for each crypto button to inherit the CRYPTO object attributes - image, name, edit & delete button, amt of crypto input, current & snaphshot value functions, p/l % function */
class Crypto {
    constructor(pic, name, abb) {
        this.pic = pic;
        this.name = name;
        this.abb = abb;
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
        return h.textContent = parseFloat(f.textContent * g.textContent).toFixed(2)
    }
    /* P/L % function */
    gainLoss() {
        return parseFloat(this.currentValue() / this.snapshotValue()).toFixed(2) + "%"
    }
    /* Edit button created */

}

/* Declare Crypto Coin classes */

const bitcoin = new Crypto("bitcoin-btc-logo.png", "bitcoin", "btc")
const ethereum = new Crypto("ethereum-eth-logo.png", "ethereum", "eth")
const cardano = new Crypto("cardano-ada-logo.png", "cardano", "ada")
const solana = new Crypto("solana-sol-logo.png", "solana", "sol")
const cosmos = new Crypto("cosmos-atom-logo.png", "cosmos", "atom")
const polkadot = new Crypto("polkadot-new-dot-logo.png", "polkadot", "dot")
const polygon = new Crypto("polygon-matic-logo.png", "matic-network", "matic")
const avalanche = new Crypto("avalanche-avax-logo.png", "avalanche-2", "avax")
const paxGold = new Crypto("pax-gold-paxg-logo.png", "pax-gold", "paxg")
const paxUS = new Crypto("paxos-standard-usdp-logo.png", "paxos-standard", "paxus")
const tronTron = new Crypto("tron-trx-logo.png", "tron", "tron")
const nexoNexo = new Crypto("nexo-nexo-logo.png", "nexo", "nexo")
const chainLink = new Crypto("chainlink-link-logo.png", "chainlink", "link")
const terraLuna = new Crypto("terra-luna-luna-logo.png", "terra-luna", "terra")
const dogecoin = new Crypto("dogecoin-doge-logo.png", "dogecoin", "doge")
const fantom = new Crypto("fantom-ftm-logo.png", "fantom", "ftm")
const stableDollar = new Crypto("usd-coin-usdc-logo.png", "usd-coin", "usdc")
const bitcoinCash = new Crypto("bitcoin-cash-bch-logo.png", "bitcoin-cash", "btccash")
const trueUSD = new Crypto("trueusd-tusd-logo.png", "true-usd", "tusd")
const axieFinity = new Crypto("axie-infinity-axs-logo.png", "axie-infinity", "axs")
const stellarLumens = new Crypto("stellar-xlm-logo.png", "stellar", "xlm")
const daiMulti = new Crypto("multi-collateral-dai-dai-logo.png", "dai", "dai")
const tetherUSD = new Crypto("tether-usdt-logo.png", "tether", "ustd")
const litecoin = new Crypto("litecoin-ltc-logo.png", "litecoin", "ltc")
const rippleLabs = new Crypto("xrp-xrp-logo.png", "ripple", "xrp")
const binanceBNB = new Crypto("bnb-bnb-logo.png", "binancecoin", "bnb")
const eosCoin = new Crypto("eos-eos-logo.png", "eos", "eos")
const kusamaCoin = new Crypto("kusama-logo.png", "kusama", "kus")



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

    /* rowInsert inserts a new row based on the count */
    let rowInsert = row.insertRow();

    rowInsert.id = name.name;
    console.log(rowInsert.id)
    rowInsert.classList.add("row-insert")

    /* Insert cells in each row - token image, token name, current price
    nexo snapshot price, amount, current value, snapshot value, proift/loss %, credit/loan, eidt/delete */
    const cell0 = rowInsert.insertCell(-1);
    const cell1 = rowInsert.insertCell(1);
    cell1.setAttribute("style", "text-transform: capitalize;")
    const cell2 = rowInsert.insertCell(2);
    const cell3 = rowInsert.insertCell(3);
    const cell4 = rowInsert.insertCell(4);
    const cell5 = rowInsert.insertCell(5);
    cell5.classList.add("count-cv");
    cell5.textContent = ""
    const cell6 = rowInsert.insertCell(6);
    cell6.classList.add("count-sv")
    cell6.textContent = ""
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

    /* Gets the current price of the crypto every 10 seconds*/
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

    /* Initial fetch of current price */
    async function collectCP(price, x) {
        const config = { headers: { Accept: "application/json" } }
        const params = {
            ids: price
        }
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(params.ids)}&vs_currencies=usd`, config)
        x.textContent = res.data[price].usd.toFixed(2)
    };

    /* Fetch the snapshot price at 00:50:00 AM EST */
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

    /* Edit button */
    cell9.addEventListener("click", function () {
        cell4.setAttribute("contenteditable", true);
        cell4.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                cell4.setAttribute("contenteditable", false)
                cell5.textContent = name.currentValue(cell5, cell4, cell2);
                cell6.textContent = name.snapshotValue(cell6, cell4, cell3);
                console.log(cell6.textContent)
                cell7.textContent = parseFloat(((cell5.textContent / cell6.textContent) * 100) - 100).toFixed(2);
                if (cell7.textContent > 0) {
                    cell7.setAttribute("style", "color: green;")
                } else {
                    cell7.setAttribute("style", "color: red")
                }
            }
        })
    })

    /* Delete button */
    cell10.addEventListener("click", function () {
        rowInsert.remove()
        console.log(count)
    })

    /* Actions on each cell - end of function */
    cell0.appendChild(tokenImage);
    cell1.append(name.name)
    cell2.textContent = collectCP(cell1.textContent, cell2)
    cell2.textContent = fetchCP(cell1.textContent, cell2, cell5, cell4);
    cell3.textContent = collectSP(cell1.textContent, cell3, cell6, cell4, dateOne, dateTwo);
    cell4.textContent = name.createAmntEl(cell4);
    cell8.textContent = name.createTypeEl(cell8);
    cell9.textContent = "Edit"
    cell10.textContent = "Delete";

}

/* Change color of portfolio current and snapshot value based on which is higher */
function comparePortSnap() {
    if (portValue.textContent > snapValue.textContent) {
        portValue.setAttribute("style", "color: green;")
        snapValue.setAttribute("style", "color: red;")
    } else if (portValue.textContent < snapValue.textContent) {
        portValue.setAttribute("style", "color: red;")
        snapValue.setAttribute("style", "color: green;")
    }
}


/* Ticker function */

async function collectCurr(price, abb, tick) {

    setInterval(async function () {
        const config = { headers: { Accept: "application/json" } }
        const params = {
            ids: price
        }
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(params.ids)}&vs_currencies=usd`, config)

        tick.textContent = `${abb}: ${res.data[price].usd.toFixed(2)}`

    }, 8000);
};

const cryptoArr = [bitcoin, ethereum, cardano, solana, cosmos, polkadot, avalanche, chainLink, nexoNexo, dogecoin, terraLuna];
function ticker() {
    for (let i of cryptoArr) {
        let cryptoP = document.createElement("p")
        cryptoP.classList.add("ticker-left")
        cryptoP.textContent = collectCurr(i.name, i.abb, cryptoP);
        tick.appendChild(cryptoP)
        if (i === cryptoArr.length - 1) {
            i = 0;
        }

    }
}

ticker()


/* Sums the total of each current value cell, snapshot value cell, and p/l % */


function refresh() {
    setInterval(() => {
        let currentTotal = 0;
        let snapTotal = 0;
        let currentArr = [];
        let snapArr = [];
        let tds = document.getElementById("token-row").getElementsByTagName("td")
        let tdSnap = document.getElementById("token-row").getElementsByTagName("td")
        for (let i = 0; i < tds.length; i++) {
            if (tds[i].className === "count-cv") {
                currentArr.push(parseFloat(tds[i].innerText))
                const sumCurrent = currentArr.reduce(
                    (previousCurr, currentCurr) => previousCurr + currentCurr,
                    currentTotal
                );
                portValue.textContent = sumCurrent.toFixed(2)
                console.log(sumCurrent)
            }
        }
        for (let x = 0; x < tdSnap.length; x++) {
            if (tdSnap[x].className === "count-sv") {
                snapArr.push(parseFloat(tds[x].innerText))
                const sumSnap = snapArr.reduce(
                    (previousSnap, currentSnap) => previousSnap + currentSnap,
                    snapTotal
                );
                snapValue.textContent = sumSnap.toFixed(2)
                console.log(sumSnap)
            }
        }
        comparePortSnap()
        percentPL.textContent = parseFloat(((portValue.textContent / snapValue.textContent) * 100) - 100).toFixed(2);
        if (percentPL.textContent > 0) {
            percentPL.setAttribute("style", "color: green;")
        } else {
            percentPL.setAttribute("style", "color: red;")
        }
        let nexoPort = document.getElementById("nexo").cells[7].innerText;
        let nexoCurr = document.getElementById("nexo").cells[6].innerText;
        let per = parseFloat(percentPL.textContent);
        console.log(nexoPort)
        console.log(per)
        if (per < parseFloat(nexoPort)) {
            recPic.src = "bitcoin-btc-logo.png"
            recPic.setAttribute("style", "display: flex;")
            recPic.setAttribute("style", "justify-content: center;")
            console.log("hi")
        } else if (per > parseFloat(nexoPort)) {

            recPic.src = "nexo-nexo-logo.png"
            recPic.setAttribute("style", "height: 100px;")
            recPic.setAttribute("style", "width: 100px;")
            recPic.setAttribute("style", "display: flex;")
            recPic.setAttribute("style", "justify-content: center;")
        }
        let loyalLevel = parseFloat(nexoCurr / portValue.textContent).toFixed(3)
        console.log(loyalLevel)
        if (loyalLevel > .1) {
            loyalty.textContent = "Platinum";
        } else if (loyalLevel < .1 && loyalLevel > .05) {
            loyalty.textContent = "Gold";
        } else if (loyalLevel < .05 && loyalLevel > .01) {
            loyalty.textContent = "Silver";
        } else {
            loyalty.textContent = "Base";
        }
    }, 15000);
}

refresh()

/* Twitter News */

const twitterArticle = document.querySelector("#twitter-article");



/* Button functions that insert a row via the Crypto Class */

eth.addEventListener("click", function () {
    insRow(ethereum, count, sum);
    count += 1;
})

doge.addEventListener("click", function () {
    insRow(dogecoin, count);
    count += 1;
})

btc.addEventListener("click", function () {
    insRow(bitcoin, count, sum);
    count += 1;
})

atom.addEventListener("click", function () {
    insRow(cosmos, count);
    count += 1;
})

link.addEventListener("click", function () {
    insRow(chainLink, count);
    count += 1;
})

eos.addEventListener("click", function () {
    insRow(eosCoin, count);
    count += 1;
})

kus.addEventListener("click", function () {
    insRow(kusamaCoin, count);
    count += 1;
})

dot.addEventListener("click", function () {
    insRow(polkadot, count);
    count += 1;
})

matic.addEventListener("click", function () {
    insRow(polygon, count);
    count += 1;
})

btcCash.addEventListener("click", function () {
    insRow(bitcoinCash, count);
    count += 1;
})

tUSD.addEventListener("click", function () {
    insRow(trueUSD, count);
    count += 1;
})

pxu.addEventListener("click", function () {
    insRow(paxUS, count);
    count += 1;
})

pxg.addEventListener("click", function () {
    insRow(paxGold, count);
    count += 1;
})

usdc.addEventListener("click", function () {
    insRow(stableDollar, count);
    count += 1;
})

terra.addEventListener("click", function () {
    insRow(terraLuna, count);
    count += 1;
})

avax.addEventListener("click", function () {
    insRow(avalanche, count);
    count += 1;
})

ada.addEventListener("click", function () {
    insRow(cardano, count);
    count += 1;
})

sol.addEventListener("click", function () {
    insRow(solana, count);
    count += 1;
})

bnb.addEventListener("click", function () {
    insRow(binanceBNB, count);
    count += 1;
})

dai.addEventListener("click", function () {
    insRow(daiMulti, count);
    count += 1;
})

tron.addEventListener("click", function () {
    insRow(tronTron, count);
    count += 1;
})

ust.addEventListener("click", function () {
    insRow(tetherUSD, count);
    count += 1;
})

xrp.addEventListener("click", function () {
    insRow(rippleLabs, count);
    count += 1;
})

xlm.addEventListener("click", function () {
    insRow(stellarLumens, count);
    count += 1;
})

axie.addEventListener("click", function () {
    insRow(axieFinity, count);
    count += 1;
})

ftm.addEventListener("click", function () {
    insRow(fantom, count);
    count += 1;
})

nexo.addEventListener("click", function () {
    insRow(nexoNexo, count);
    count += 1;
})

ltc.addEventListener("click", function () {
    insRow(litecoin, count);
    count += 1;
})
