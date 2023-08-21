"use strict"
// vendingMachine.js

const vendingMachine = [
    { snack: 'Snickers', quantity: 10, price: 1.50 },
    { snack: 'M&Ms', quantity: 5, price: 1 },
    { snack: 'Sour patch', quantity: 15, price: 3 },
    { snack: "Coca-Cola", quantity: 0, price: 3}
];

// user has $100
let moneyThatUserHas = 100;

const addSnackToVendingMachine = (snack, quantity, price) => {
    vendingMachine.push({snack, quantity, price});
    // return vendingMachine;
}

// addSnackToVendingMachine("Sour Patch", 15, 3)

const buySnack = (snack) => {
    for (const snackObject of vendingMachine) {
        if (snack === snackObject.snack && snackObject.quantity !== 0) {
            moneyThatUserHas -= snackObject.price;
            snackObject.quantity--;
            return moneyThatUserHas;
        } else if (snack === snackObject.snack && snackObject.quantity === 0) {
            console.log(`${snack} is out of stock`);
        }
    }
}

// buySnack("Snickers");
// buySnack("Coca-Cola");
// console.log(moneyThatUserHas);
// console.log(vendingMachine);

const getTotalPriceOfAllVendingMachineItems = () => {
    const totalPriceOfVendingMachine = vendingMachine.reduce(
        (accumulation, eachSnack) => accumulation + (eachSnack.quantity * eachSnack.price), 0);
    return totalPriceOfVendingMachine;
}

// console.log(getTotalPriceOfAllVendingMachineItems());

// i guess there's no good way to test this function using jest
// you can just run the function and see if it console.logs what you want it to
const displayVendingMachineItems = () => {
    /* LONGER ANSWER
     for (let i = 0; i < vendingMachine.length; i++) {
    //     const snackObject = vendingMachine[i];

    //     console.log(`${i+1}. ${snackObject.quantity} ${snackObject.snack}: $${snackObject.price} each`)
    // }
    */
    vendingMachine.forEach((snackObject, index) => {
        console.log(`${index+1}. ${snackObject.quantity} ${snackObject.snack}: $${snackObject.price} each`);
    })
}

displayVendingMachineItems();


const getNamesOfAllSnackItems = () => {
    const listOfSnackNames = vendingMachine.map(
        (snackObject) => snackObject.snack);

    return listOfSnackNames;
}

// console.log(getNamesOfAllSnackItems());

const getAllSnacksUnderTwoDollars = () => {
    const snacksUnderTwoDollars = vendingMachine.filter(
        (snackObject) => snackObject.price < 2
    )
    return snacksUnderTwoDollars;
}

// console.log(getAllSnacksUnderTwoDollars());

const hasSnack = (snack) => {
    for (const snackObject of vendingMachine) {
        if (snackObject.snack === snack && snack.quantity !== 0) {
            return true;
        }
    }
    return false;
}

// console.log(hasSnack("M&Ms"))
// make sure you export all the things you want to test
// do not export the vending machine. only test the functions
module.exports = {
  moneyThatUserHas,
  addSnackToVendingMachine,
  getTotalPriceOfAllVendingMachineItems,
  buySnack,
  getNamesOfAllSnackItems,
  getAllSnacksUnderTwoDollars,
  hasSnack,
}