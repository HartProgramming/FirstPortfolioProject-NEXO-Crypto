
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

14760