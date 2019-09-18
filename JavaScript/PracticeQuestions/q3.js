// 3. Assume that you are developing an ATM machine, Prompt the user to enter amount he/she wants to withdraw.
//
// a. Alert “Your amount is ready” if they enter a multiple of 20 else alert “Please enter multiples of 20”
//
// b. Additionally, check if the user entered number of a string. If he did not enter a number then alert – Please enter valid number.
//
//  Hint: Use isNaN() method provided by Javascript.

function widthdrawMoney (){
    var num = prompt("enter the amount to widthdraw:");
    num = parseInt(num);

    if (isNaN(num)){
        alert('Please enter an Integer.')
    }
    else if (num%20 == 0){
        alert('Your Amount is ready.');
    }
    else{
        alert('Please enter a multiple of 20.');
    }
}
widthdrawMoney();
