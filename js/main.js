// Schreibe eine Funktion, die beim Anklicken des Buttons die Tabelle erstellt.
// Verwende der Code aus dem Kommentar.
// Verwende
// createElement
// appendChild
// for loop in for loop
// parseInt
// insertRow
// insertCell

let rowNum = document.getElementById("zeilenFeld")
let colNum = document.getElementById("spaltenFeld")
let userRow
let userCol

let result = document.getElementById("result");
let newTable = document.createElement("table")
let newRow
var newCell
let newText
let numRow
let numCol


console.log(parseInt("1.1")) // 1

const generateTable = () => {
    userRow = rowNum.value
    userCol = colNum.value
    console.log(userRow, userCol)
    result.appendChild(newTable)
    for (let index = 0; index < userRow; index++) {
        newRow = newTable.insertRow()
        numRow = index
        console.log("numRow " + numRow)
        for (let index = 0; index < userCol; index++) {
            newCell = newRow.insertCell()
            numCol = index
            console.log("numCol " + numCol)
            newText = document.createTextNode(`${ numRow +1}.${numCol+1}`);
            newCell.appendChild(newText);
        }
        
    }

}