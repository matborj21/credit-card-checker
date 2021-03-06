// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
// const sample = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


//function to validate card
const validateCred = arr => {
    let newArr = [];
    //functiion is to calculate the sum of array value
    //this function is need to execute the REDUCE function
    const reducer = (accumulator, currentValue) => accumulator + currentValue;


    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            arr[i] += arr[i];
            if (arr[i] > 9) {
                arr[i] -= 9;
            }
        }
        newArr.push(arr[i]);
    }

    //REDUCE is a built in function of JS refer to MDN for more info
    //assigned the sum of newArr into variable sum
    const sum = newArr.reduce(reducer);

    //so this line can be executed much cleaner
    //this will return true if the modulo of sum is equal to zero
    return sum % 10 === 0;
}

// console.log(validateCred(valid1));


//fucntion to check if the card is invalid based on the given array
const findInvalidCards = array => {
    let invalid = [];

    //iterate all the list of array using this loop
    for (let i = 0; i < array.length; i++) {
        //assigned into currCred varialble the list of array
        let currCred = array[i];


        //check the list of array if card is invalid
        if (!validateCred(currCred)) {
            //store in the new array the list of invalid card
            invalid.push(currCred);
        }
    }

    //will return all the invalid card. if valid it should be blank.
    return invalid;
}


//a function to check if what company comes from the invalid card
const idInvalidCardCompanies = invaliCards => {
    let company = [];
    //iterate in the list of array all the invalid cards
    for (let i = 0; i < invaliCards.length; i++) {

        //create a switch statement to check if the first index
        //of card to know whic compnay it is belong
        switch (invaliCards[i][0]) {
            //if company is valid it will add to array of companies
            case 3:
                if (company.indexOf('Amex') === -1) {
                    company.push('Annex');
                }
                break;
            case 4:
                if (company.indexOf('Visa') === -1) {
                    company.push('Visa');
                }
                break;
            case 5:
                if (company.indexOf('Mastercard') === -1) {
                    company.push('Mastercard');
                }
                break;
            case 6:
                if (company.indexOf('Discover') === -1) {
                    company.push('Discover');
                }
                break;
            //will return the defauly error message
            default:
                console.log('Company not found');
                break;
        }
    }
    return company;
}
console.log(idInvalidCardCompanies([invalid1])); // Test what the mystery numbers are
console.log(idInvalidCardCompanies([invalid4])); // Test what the mystery numbers are
console.log(idInvalidCardCompanies(batch)); // Test what the mystery numbers are




