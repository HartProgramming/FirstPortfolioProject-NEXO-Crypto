
function insRow(name) {

    let tokenImage = document.createElement("img")
    tokenImage.src = name.pic
    tokenImage.height = 25;
    let rowInsert = row.insertRow();
    const cell0 = rowInsert.insertCell(-1);
    const cell1 = rowInsert.insertCell(1);
    const cell2 = rowInsert.insertCell(2);
    const cell3 = rowInsert.insertCell(3);
    const cell4 = rowInsert.insertCell(4);
    cell4.setAttribute("style", "background-color: red;")
    cell4.setAttribute("contenteditable", false)
    cell4.textContent = "500"
    const cell5 = rowInsert.insertCell(5);
    const cell6 = rowInsert.insertCell(6);
    const cell7 = rowInsert.insertCell(7);
    const cell8 = rowInsert.insertCell(8);
    cell8.textContent = "Loan";
    cell8.setAttribute("style", "background-color: red;")
    const cell9 = rowInsert.insertCell(9);
    cell9.setAttribute("type", "button")
    cell9.setAttribute("style", "background-color: orange;")
    cell9.textContent = "Edit";
    cell9.addEventListener("click", function () {
        cell4.setAttribute("contenteditable", true);
        cell4.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                cell4.setAttribute("contenteditable", false)
                cell5.textContent = parseFloat(cell4.textContent * cell2.textContent)
                cell6.textContent = parseFloat(cell4.textContent * cell3.textContent);
                cell7.textContent = Math.floor((cell5.textContent / cell6.textContent) * 100) - 100 + "%";
                portArr.push(cell5.textContent)
                console.log(portArr)
            }
        })
        cell8.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                cell8.setAttribute("contenteditable", false)
            }
        })
    })
    const cell10 = rowInsert.insertCell(10);
    cell10.setAttribute("type", "button")
    cell10.setAttribute("style", "background-color: red;")
    cell10.setAttribute("textContent", "delete")
    cell10.textContent = "Delete"
    cell10.addEventListener("click", function () {
        rowInsert.remove()
        portArr.pop(cell5.textContent)
    })
    cell0.appendChild(tokenImage);
    cell1.append(name.name);
    cell2.textContent = name.price;
    cell3.textContent = name.snap;


}


let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = 00;
let minutes = 50;
console.log(date)

async function collectCP(price, x) {
    const config = { headers: { Accept: "application/json" } }
    const cool = "usd"
    const params = {
        ids: price,
        vs_currencies: cool
    }
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${encodeURIComponent(params.ids)}/market_chart/range?vs_currency=usd&from=1646286604&to=1646287084`, config)
    x.textContent = res.data[price][cool]
    console.log(res.data[price][cool])
};

1646373004
1646459404
1646545804

86400
set a time interval for 24hours on the function???

const bitcoin = new Crypto("bitcoin-btc-logo.png", "bitcoin", 40)
const ethereum = new Crypto("ethereum-eth-logo.png", "ethereum", 50)
const cardano = new Crypto("cardano-ada-logo.png", "cardano", 40)
const solana = new Crypto("solana-sol-logo.png", "solana", 40)
const cosmos = new Crypto("cosmos-atom-logo.png", "cosmos", 40)
const polkadot = new Crypto("polkadot-new-dot-logo.png", "polkadot", 40)
const polygon = new Crypto("polygon-matic-logo.png", "polygon", 40)
const avalanche = new Crypto("avalanche-avax-logo.png", "avalanche", 40)
const paxGold = new Crypto("pax-gold-paxg-logo.png", "", 40)
const paxUS = new Crypto("paxos-standard-usdp-logo.png", "bitcoin", 40)
const tronTron = new Crypto("tron-trx-logo.png", "tron", 40)
const nexoNexo = new Crypto("nexo-nexo-logo.png", "nexo", 40)
const terraLuna = new Crypto("terra-luna-luna-logo.png", "bitcoin", 40)
const dogecoin = new Crypto("dogecoin-doge-logo.png", "dogecoin", 40)
const fantom = new Crypto("fantom-ftm-logo.png", "fantom", 40)
const stableDollar = new Crypto("usd-coin-usdc-logo.png", "usdc", 40)
const bitcoinCash = new Crypto("bitcoin-cash-bch-logo.png", "", 40)
const trueUSD = new Crypto("trueusd-tusd-logo.png", "bitcoin", 40)
const axieFinity = new Crypto("axie-infinity-axs-logo.png", "bitcoin", 40)
const stellarLumens = new Crypto("stellar-xlm-logo.png", "bitcoin", 40)
const daiMulti = new Crypto("multi-collateral-dai-logo.png", "bitcoin", 40)
const tetherUSD = new Crypto("tether-usdt-logo.png", "bitcoin", 40)
const litecoin = new Crypto("litecoin-ltc-logo.png", "chainlink", 40)
const axieINF = new Crypto("axie-infinity-axs-logo.png", "chainlink", 40)
const rippleLabs = new Crypto("xrp-xrp-logo.png", "chainlink", 40)
const binanceBNB = new Crypto("bnb-bnb-logo.png", "chainlink", 40)
const eosCoin = new Crypto("eos-eos-logo.png", "chainlink", 40)

/* Need edit */

polygon


pax stableDollar
