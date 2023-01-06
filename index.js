/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-el")
const numEl = document.getElementById("num-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


let length = (number) => {
    const meters = (number / 3.281).toFixed(3)
    const feet = (number * 3.281).toFixed(3)
    return lengthEl.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`
}

let volume = (number) => {
    const liters = (number / 0.264).toFixed(3)
    const gallons = (number * 0.264).toFixed(3)
    return volumeEl.textContent = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`   
}

let mass = (number) => {
    const kilos = (number / 2.204).toFixed(3)
    const pounds = (number * 2.204).toFixed(3)
    return massEl.textContent = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos` 
}

let convertFunc = (num) => {
    length(num)
    volume(num)
    mass(num)
}

convertEl.addEventListener("click", function() {
    convertFunc(numEl.value)
})

